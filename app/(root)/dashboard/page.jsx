"use client";
import { Button } from "@/components/common";
import { handleLogout } from "@/utils/apis/auth";
import { useRouter } from "next/navigation";

export default function dashboard() {
  const router = useRouter();
  return (
    <div>
      <Button
        title="Logout"
        className="bg-primary text-white"
        onClick={() => handleLogout(router)}
      />
    </div>
  );
}
