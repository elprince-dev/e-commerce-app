import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8">
      {/* Campaign */}
      <div className="hidden sm:flex bg-pink-50 px-4 justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-secondary text-white w-max text-sm py-3 px-5">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      <Filter />
      {/* Products */}
      <h1 className="mt-12 text-xl font-semibold">Shoes for You!</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
