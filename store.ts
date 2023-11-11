import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AddCartType } from "./types/AddCartType";

type CartState = {
  isOpen: boolean;
  cart: AddCartType[];
  toggleCart: () => void;
  clearCart: () => void;
  addProduct: (item: AddCartType) => void;
  removedProduct: (item: AddCartType) => void;
  paymentIntent: string;
  onCheckout: string;
  setPaymentIntent: (val: string) => void;
  setCheckout: (val: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,
      paymentIntent: "",
      onCheckout: "cart",
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      clearCart: () => set((state) => ({ cart: [] })),
      addProduct: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! + 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      removedProduct: (item) =>
        set((state) => {
          //check if the item exist and remove quantity -1
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );
          if (existingItem && existingItem.quantity! > 1) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! - 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            //remove item from cart
            const filteredCart = state.cart.filter(
              (cartItem) => cartItem.id !== item.id
            );
            return { cart: filteredCart };
          }
        }),
      setPaymentIntent: (val) => set((state) => ({ paymentIntent: val })),
      setCheckout: (val) => set((state) => ({ onCheckout: val })),
    }),
    { name: "cart-store" }
  )
);

type ThemeState = {
  mode: "light" | "black";
  toggleMode: (theme: "light" | "black") => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "light",
      toggleMode: (theme) => set((state) => ({ mode: theme })),
    }),
    { name: "theme-store" }
  )
);

type AdminSession = {
  isLogin: boolean;
  toggleLogin: () => void;
};

export const useAdminSession = create<AdminSession>()(
  persist(
    (set) => ({
      isLogin: false,
      toggleLogin: () => set((state) => ({ isLogin: !state.isLogin })),
    }),
    { name: "admin-session" }
  )
);


// vless://eb4cacac-3063-4e88-84ff-9fd3ca0c3a15@samantaip.ddns.net:12735?type=tcp&path=%2F%40filterintl&host=www.discord.com&headerType=http&security=none#%40filterintl%20iran%20Right%201%20l-%40Aryan_Gh%206%D9%85%D8%A7%D9%87%20user8
