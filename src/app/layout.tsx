import type { Metadata } from "next";
import "./globals.css";
import BookEaseChatbot from "@/components/chatbot";

export const metadata: Metadata = {
  title: "BookEase | Appointment Booking SaaS",
  description: "Modern, professional appointment booking platform for Indian businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white">
        {children}
        <BookEaseChatbot />
      </body>
    </html>
  );
}
