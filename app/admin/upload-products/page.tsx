"use client";

import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/PrimaryButton";
import { useAdminSession } from "@/store";
import { InputType } from "@/types/InputType";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadProducts() {
  useEffect(() => {
    !adminSession.isLogin &&
      setTimeout(() => {
        router.push("/");
      }, 1500);
  }, []);
  const adminSession = useAdminSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setShortDes] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Home");
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
  const data = [
    {
      value: name,
      setValue: setName,
      id: "title",
      type: "text",
      label: "Name",
    },
    {
      value: description,
      setValue: setShortDes,
      id: "description",
      type: "text",
      label: "Description",
    },
    {
      value: regularPrice,
      setValue: setRegularPrice,
      id: "regular-price",
      type: "number",
      label: "Regular price",
    },
    {
      value: finalPrice,
      setValue: setFinalPrice,
      id: "final-price",
      type: "number",
      label: "Final price",
    },
    {
      value: image,
      setValue: setImage,
      id: "image",
      type: "text",
      label: "Image",
    },
  ];
  return (
    <form
      action="/admin/upload-items/add-to-database"
      className="p-6 flex flex-col justify-between pb-24 gap-12"
    >
      {adminSession.isLogin && (
        <>
          <div className="flex flex-col w-full gap-6">
            {data.map((val: InputType) => (
              <Input
                value={val.value}
                id={val.id}
                label={val.label}
                setValue={val.setValue}
                type={val.type}
                key={val.id}
              />
            ))}
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="image" className="font-bold pl-2">
                Category
              </label>
              <select
                className="border-solid text-sm border-[1px] border-opacity-40 focus:border-[2px] focus:border-secondary border-based_color_peanut_butter_crust p-2 rounded-lg w-full bg-transparent selection:bg-secondary selection:text-neutral"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option defaultChecked>Home</option>
                <option>Work</option>
                <option>Women</option>
                <option>Modern</option>
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
                {}
              </select>
            )}
          </div>
          {isDisable && (
            <PrimaryButton text="Add products" disable={isDisable()} />
          )}
          {!isDisable && (
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
              <PrimaryButton disable={isDisable} text="Add products" />
            </Link>
          )}
        </>
      )}
      {!adminSession.isLogin && (
        <h1 className="text-center text-lg font-bold">Login first...</h1>
      )}
    </form>
  );
}
