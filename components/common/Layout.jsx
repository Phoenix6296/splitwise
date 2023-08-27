"use client";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

export const Layout = ({ children, className }) => {
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard");
      }
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url("/Assets/LandingPage/background.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={className}
    >
      {children}
      <Toaster />
    </div>
  );
};
