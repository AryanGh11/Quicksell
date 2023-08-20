"use client";

import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/PrimaryButton";
import { useAdminSession } from "@/store";
import { InputType } from "@/types/InputType";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UploadBanners() {
  useEffect(() => {
    !adminSession.isLogin &&
      setTimeout(() => {
        router.push("/");
      }, 1500);
  }, []);
  const adminSession = useAdminSession();
  const router = useRouter();
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
  const data = [
    {
      value: title,
      setValue: setTitle,
      id: "title",
      type: "text",
      label: "Title",
    },
    {
      value: description,
      setValue: setShortDes,
      id: "description",
      type: "text",
      label: "Description",
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
      action={"submit"}
      className="p-6 flex flex-col justify-between pb-24 gap-12"
    >
      {adminSession.isLogin && (
        <>
          <div className="flex flex-col w-full gap-4">
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
          </div>
          {isDisable && (
            <PrimaryButton text="Add banner" disable={isDisable()} />
          )}
          {!isDisable && (
            <Link
              href={{
                pathname: "/admin/upload-banners/add-to-database",
                query: { title, description, image },
              }}
            >
              <PrimaryButton disable={isDisable} text="Add banner" />
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
