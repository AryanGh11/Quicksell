"use client";

import { ButtonType } from "@/types/ButtonType";
import { useState } from "react";

export default function PrimaryButton({ text, disable }: ButtonType) {
  const [loading, isLoading] = useState(false);
  const handleClick = () => {
    isLoading(true);
    setTimeout(() => {
      isLoading(false);
    }, 500);
  };
  return (
    <button
      className="btn bg-secondary text-neutral rounded-full w-full"
      disabled={loading ? true : disable}
      onClick={handleClick}
    >
      {loading ? <h1>Loading...</h1> : <h1>{text}</h1>}
    </button>
  );
}
