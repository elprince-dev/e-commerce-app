"use client";
const { WixClientContext } = require("@/context/wixContext");
const { useContext } = require("react");

export const useWixClient = () => {
  return useContext(WixClientContext);
};