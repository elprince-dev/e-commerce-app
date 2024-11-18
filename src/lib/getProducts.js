// lib/getProducts.js
import { wixClientServer } from "@/lib/wixClientServer";

export const getProducts = async (categoryId, searchParams, limit = 8) => {
  const wixClient = await wixClientServer();
  const PRODUCT_PER_PAGE = limit;

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 9999999)
    .eq("collectionIds", categoryId)
    .limit(PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * PRODUCT_PER_PAGE
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");
    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  return await productQuery.find();
};
