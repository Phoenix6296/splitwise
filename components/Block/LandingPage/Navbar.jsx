import { Button } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-5">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={128} height={77} />
      </Link>
      <div className="flex items-center justify-center gap-5">
        <Link href="/login">
          <Button title={"Login"} shadow="none" className={"px-5"} />
        </Link>
        <Link href="/signup">
          <Button title={"Signup"} className={"bg-primary text-white px-5"} />
        </Link>
      </div>
    </nav>
  );
};
