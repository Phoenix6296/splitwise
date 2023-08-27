"use client";
import { auth } from "@/firebase";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
  return <div className={inter.className}>{children}</div>;
}
