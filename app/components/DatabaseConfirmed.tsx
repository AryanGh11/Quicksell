"use client";

import Link from "next/link";
import confirmed from "@/public/confirmed.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function DatabaseConfirmed() {
  return (
    <div className="w-full flex justify-center h-[calc(100vh-6.5rem)] pt-16 gap-6 items-center flex-col px-6">
      <Player src={confirmed} autoplay loop className="w-1/2"></Player>
      <h1 className="font-bold">Done!</h1>
      <div className="w-full flex justify-center pt-16 gap-2 items-center flex-col">
        <Link href={"/admin/upload-categories"} className="w-full">
          <button className="w-full btn bg-secondary text-neutral">Back</button>
        </Link>
        <Link href={"/"} className="w-full">
          <button className="w-full btn bg-base-100">Homepage</button>
        </Link>
      </div>
    </div>
  );
}
