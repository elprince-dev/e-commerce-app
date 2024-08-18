import Add from "@/components/Add";
import CustomizedProduct from "@/components/CustomizedProduct";
import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 flex flex-col lg:flex-row gap-16 relative">
      {/* Image */}
      <div className=" w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          similique in facere autem quia praesentium ex corrupti omnis dolorum
          nobis. Voluptatum provident autem suscipit natus, vero similique
          perferendis quo consequuntur.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizedProduct />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, debitis ipsum ex velit ipsa aliquam iure rem quo cum.
            Alias magnam atque consequatur et fuga sed quia, reprehenderit
            provident nam?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, debitis ipsum ex velit ipsa aliquam iure rem quo cum.
            Alias magnam atque consequatur et fuga sed quia, reprehenderit
            provident nam?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, debitis ipsum ex velit ipsa aliquam iure rem quo cum.
            Alias magnam atque consequatur et fuga sed quia, reprehenderit
            provident nam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
