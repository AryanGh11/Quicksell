"use client";

import Link from "next/link";
import { useState } from "react";

export default function UploadImage() {
  const [name, setName] = useState("");
  const [description, setShortDes] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Women");
  const [isTag, setIsTag] = useState(false);
  const [tag, setTag] = useState("");
  const handleIsTag = () => {
    if (!isTag) {
      setIsTag(true);
    } else {
      setIsTag(false);
    }
  };
  const isDisable = () => {
    if (
      image === "" ||
      name === "" ||
      finalPrice === "" ||
      description === ""
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="p-6 flex flex-col h-screen justify-between pb-32">
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="name" className="font-bold pl-2">
            Name
          </label>
          <input
            className="border-solid border-2 border-secondary p-2 rounded-lg w-full selection:bg-secondary selection:text-neutral"
            type="text"
            id="name"
            placeholder="Type here..."
            onChange={(e) => setName(e.target.value)}
            value={name}
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
          <label htmlFor="regular-price" className="font-bold pl-2">
            Regular price
          </label>
          <input
            className="border-solid border-2 border-secondary p-2 rounded-lg w-full selection:bg-secondary selection:text-neutral"
            type="number"
            id="regular-price"
            placeholder="Type here..."
            onChange={(e) => setRegularPrice(e.target.value)}
            value={regularPrice}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="final-price" className="font-bold pl-2">
            Final price
          </label>
          <input
            className="border-solid border-2 border-secondary p-2 rounded-lg w-full selection:bg-secondary selection:text-neutral"
            type="number"
            id="final-price"
            placeholder="Type here..."
            onChange={(e) => setFinalPrice(e.target.value)}
            value={finalPrice}
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
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="image" className="font-bold pl-2">
            Category
          </label>
          <select
            className="w-full border-solid border-2 border-secondary p-2 rounded-lg selection:bg-secondary selection:text-neutral"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Women</option>
            <option>Home</option>
            <option>Gaming</option>
            <option>Work</option>
          </select>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="image" className="font-bold pl-2">
            Is tag?
          </label>
          <input
            className="toggle border-solid border-2 border-secondary p-2 rounded-lg selection:bg-secondary selection:text-neutral"
            type="checkbox"
            id="isTag"
            placeholder="Type here..."
            onChange={handleIsTag}
          />
        </div>
        {isTag && (
          <select
            className="w-full border-solid border-2 border-secondary p-2 rounded-lg selection:bg-secondary selection:text-neutral"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option defaultChecked>-5%</option>
            <option>-10%</option>
            <option>-15%</option>
            <option>NEW</option>
          </select>
        )}
      </div>
      <Link
        href={{
          pathname: "/admin/upload-items/add-to-database",
          query: {
            name,
            description,
            regularPrice,
            finalPrice,
            image,
            tag,
            category,
          },
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
  );
}
