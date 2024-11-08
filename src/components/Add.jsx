"use client";
import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

const Add = ({ productId, variantId, stockNumber }) => {
  const [quantity, setQuantity] = useState(1);

  // //temperory
  // const stock = 4;

  const handleQuantity = (type) => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };
  const wixClient = useWixClient()
  const addItem = async ()=>{
    response = await wixClient.currentCart.addToCurrentCart({
      lineItems:[
        {
          catalogReference:{
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID,
            catalogItemId: productId,
            ...(variantId && {options: {variantId}}),
          },
          quantity: quantity,
        }
      ]
    })

  }
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className=" text-xs">Product is out of stock</div>
          ) : (
            <div className=" text-xs">
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left! <br /> {"Don't"} miss it
            </div>
          )}
        </div>

        <button onClick={addItem} className="w-36 text-sm rounded-3xl ring-1 ring-secondary text-secondary py-2 px-4 hover:bg-secondary hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-secondary disabled:hover:bg-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
