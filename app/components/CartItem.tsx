"use client"

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";
import formatPrice from "@/util/formatPrice";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

export default function CartItem({
  description,
  finalPrice,
  id,
  image,
  name,
  quantity,
}: AddCartType) {
  const cartStore = useCartStore();
  return (
    <motion.div
      layout
      key={id}
      className="flex items-center justify-between p-4 bg-base-100 my-4 rounded-lg pr-8"
    >
      <div className="flex gap-4 items-center">
        <Image
          className="rounded-md h-24 w-24 object-cover"
          src={image!}
          alt={name}
          width={500}
          height={500}
        />
        <div className="flex flex-col gap-4">
          <h2>{name}</h2>
          {/* update quantity of a product */}
          <div className="flex gap-4 items-center justify-start">
            <h2>Quantity: {quantity}</h2>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  cartStore.removedProduct({
                    id: id,
                    image: image,
                    name: name,
                    finalPrice: finalPrice,
                    quantity: quantity,
                  } as AddCartType)
                }
              >
                <IoMdRemove />
              </button>
              <button
                onClick={() =>
                  cartStore.addProduct({
                    id: id,
                    image: image,
                    name: name,
                    finalPrice: finalPrice,
                    quantity: quantity,
                  } as AddCartType)
                }
              >
                <IoMdAdd />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg font-bold text-secondary">
        {finalPrice && formatPrice(finalPrice)}
      </p>
    </motion.div>
  );
}
