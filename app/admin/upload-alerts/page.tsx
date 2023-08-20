"use client";

import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/PrimaryButton";
import { useAdminSession } from "@/store";
import { InputType } from "@/types/InputType";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadAlerts() {
  useEffect(() => {
    !adminSession.isLogin &&
      setTimeout(() => {
        router.push("/");
      }, 1500);
  }, []);
  const adminSession = useAdminSession();
  const router = useRouter();
  const [text, setText] = useState("");
  const isDisable = () => {
    if (text === "") {
      return true;
    } else {
      return false;
    }
  };
  const data = [
    {
      value: text,
      setValue: setText,
      id: "text",
      type: "text",
      label: "Alert text",
    },
  ];
  return (
    <form
      action={"submit"}
      className="p-6 flex flex-col justify-between pb-24 gap-12"
    >
      {/* If admin logged in then show elements */}
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
            <PrimaryButton text="Add alert" disable={isDisable()} />
          )}
          {!isDisable && (
            <Link
              href={{
                pathname: "/admin/upload-alerts/add-to-database",
                query: {
                  text,
                },
              }}
            >
              <PrimaryButton disable={isDisable} text="Add alert" />
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
