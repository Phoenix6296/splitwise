"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dashboard, Invite, Recent } from "../Icons";
import Image from "next/image";
import { getUser, handleLogout } from "@/utils/apis/auth";
import { FiLogOut } from "react-icons/fi";
import { Tooltip } from ".";
import { getFirstWord } from "@/utils/helper";

const listContent = [
  { name: "Dashboard", icon: Dashboard, link: "/dashboard" },
  { name: "Recents", icon: Recent, link: "/recents" },
  { name: "Invite", icon: Invite, link: "/invite" },
];

export const Sidebar = () => {
  const router = useRouter();
  const [active, setActive] = useState("");
  const [user, setUser] = useState(null);
  const [menuVisibility, setMenuVisibility] = useState(false);

  useEffect(() => {
    const activeItem = listContent.find(({ link }) => router.route === link);
    setActive(activeItem?.name || "");
    setUser(getUser());
  }, [router.route]);

  return (
    <section className="px-4 bg-white h-screen pt-5 w-full sticky left-0 top-0 shadow-md">
      <Link href="/dashboard">
        <Image src="/logo-icon.svg" alt="Logo" width={100} height={100} />
      </Link>
      <div className="flex flex-col gap-5 w-14 justify-between items-center h-[88vh] pt-7">
        <ul className="space-y-2">
          {listContent.map(({ name, icon: Icon, link }) => (
            <Tooltip key={name} content={`${name}`} position="right">
              <Link href={link}>
                <li
                  className="flex flex-col items-center gap-5 rounded-full p-3 cursor-pointer hover:bg-gray-100"
                  onClick={() => setActive(name)}
                >
                  <Icon active={name === active} />
                </li>
              </Link>
            </Tooltip>
          ))}
        </ul>
        <button
          className="flex items-center gap-2 rounded-md p-1.5 border hover:shadow-md"
          onClick={() => setMenuVisibility(!menuVisibility)}
        >
          <Image
            src={user?.photoURL || "/Assets/unknown-avatar.jpeg"}
            alt="Profile"
            width="50"
            height="50"
          />
        </button>
      </div>
      {menuVisibility && (
        <div className="absolute bottom-5 left-20 text-sm bg-white rounded-md max-w-52 shadow-custom-shadow overflow-hidden">
          <Link href={`/profile/${user?.uid}`}>
            <p className="p-3 text-gray-500 truncate">
              Welcome, {getFirstWord(user?.displayName)}
            </p>
          </Link>
          <hr />
          <button
            className="p-3 text-red-500 hover:bg-gray-100 w-full text-left"
            onClick={() => handleLogout(router)}
          >
            <FiLogOut className="inline-block mr-2" /> Logout
          </button>
        </div>
      )}
    </section>
  );
};
