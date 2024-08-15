"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div> Cart is empty</div>
      ) : (
        <>
          <h2 className="text-lg">Shopping Cart</h2>
          {/* List */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/15521503/pexels-photo-15521503/free-photo-of-central-london-street-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                width={72}
                height={96}
                alt=""
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top section  */}
                <div className="">
                  {/* title  */}
                  <div className="flex justify-between items-center gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* description  */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>

                {/* bottom section */}
                <div className="flex justify-between text-sm">
                  <span className=" text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* //Order summary */}
          <div className="">
            <div className="flex items-center font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-2 mb-4 mt-2">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
