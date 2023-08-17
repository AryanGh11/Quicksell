"use client";

import Link from "next/link";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import PrimaryButton from "../components/PrimaryButton";

export default function Admin() {
  const [section, setSection] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const isDisable = () => {
    if (name === "" || email === "" || password === "") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="p-6 flex flex-col items-center gap-10 pb-32">
      <div className="join">
        <input
          className="join-item btn"
          type="radio"
          aria-label="Login"
          defaultChecked
          name="options"
          onClick={() => setSection("login")}
        />
        <input
          className="join-item btn"
          type="radio"
          aria-label="Singup"
          name="options"
          onClick={() => setSection("signup")}
        />
      </div>
      {section === "login" && (
        <>
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
          <Link href={{ pathname: "/admin/login", query: { email, password } }}>
            <PrimaryButton text={"Login"} disable={false} />
          </Link>
        </>
      )}
      {section === "signup" && (
        <>
          <SignupForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername}
          />
          <Link
            href={{
              pathname: "/admin/signup",
              query: { name, email, password, username },
            }}
          >
            <PrimaryButton text={"Sign up"} disable={false} />
          </Link>
        </>
      )}
    </div>
  );
}
