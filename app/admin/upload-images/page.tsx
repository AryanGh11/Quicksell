"use client";

import Link from "next/link";
import { useState } from "react";

export default function UploadImage() {
  const [image, setImage] = useState("");
  const isDisable = () => {
    if (image === "") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="p-6 flex flex-col h-screen justify-between pb-32">
      <input
        className="border-solid border-2 border-secondary p-2 rounded-lg w-full selection:bg-secondary selection:text-neutral"
        type="text"
        placeholder="Type here..."
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <Link
        href={{
          pathname: "/admin/upload-images/add-to-database",
          query: { image },
        }}
      >
        <button
          disabled={isDisable()}
          className="btn bg-secondary text-neutral w-full"
        >
          Add image to Database
        </button>
      </Link>
    </div>
  );
}
