import type { Metadata } from "next";
import "./globals.css";
import Fm from "@/components/fm";
import Nav from "@/components/nav";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Aram",
  description: "Student Developer based in Seattle, WA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="dark">
        <body
          className="
          antialiased bg-[#1f2422] dark:bg-white p-20 
          w-screen prose prose-p:text-white dark:prose-p:text-black 
          prose-blockquote:font-eiko prose-a:text-sm prose-a:no-underline
        prose-a:text-[#e6e9ff] dark:prose-a:text-[#1f2422] 
        prose-h1:text-white dark:prose-h1:text-black
        prose-h2:text-white dark:prose-h2:text-black
        prose-h3:text-white dark:prose-h3:text-black
           "
        >
          <Fm>
            <Nav />
            <SessionProvider>{children}</SessionProvider>
          </Fm>
        </body>
      </html>
    </>
  );
}
