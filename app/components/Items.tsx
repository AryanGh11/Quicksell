"use client";

import { BsFillPlusCircleFill } from "react-icons/bs";
import Image from "next/image";
import { ItemsType } from "@/types/ItemsType";
import { useCartStore } from "@/store";
import formatPrice from "@/util/formatPrice";
import AddToCartButton from "./AddToCartButton";

export default function Items({
  id,
  name,
  finalPrice,
  regularPrice,
  description,
  image,
  tag,
  quantity,
}: ItemsType) {
  const cartStore = useCartStore();
  return (
    <div className="w-full flex flex-col gap-6" key={id}>
      {tag && tag === "NEW" ? (
        <h1 className="flex justify-center border-solid border-primary border-onepx items-center bg-transparent py-2 px-4 right-10 mt-4 rounded-full text-base-100 absolute text-sm font-normal md:hidden">
          {tag}
        </h1>
      ) : tag !== "" ? (
        <h1 className="flex justify-center items-center bg-accent p-1 aspect-square right-10 mt-4 rounded-full text-base-100 absolute text-lg font-normal md:hidden">
          {tag}
        </h1>
      ) : null}
      <Image
        src={image!}
        alt={name}
        width={500}
        height={500}
        className="w-full aspect-square object-cover"
      />
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">{name}</h1>
          <h1 className="font-normal md:max-h-5 text-ellipsis overflow-hidden">
            {description}
          </h1>
        </div>
        <div className="flex gap-1 font-normal">
          <h1 className="pt-1 text-lg">{formatPrice(finalPrice)}</h1>
          {regularPrice && (
            <h1 className="text-sm opacity-70">{"$" + regularPrice}</h1>
          )}
        </div>
      </div>
      <AddToCartButton
        description={description}
        finalPrice={finalPrice}
        id={id}
        image={image}
        name={name}
        quantity={quantity}
      />
    </div>
  );
}
