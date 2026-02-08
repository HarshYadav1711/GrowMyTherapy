import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy | Santa Monica, CA",
  description: "Licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, burnout, and perfectionism. In-person and California telehealth available.",
  keywords: ["therapist", "psychologist", "anxiety", "trauma", "EMDR", "Santa Monica", "California", "telehealth", "burnout", "perfectionism"],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy",
    description: "Licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, and burnout.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
