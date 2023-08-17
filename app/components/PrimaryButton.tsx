"use client";

import { ButtonType } from "@/types/ButtonType";

export default function PrimaryButton({ text, disable }: ButtonType) {
  return (
    <button
      className="btn bg-secondary text-neutral rounded-full w-full"
      disabled={disable}
    >
      {text}
    </button>
  );
}
