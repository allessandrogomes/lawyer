import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raylaw",
  description: "At Raylaw, we offer expert legal services with a personal touch. Our team is dedicated to helping you navigate legal challenges in areas like business, family law, and more. Trust us to protect your rights and achieve your goals. Contact us for a consultation today.",
  openGraph: {
    type: "website",
    title: "Raylaw",
    description: "At Raylaw, we offer expert legal services with a personal touch. Our team is dedicated to helping you navigate legal challenges in areas like business, family law, and more. Trust us to protect your rights and achieve your goals. Contact us for a consultation today.",
    url: "https://raylaw.vercel.app"
  },
  icons: "/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
