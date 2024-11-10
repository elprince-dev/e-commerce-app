import { create } from 'zustand'
// import { currentCart } from "@wix/ecom";
// import { WixClient } from "@/context/wixContext";

export const useCartStore = create((set) => ({
  cart: [],
  isLoading: true,
  counter:0,
  getCart: async (wixClient) => {
    const cart = await wixClient.currentCart.getCurrentCart();
      set({
        cart: cart || [],
        isLoading: false,
        counter: cart?.lineItems.length || 0,
      });
  },
  addItem: async (wixClient) => {},
  removeItem: async (wixClient) => {},
}))
