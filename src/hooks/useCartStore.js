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
  addItem: async (wixClient, productId, variantId, quantity) => {
    set((state)=>({...state, isLoading: true}))
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems:[
        {
          catalogReference:{
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID,
            catalogItemId: productId,
            ...(variantId && {options: {variantId}}),
          },
          quantity: quantity,
        }
      ]
    })
    set({cart: response.cart, counetr: response.cart?.lineItems.length, isLoading: false})
  },
  removeItem: async (wixClient, itemId) => {
    set((state)=>({...state, isLoading: true}))
    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart([itemId]); 
    set({cart: response.cart, counetr: response.cart?.lineItems.length, isLoading: false})
  },
}))
