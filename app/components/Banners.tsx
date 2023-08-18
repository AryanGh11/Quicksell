"use client";
import { BannersType } from "@/types/BannersType";
import Image from "next/image";
import { useRef } from "react";

export default function Banners({ title, image, description }: BannersType) {
  let refI = useRef();
  return (
    <div className="justify-center items-start max-h-[600px] flex-col md:w-[calc(100vw-10rem)] w-screen bg-blue-400">
      <Image
        src={image}
        alt={title!}
        width={720}
        height={720}
        className="w-full object-cover h-full"
      />
      <div className="-mt-24 ml-8 z-10 w-fit">
        <h1 className="text-4xl text-neutral font-bold bg-secondary w-fit">
          {title}
        </h1>
        <h1 className="text-neutral">{description}</h1>
      </div>
    </div>
  );
}
