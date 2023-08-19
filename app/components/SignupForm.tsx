"use client";

import { SignupType } from "@/types/SignupType";
import Input from "./Input";
import { InputType } from "@/types/InputType";

export default function SignupForm({
  email,
  setEmail,
  name,
  setName,
  password,
  setPassword,
  username,
  setUsername,
}: SignupType) {
  const data = [
    { value: name, setValue: setName, id: "name", type: "text", label: "Name" },
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
    {
      value: username,
      setValue: setUsername,
      id: "username",
      type: "text",
      label: "Username",
    },
  ];
  return (
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
  );
}
