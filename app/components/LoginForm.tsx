"use client";

import { LoginType } from "@/types/LoginType";
import Input from "./Input";
import { InputType } from "@/types/InputType";

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
}: LoginType) {
  const data = [
    {
      value: email,
      setValue: setEmail,
      id: "email",
      type: "email",
      label: "Email",
    },
    {
      value: password,
      setValue: setPassword,
      id: "password",
      type: "password",
      label: "Password",
    },
  ];
  return (
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
    </div>
  );
}
