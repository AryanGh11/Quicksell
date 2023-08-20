"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import PrimaryButton from "../components/PrimaryButton";
import { PiWarningCircleBold } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { useAdminSession } from "@/store";
import { SearchParamTypes } from "@/types/SearchParamsType";
import admins from "@/util/Admins.json";

export default function Admin({ searchParams }: SearchParamTypes) {
  const [section, setSection] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [buttonText, setButtonText] = useState("Next");
  const [warnText, setWarnText] = useState(false);
  const adminSession = useAdminSession();
  const handleOnClick = () => {
    setButtonText("Loading...");
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
      email.includes(admins.aryan.email) ||
      email.includes(admins.hanane.email) ||
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
              {isDisable && (
                <PrimaryButton text={buttonText} disable={isDisable} />
              )}
              {!isDisable && (
                <Link
                  href={{
                    pathname: "/admin/login",
                    query: { email, password },
                  }}
                  onClick={handleOnClick}
                  className="w-full"
                >
                  <PrimaryButton text={buttonText} disable={isDisable} />
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
              {/* Warn text here */}
              <AnimatePresence>
                {warnText && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-base-100 text-sm bg-red-400 px-4 py-2 rounded-lg flex items-center gap-1"
                  >
                    <PiWarningCircleBold />
                    <h1>This email is not access to panel</h1>
                  </motion.div>
                )}
              </AnimatePresence>
              {isDisable && (
                <PrimaryButton text={buttonText} disable={isDisable} />
              )}
              <h1>{searchParams.isLogin}</h1>
              {!isDisable && (
                <Link
                  href={{
                    pathname: "/admin/signup",
                    query: { name, email, password, username },
                  }}
                  onClick={handleOnClick}
                  className="w-full"
                >
                  <PrimaryButton text={buttonText} disable={isDisable} />
                </Link>
              )}
              {/* Warn text here */}
              <AnimatePresence>
                {warnText && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-base-100 text-sm bg-red-400 px-4 py-2 rounded-lg flex items-center gap-1"
                  >
                    <PiWarningCircleBold />
                    <h1>This email is not access to panel</h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
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
