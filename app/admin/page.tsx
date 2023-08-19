"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import PrimaryButton from "../components/PrimaryButton";
import { PiWarningCircleBold } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";

export default function Admin() {
  const [section, setSection] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const [buttonText, setButtonText] = useState("Next");
  const [warnText, setWarnText] = useState(false);
  const handleOnClick = () => {
    setButtonText("Loading...");
    setIsDisable(true);
  };
  useEffect(() => {
    if (
      email === "mahdi.gholami875@gmail.com" ||
      email === "mahdi.gholami875@gmail.com"
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
    <AnimatePresence>
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
            aria-label="Sign up"
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
          </>
        )}
      </div>
    </AnimatePresence>
  );
}
