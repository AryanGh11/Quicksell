"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import PrimaryButton from "../components/PrimaryButton";
import { AnimatePresence, motion } from "framer-motion";
import { useAdminSession } from "@/store";
import { SearchParamTypes } from "@/types/SearchParamsType";
import admins from "@/util/Admins.json";
import ErrorMessage from "../components/ErrorMessage";

export default function Admin({ searchParams }: SearchParamTypes) {
  const [section, setSection] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [warnText, setWarnText] = useState(false);
  const adminSession = useAdminSession();
  const handleOnClick = () => {
    setIsDisable(true);
  };
  useEffect(() => {
    const adminStatus = searchParams.isLogin;
    if (adminStatus === "true") {
      if (adminSession.isLogin == true) {
        null;
      } else {
        adminSession.toggleLogin();
      }
    }
    if (
      email === admins.aryan.email ||
      email === admins.hanane.email ||
      password != ""
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
      if (email != "") {
        setWarnText(true);
        setTimeout(() => {
          setWarnText(false);
        }, 2000);
      }
    }
  }, [email]);
  return (
    <div className="p-6 flex flex-col items-center gap-10 pb-32">
      {/* If admin not logged in */}
      {!adminSession.isLogin && (
        <>
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
              aria-label="Sign up"
              name="options"
              onClick={() => setSection("signup")}
            />
          </div>
          {section === "login" && (
            <form
              className="w-full flex flex-col items-center gap-10"
              action="submit"
            >
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
              {isDisable && <PrimaryButton text="Login" disable={isDisable} />}
              {!isDisable && (
                <Link
                  href={{
                    pathname: "/admin/login",
                    query: { email, password },
                  }}
                  onClick={handleOnClick}
                  className="w-full"
                >
                  <PrimaryButton text="Login" disable={isDisable} />
                </Link>
              )}
            </form>
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
              {isDisable && (
                <PrimaryButton text="Sign up" disable={isDisable} />
              )}
              {!isDisable && (
                <Link
                  href={{
                    pathname: "/admin/signup",
                    query: { name, email, password, username },
                  }}
                  onClick={handleOnClick}
                  className="w-full"
                >
                  <PrimaryButton text="Sign up" disable={isDisable} />
                </Link>
              )}
            </>
          )}
          {/* Warn text here */}
          <AnimatePresence>
            {warnText && (
              <ErrorMessage text="This email is not access to panel." />
            )}
          </AnimatePresence>
        </>
      )}
      {/* If admin logged in */}
      {adminSession.isLogin && (
        <div>
          <h1>Admin panel... under building</h1>
        </div>
      )}
    </div>
  );
}
