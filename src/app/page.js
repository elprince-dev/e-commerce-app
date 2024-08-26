import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { wixClientServer } from "@/lib/wixClientServer";
import { products, collections } from "@wix/stores";
import { Suspense } from "react";

export default async function Home() {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
  //   };
  //   getProducts();
  // }, [wixClient]);

  const featuredId = process.env.FEATURED_PRODUCTS_CATEGORY_ID;
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList categoryId={featuredId} limit={4} />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 mb-12">Categoris</h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8">
        <h1 className="text-2xl">New Products</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  );
}
