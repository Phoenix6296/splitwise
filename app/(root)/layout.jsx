"use client";
import { auth } from "@/firebase";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Sidebar } from "@/components/common";

const inter = Montserrat({ subsets: ["latin"] });

export default function HomeLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <div className={`w-full ${inter.className}`}>
      <div className="w-full flex">
        <div className="min-h-screen w-[90px] sticky top-0 left-0 z-40">
          <Sidebar />
        </div>
        <div className="desktop-view w-full pt-5 pl-5">{children}</div>
      </div>
    </div>
  );
}
