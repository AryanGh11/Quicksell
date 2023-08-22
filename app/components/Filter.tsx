"use client";

import { useState } from "react";
import Items from "./Items";
import { ItemsType } from "@/types/ItemsType";

export default function Filter({ products, categories }: any) {
  const [categoryValue, setCategoryValue] = useState("");
  const filteredItem = products.filter((product: ItemsType) =>
    product.category.includes(categoryValue)
  );
  return (
    <div className="flex flex-col gap-10">
      <select
        className="p-4 bg-transparent border-solid border-[1px] p border-based_color_peanut_butter_crust rounded-full"
        value={categoryValue}
        onChange={(e) => setCategoryValue(e.target.value)}
      >
        <option defaultChecked value={""}>
          All
        </option>
        {categories.map((category: ItemsType) => (
          <>
            <option key={category.id}>{category.category}</option>
          </>
        ))}
      </select>
      <div className="flex flex-col gap-10">
        {filteredItem.map((product: ItemsType) => (
          <Items
            offer={product.offer}
            id={product.id}
            image={product.image}
            name={product.name}
            finalPrice={product.finalPrice}
            regularPrice={product.regularPrice}
            description={product.description}
            category={product.category}
            key={product.id}
          />
        ))}
        {filteredItem.length === 0 && <h1>Not found! ☹️</h1>}
      </div>
    </div>
  );
}
