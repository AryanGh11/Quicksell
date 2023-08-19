"use client";

import oops from "@/public/oops.json";
import { Player } from "@lottiefiles/react-lottie-player";

interface thisType {
  text: string;
}

export default function AlreadyExisting({text}: thisType) {
  return (
    <div className="w-full flex justify-center pb-32 items-center flex-col px-6">
      <Player autoplay loop src={oops}></Player>
      <h1 className="text-2xl font-bold">{text}</h1>
    </div>
  );
}
