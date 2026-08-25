"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useActionState } from "react";
import { type ContactFormState, sendContactMessage } from "~/app/actions";

const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialContactFormState,
  );

  return (
    <form className="mt-7 grid gap-5" action={formAction}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-control gap-2">
          <span className="label-text font-semibold text-neutral">
            First Name <span className="text-error">*</span>
          </span>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            autoComplete="given-name"
            required
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control gap-2">
          <span className="label-text font-semibold text-neutral">
            Last Name <span className="text-error">*</span>
          </span>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            autoComplete="family-name"
            required
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-control gap-2">
          <span className="label-text font-semibold text-neutral">
            Email Address <span className="text-error">*</span>
          </span>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            autoComplete="email"
            required
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control gap-2">
          <span className="label-text font-semibold text-neutral">
            Phone Number <span className="text-error">*</span>
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="+XX XX XX XX XX"
            autoComplete="tel"
            required
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <label className="form-control gap-2">
        <span className="label-text font-semibold text-neutral">
          Subject <span className="text-error">*</span>
        </span>
        <input
          type="text"
          name="subject"
          placeholder="What can we help you with?"
          required
          className="input input-bordered w-full"
        />
      </label>

      <label className="form-control gap-2">
        <span className="label-text font-semibold text-neutral">
          Message <span className="text-error">*</span>
        </span>
        <textarea
          name="message"
          placeholder="Tell us about your project or inquiry..."
          maxLength={2000}
          required
          className="textarea textarea-bordered min-h-36 w-full resize-y"
        />
        <span className="label-text-alt self-end text-base-content/50">
          Maximum 2000 characters
        </span>
      </label>

      <label className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <span>Website</span>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>

      {state.message ? (
        <output
          aria-live="polite"
          className={`alert ${state.status === "success" ? "alert-success" : "alert-error"}`}
        >
          {state.message}
        </output>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary mt-2 w-fit"
      >
        {isPending ? "Sending..." : "Send Message"}
        <PaperAirplaneIcon className="size-5" />
      </button>
    </form>
  );
}
