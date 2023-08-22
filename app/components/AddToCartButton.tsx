"use client";

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";

export default function AddToCartButton({
  description,
  finalPrice,
  id,
  image,
  name,
  quantity,
}: AddCartType) {
  const [loading, isLoading] = useState(false);
  const cartStore = useCartStore();
  const handleClick = () => {
    cartStore.addProduct({
      description,
      id,
      image,
      name,
      finalPrice,
      quantity,
    });
    isLoading(true);
    setTimeout(() => {
      isLoading(false);
    }, 500);
  };
  return (
    <button
      onClick={handleClick}
      disabled={loading ? true : false}
      className="btn bg-transparent border-solid border-1 border-based_color_peanut_butter_crust rounded-full text-ellipsis overflow-hidden"
    >
      {loading ? "Adding..." : "Add to cart"}
      {!loading && <BsFillPlusCircleFill />}
    </button>
  );
}
