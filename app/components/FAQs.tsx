"use client";

import { useState } from "react";
import FAQsContent from "@/util/FAQsContent.json";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

export default function FAQs() {
  const [listSetter, setListSetter] = useState("one");

  const [oneLiExpand, setOneLiExpand] = useState(false);
  const [twoLiExpand, setTwoLiExpand] = useState(false);
  const [threeLiExpand, setThreeLiExpand] = useState(false);

  return (
    <div className="px-6 flex flex-col gap-6">
      <h1 className="font-bold text-2xl">FAG</h1>
      <ul className="flex gap-4 overflow-scroll no-scrollbar">
        {listSetter === "one" ? (
          <li className="btn rounded-2xl bg-secondary text-neutral font-semibold">
            Product & Promos
          </li>
        ) : (
          <li onClick={() => setListSetter("one")} className="btn rounded-2xl bg-transparent font-semibold border-solid border-onepx border-primary">
            Product & Promos
          </li>
        )}
        {listSetter === "two" ? (
          <li className="btn rounded-2xl bg-secondary text-neutral font-semibold">
            Delivery
          </li>
        ) : (
          <li onClick={() => setListSetter("two")} className="btn rounded-2xl bg-transparent font-semibold border-solid border-onepx border-primary">
            Delivery
          </li>
        )}
        {listSetter === "three" ? (
          <li className="btn rounded-2xl bg-secondary text-neutral font-semibold">
            Refunds
          </li>
        ) : (
          <li onClick={() => setListSetter("three")} className="btn rounded-2xl bg-transparent font-semibold border-solid border-onepx border-primary">
            Refunds
          </li>
        )}
      </ul>
      {/* Content */}
      <div className="flex flex-col gap-6">
        {listSetter === "one" && (
          <>
            {/* oneli content */}
            <motion.div
              className="flex flex-col gap-4"
              key={FAQsContent.oneLi[0].id}
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="flex gap-4 justify-between w-full items-center"
              >
                <h1 className="text-lg max-w-[80%]">
                  {FAQsContent.oneLi[0].title}
                </h1>
                {oneLiExpand && (
                  <div onClick={() => setOneLiExpand(false)}>
                    <AiOutlineMinus />
                  </div>
                )}
                {!oneLiExpand && (
                  <div onClick={() => setOneLiExpand(true)}>
                    <AiOutlinePlus />
                  </div>
                )}
              </motion.div>
              {oneLiExpand && (
                <motion.h1
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="opacity-40"
                >
                  {FAQsContent.oneLi[0].description}
                </motion.h1>
              )}
              <div className="w-full h-[.5px] bg-secondary opacity-40"></div>
            </motion.div>
            {/* twoLi content */}
            <motion.div
              className="flex flex-col gap-4"
              key={FAQsContent.oneLi[1].id}
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="flex gap-4 justify-between w-full items-center"
              >
                <h1 className="text-lg max-w-[80%]">
                  {FAQsContent.oneLi[1].title}
                </h1>
                {twoLiExpand && (
                  <div onClick={() => setTwoLiExpand(false)}>
                    <AiOutlineMinus />
                  </div>
                )}
                {!twoLiExpand && (
                  <div onClick={() => setTwoLiExpand(true)}>
                    <AiOutlinePlus />
                  </div>
                )}
              </motion.div>
              {twoLiExpand && (
                <motion.h1
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="opacity-40"
                >
                  {FAQsContent.oneLi[0].description}
                </motion.h1>
              )}
              <div className="w-full h-[.5px] bg-secondary opacity-40"></div>
            </motion.div>
            {/* threeLi content */}
            <motion.div
              className="flex flex-col gap-4"
              key={FAQsContent.oneLi[0].id}
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="flex gap-4 justify-between w-full items-center"
              >
                <h1 className="text-lg max-w-[80%]">
                  {FAQsContent.oneLi[0].title}
                </h1>
                {threeLiExpand && (
                  <div onClick={() => setThreeLiExpand(false)}>
                    <AiOutlineMinus />
                  </div>
                )}
                {!threeLiExpand && (
                  <div onClick={() => setThreeLiExpand(true)}>
                    <AiOutlinePlus />
                  </div>
                )}
              </motion.div>
              {threeLiExpand && (
                <motion.h1
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="opacity-40"
                >
                  {FAQsContent.oneLi[0].description}
                </motion.h1>
              )}
              <div className="w-full h-[.5px] bg-secondary opacity-40"></div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
