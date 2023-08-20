"use client";

import Input from "@/app/components/Input";
import PrimaryButton from "@/app/components/PrimaryButton";
import { InputType } from "@/types/InputType";
import Link from "next/link";
import { useState } from "react";

export default function UploadImage() {
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
      className="p-6 flex flex-col items-center gap-10 pb-32"
    >
      <div className="flex flex-col w-full gap-6">
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
        <Link
          href={{
            pathname: "/admin/upload-alerts/add-to-database",
            query: {
              text,
            },
          }}
        >
          <PrimaryButton disable={isDisable()} text="Add alert" />
        </Link>
      </div>
    </form>
  );
}
