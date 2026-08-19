import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "~/components/footer";
import { Header, SiteShell } from "~/components/header";
import { site } from "~/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="bluestar"
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden scroll-pt-20 antialiased`}
    >
      <body className="min-h-full font-sans">
        <SiteShell>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SiteShell>
      </body>
    </html>
  );
}
