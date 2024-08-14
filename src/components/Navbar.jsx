import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/">
          <Image
            src="/yesmine-logo/png/logo-no-background.png"
            width={170}
            height={10}
          />
        </Link>
        <Menu />
      </div>
      {/* Big screens */}
      <div className=" hidden md:flex items-center justify-between h-full gap-8">
        {/* Left */}
        <div className="w-1/3">
          <Link href="/">
            <Image
              src="/yesmine-logo/png/logo-no-background.png"
              width={170}
              height={10}
            />
          </Link>
        </div>
        {/* Right */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
