"use server";

import { Resend } from "resend";
import { z } from "zod";
import WelcomeEmail from "~/email-templates/welcome";
import { env } from "~/env";
import { site } from "~/lib/site";

const resend = new Resend(env.RESEND_API_KEY);

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(1).max(40),
  subject: z.string().trim().min(1).max(160),
  message: z.string().trim().min(1).max(2000),
  website: z.string().max(0).optional(),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsed.success || parsed.data.website) {
    return {
      status: "error",
      message: "Please check the form and try again.",
    };
  }

  const { firstName, lastName, email, phone, subject, message } = parsed.data;

  try {
    const [internalEmail, confirmationEmail] = await Promise.all([
      resend.emails.send({
        from: env.EMAIL_FROM,
        to: [site.email],
        replyTo: email,
        subject: `New contact form message: ${subject}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\n${message}`,
      }),
      resend.emails.send({
        from: env.EMAIL_FROM,
        to: [email],
        replyTo: site.email,
        subject: "We received your message",
        react: WelcomeEmail({ name: firstName, subject }),
      }),
    ]);

    if (internalEmail.error || confirmationEmail.error) {
      throw new Error("Unable to send contact emails");
    }

    return {
      status: "success",
      message:
        "Thanks. Your message was sent, and a confirmation email is on its way.",
    };
  } catch {
    return {
      status: "error",
      message: "We could not send your message right now. Please try again.",
    };
  }
}
