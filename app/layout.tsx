import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "BreakingFilm",
  description: "Watch your favorite film for free. Opensource & Local",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
