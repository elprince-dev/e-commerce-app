"use client";

import { useSearchParams } from "next/navigation";
import ProductList from "@/components/ProductList";

const ProductListWrapper = ({ categoryId }) => {
  const searchParams = useSearchParams();

  return <ProductList categoryId={categoryId} searchParams={searchParams} />;
};

export default ProductListWrapper;