import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components";


export const metadata: Metadata = {
  title: "My App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
        <>
        <Sidebar />
        {children}
        </>
  );
}
