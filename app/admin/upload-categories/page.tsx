"use client";

import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/PrimaryButton";
import { InputType } from "@/types/InputType";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminSession } from "@/store";

export default function UploadCategories() {
  useEffect(() => {
    !adminSession.isLogin &&
      setTimeout(() => {
        router.push("/");
      }, 1500);
  }, []);
  const adminSession = useAdminSession();
  const router = useRouter();
  const [category, setCategory] = useState("");
  const isDisable = () => {
    if (category === "") {
      return true;
    } else {
      return false;
    }
  };
  const data = [
    {
      value: category,
      setValue: setCategory,
      id: "category",
      type: "text",
      label: "Category",
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
            <PrimaryButton text="Add category" disable={isDisable()} />
          )}
          {!isDisable && (
            <Link
              href={{
                pathname: "/admin/upload-categories/add-to-database",
                query: {
                  category,
                },
              }}
            >
              <PrimaryButton text="Add category" disable={isDisable} />
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
