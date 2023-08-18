"use client";

import Image from "next/image";
import { useCartStore } from "@/store";
<<<<<<< HEAD
import { IoIosArrowBack } from "react-icons/io";
import basket from "@/public/cart.png";
import { motion, AnimatePresence } from "framer-motion";
import Checkout from "./Checkout";
import OrderConfirmed from "./OrderConfirmed";
import formatPrice from "@/util/formatPrice";
import CartItem from "./CartItem";
=======
import { IoMdAdd, IoMdRemove, IoIosArrowBack } from "react-icons/io";
import basket from "@/public/cart.png";
import { AddCartType } from "@/types/AddCartType";
import { motion, AnimatePresence } from "framer-motion";
import Checkout from "./Checkout";
import OrderConfirmed from "./OrderConfirmed";
>>>>>>> 4039faa7f320834862c0ab2825b94af94d48e5c8

export default function Cart() {
  const cartStore = useCartStore();

  //Total price
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.finalPrice! * item.quantity!;
  }, 0);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-based_color_peanut_butter_crust z-10"
    >
      {/* Cart */}
      <motion.div
        layout
        onClick={(e) => e.stopPropagation()}
        className="bg-base-300 absolute right-0 top-0 h-screen px-6 py-14 overflow-y-scroll w-full lg:w-2/5"
      >
        {cartStore.onCheckout === "cart" && (
          <button
            onClick={() => cartStore.toggleCart()}
            className="text-sm font-bold pb-12 w-6"
          >
            <IoIosArrowBack className="w-full h-full" />
          </button>
        )}
        {cartStore.onCheckout === "checkout" && (
          <button
            onClick={() => cartStore.setCheckout("cart")}
            className="text-sm font-bold pb-12"
          >
            Check your cart 🛒
          </button>
        )}
        {/* Cart Items */}
        {cartStore.onCheckout === "cart" && (
          <>
            {cartStore.cart.map((item) => (
<<<<<<< HEAD
              <CartItem
                description={item.description}
                finalPrice={item.finalPrice}
                id={item.id}
                name={item.name}
                image={item.image}
                quantity={item.quantity}
              />
=======
              <motion.div
                layout
                key={item.id}
                className="flex items-center justify-between p-4 bg-secondary my-4 rounded-lg pr-8"
              >
                <div className="flex gap-4 items-center">
                  <Image
                    className="rounded-md h-24 w-24 object-cover"
                    src={item.image!}
                    alt={item.name}
                    width={500}
                    height={500}
                  />
                  <div className="flex flex-col gap-4">
                    <h2>{item.name}</h2>
                    {/* update quantity of a product */}
                    <div className="flex gap-4 items-center justify-start">
                      <h2>Quantity: {item.quantity}</h2>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            cartStore.removedProduct({
                              id: item.id,
                              image: item.image,
                              name: item.name,
                              finalPrice: item.finalPrice,
                              quantity: item.quantity,
                            } as AddCartType)
                          }
                        >
                          <IoMdRemove />
                        </button>
                        <button
                          onClick={() =>
                            cartStore.removedProduct({
                              id: item.id,
                              image: item.image,
                              name: item.name,
                              finalPrice: item.finalPrice,
                              quantity: item.quantity,
                            } as AddCartType)
                          }
                        >
                          <IoMdAdd />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-bold text-primary">
                  {item.finalPrice && item.finalPrice}
                </p>
              </motion.div>
>>>>>>> 4039faa7f320834862c0ab2825b94af94d48e5c8
            ))}
          </>
        )}
        {/* Checkout and total */}
        {cartStore.cart.length > 0 && cartStore.onCheckout === "cart" ? (
          <motion.div layout>
<<<<<<< HEAD
            <p>Total: {formatPrice(totalPrice)}</p>
=======
            <p>Total: {totalPrice}</p>
>>>>>>> 4039faa7f320834862c0ab2825b94af94d48e5c8
            <button
              onClick={() => cartStore.setCheckout("checkout")}
              className="py-2 mt-4 bg-primary w-full rounded-md text-base-100"
            >
              Checkout
            </button>
          </motion.div>
        ) : null}
        {/* Checkout form */}
        {cartStore.onCheckout === "checkout" && <Checkout />}
        {cartStore.onCheckout === "success" && <OrderConfirmed />}

        {/* When cart is empty! */}
        <AnimatePresence>
          {!cartStore.cart.length && cartStore.onCheckout === "cart" && (
            <motion.div
              initial={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
              animate={{ scale: 1, rotateZ: 0, opacity: 0.75 }}
              exit={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
              className="flex flex-col items-center gap-12 text-lg font-medium pt-36 opacity-75"
            >
              <h1>It's empty, please add items from Shop!</h1>
              <Image src={basket} alt="empty cart" width={200} height={200} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
