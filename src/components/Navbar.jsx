import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
// import NavbarIcons from "./NavbarIcons";
const NavbarIcons = dynamic(()=> import("./NavbarIcons"), {ssr: false})

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8  relative">
      {/* Mobile */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/">
          <Image
            src="/yesmine-logo/png/logo-no-background.png"
            width={170}
            height={170}
            alt=""
          />
        </Link>
        <Menu />
      </div>
      {/* Big screens */}
      <div className=" hidden md:flex items-center justify-between h-full gap-8">
        {/* Left */}
        <div className="w-1/3 xl:w-3/5  flex items-center gap-12">
          <Link href="/">
            <Image
              src="/yesmine-logo/png/logo-no-background.png"
              width={170}
              height={170}
              alt=""
            />
          </Link>
          <div className="hidden xl:flex gap-4 ">
            <Link href="/">HomePage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/login" className="whitespace-nowrap">
              Sign out
            </Link>
            <Link href="/">Cart</Link>
          </div>
        </div>

        {/* Right */}
        <div className="w-2/3 xl:w-2/5 flex items-center justify-between gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
