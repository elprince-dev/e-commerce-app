"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";

const NavbarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  const wixClient = useWixClient()
  const isLoggedIn = wixClient.auth.loggedIn()

  // //   Temproray;
  // const isLoggedIn = true;

  const handleProfile = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
    
  };

  // Auth with wix-managed auth
  // const wixClient = useWixClient();
  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  // "http://localhost:3000",
  //   );
  //   console.log(loginRequestData)

  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData))
  //   const {authUrl} = await wixClient.auth.getAuthUrl(loginRequestData)
  //   window.location.href = authUrl

  // }

  const handleLogout = async () =>{
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  }
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
        // onClick={login}

      />

      {isProfileOpen && (
        <div className=" absolute bg-white p-4 rounded-md top-12 left-0 text-sm shadow-md z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}> {isLoading? "Signing out ...": "Sign out"}</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
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
