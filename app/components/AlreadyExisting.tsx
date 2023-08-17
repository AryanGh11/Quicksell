"use client";

import oops from "@/public/oops.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function AlreadyExisting() {
  return (
    <div className="w-full flex justify-center py-16 gap-6 items-center flex-col px-6">
      <Player autoplay loop src={oops}></Player>
      <h1>Already existing!</h1>
    </div>
  );
}
