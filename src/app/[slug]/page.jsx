import Add from "@/components/Add";
import CustomizedProduct from "@/components/CustomizedProduct";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const wixClient = await wixClientServer();
  const { items } = await wixClient.products
    .queryProducts()
    .eq("slug", slug)
    .find();

  if (!items) {
    return notFound();
  }

  const product = items[0];

  return (
    <div className="px-4 md:px-8 flex flex-col lg:flex-row gap-16 relative">
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />

        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">${product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions && (
          <CustomizedProduct
            productId={product._id}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        )}
        <Add />
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections.map((section) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
