import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  pixelBasedPreset,
  Tailwind,
  Text,
} from "react-email";

import { site } from "~/lib/site";

type WelcomeEmailProps = {
  name: string;
  subject?: string;
};

function WelcomeEmail({ name, subject }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-10 max-w-116.25 rounded border border-amber-400 border-solid p-5">
            <Preview>We received your message</Preview>
            <Heading className="text-2xl font-bold text-gray-900">
              Message received
            </Heading>
            <Text className="text-gray-700">
              Hello {name}, thank you for contacting Blue Star Auto. We have
              received your message and our team will review it shortly.
            </Text>
            {subject ? (
              <Text className="text-gray-700">
                <strong>Subject:</strong> {subject}
              </Text>
            ) : null}
            <Button
              href={`mailto:${site.email}`}
              className="rounded-md bg-black px-4 py-3 text-white"
            >
              Contact our team
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default WelcomeEmail;
