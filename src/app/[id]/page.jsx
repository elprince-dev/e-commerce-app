import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 flex flex-col lg:flex-row gap-16 relative">
      {/* Image */}
      <div className=" w-full lg:w-1/2 lg:stick top-20 h-max">
        <ProductImages />
      </div>
      {/* text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6"> text</div>
    </div>
  );
};

export default SinglePage;
