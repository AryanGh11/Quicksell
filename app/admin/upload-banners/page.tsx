"use client";

import Link from "next/link";
import { useState } from "react";

export default function UploadImage() {
  const [title, setTitle] = useState("");
  const [description, setShortDes] = useState("");
  const [image, setImage] = useState("");
  const isDisable = () => {
    if (image === "" || title === "" || description === "") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="p-6 flex flex-col h-screen justify-between pb-32">
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="title" className="font-bold pl-2">
            Title
          </label>
          <input
            className="border-solid border-2 border-secondary p-2 rounded-lg w-full selection:bg-secondary selection:text-neutral"
            type="text"
            id="title"
            placeholder="Type here..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="description" className="font-bold pl-2">
            Description
          </label>
          <input
            className="border-solid border-2 border-secondary p-2 rounded-lg w-full selection:bg-secondary selection:text-neutral"
            type="text"
            id="description"
            placeholder="Type here..."
            onChange={(e) => setShortDes(e.target.value)}
            value={description}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="image" className="font-bold pl-2">
            Image
          </label>
          <input
            className="border-solid border-2 border-secondary p-2 rounded-lg w-full selection:bg-secondary selection:text-neutral"
            type="text"
            id="image"
            placeholder="Type here..."
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>
        <Link
          href={{
            pathname: "/admin/upload-banners/add-to-database",
            query: { title, description, image },
          }}
        >
          <button
            disabled={isDisable()}
            className="btn bg-secondary text-neutral w-full"
          >
            Add item to Database
          </button>
        </Link>
      </div>
    </div>
  );
}
