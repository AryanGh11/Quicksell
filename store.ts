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


// vless://d876c7fa-c755-424c-b338-284c22e77e76@samantaip.ddns.net:42784?type=grpc&serviceName=&security=reality&fp=chrome&pbk=QfS8kXsip9SdYnp90o7FUvycc8A00cknTkiLrlHi0lQ&sni=www.speedtest.net&sid=48e8eac0&spx=%2F#samanta%20reality%201%20%7C-%40Aryan_Gh.A%20user8
