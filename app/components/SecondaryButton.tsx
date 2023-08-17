"use client";

import { ButtonType } from "@/types/ButtonType";

export default function SecondaryButton({ text, disable }: ButtonType) {
  return (
    <button
      className="btn bg-transparent text-secondary border-solid border-based_color_peanut_butter_crust border-[1px] rounded-full w-full"
      disabled={disable}
    >
      {text}
    </button>
  );
}

//For use in other components:
{/* <SecondaryButton text="Go home" disable={false} /> */}