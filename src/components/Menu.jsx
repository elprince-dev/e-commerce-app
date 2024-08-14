"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export const links = [
  {
    name: "Homepage",
    href: "/",
  },
  {
    name: "Shop",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
  {
    name: "Sign out",
    href: "/",
  },
  {
    name: "Cart(1)",
    href: "/",
  },
];

const Menu = () => {
  const [open, SetOpen] = useState(false);

  return (
    <div>
      <Image
        src="/menu.png"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => SetOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          {links.map((link) => (
            <Link href={link.href}>{link.name}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
