import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 mb-12">Categoris</h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
    </div>
  );
}
