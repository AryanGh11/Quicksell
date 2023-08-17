"use client";

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
  return (
    <div className="p-6 flex flex-col h-screen justify-between pb-32">
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="name" className="font-bold pl-2">
            Alert text
          </label>
          <input
            className="border-solid border-2 border-secondary p-2 rounded-lg w-full selection:bg-secondary selection:text-neutral"
            type="text"
            id="name"
            placeholder="Type here..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <Link
          href={{
            pathname: "/admin/upload-alerts/add-to-database",
            query: {
              text,
            },
          }}
        >
          <button
            disabled={isDisable()}
            className="btn bg-secondary text-neutral w-full"
          >
            Add alert to Database
          </button>
        </Link>
      </div>
    </div>
  );
}
