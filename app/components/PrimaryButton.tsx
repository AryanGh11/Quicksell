"use client";

import { ButtonType } from "@/types/ButtonType";
import { useState } from "react";

export default function PrimaryButton({ text, disable }: ButtonType) {
  const [loading, isLoading] = useState(false);
  return (
    <button
      className="btn bg-secondary text-neutral rounded-full w-full"
      disabled={loading ? true : disable}
      onClick={() => isLoading(true)}
    >
      {loading ? <h1>Loading...</h1> : <h1>{text}</h1>}
    </button>
  );
}
