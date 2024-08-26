import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
const ProductList = async ({ categoryId, limit = 20 }) => {
  const wixClient = await wixClientServer();
  const { items } = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit)
    .find();
  console.log(items[0]);
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {items.map((product) => (
        <Link
          key={product._id}
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="object-cover rounded-md absolute z-10 hover:opacity-0 transition all ease-in-out duration-500"
            />

            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url}
                alt=""
                fill
                sizes="25vw"
                className="object-cover rounded-md absolute"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>
          <div className="text-sm text-gray-500">{product.description}</div>
          <button className=" w-max rounded-2xl ring-1 ring-secondary text-secondary py-2 px-4 text-xs hover:bg-secondary hover:text-white transition-all ease-in-out duration-100">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
