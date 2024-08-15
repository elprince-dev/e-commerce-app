"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavbarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  //   Temproray;
  const isSignedIn = true;

  const handleProfile = (e) => {
    e.preventDefault();

    if (!isSignedIn) {
      router.push("/signin");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />

      {isProfileOpen && (
        <div className=" absolute p-4 rounded-md top-12 left-0 text-sm shadow-md z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer"> Sign out</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer w-[22px]">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-secondary rounded-full text-white text-sm flex justify-center items-center">
          2
        </div>
      </div>

      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavbarIcons;
