// app/home/layout.tsx
import React from "react";
import Navbar from "@/components/common/navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
    </>
  );
}
