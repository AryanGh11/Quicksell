"use client";

import { ButtonType } from "@/types/ButtonType";
import { useState } from "react";

export default function SecondaryButton({ text, disable }: ButtonType) {
  const [loading, isLoading] = useState(false);
  const handleClick = () => {
    isLoading(true);
    setTimeout(() => {
      isLoading(false);
    }, 500);
  };
  return (
    <button
      className="btn bg-transparent text-secondary border-solid border-based_color_peanut_butter_crust border-[1px] rounded-full w-full"
      disabled={loading ? true : disable}
      onClick={handleClick}
    >
      {loading ? <h1>Loading...</h1> : <h1>{text}</h1>}
    </button>
  );
}

//For use in other components:
{
  /* <SecondaryButton text="Go home" disable={false} /> */
}
