import { BsFillPlusCircleFill } from "react-icons/bs";
import Image from "next/image";
import { ItemsType } from "@/types/ItemsType";

export default async function Items({
  id,
  name,
  finalPrice,
  regularPrice,
  description,
  image,
  tag,
}: ItemsType) {
  return (
    <div className="w-full flex flex-col gap-6" key={id}>
      {tag && tag === "NEW" ? (
        <h1 className="flex justify-center border-solid border-primary border-onepx items-center bg-transparent py-2 px-4 right-10 mt-4 rounded-full text-base-100 absolute text-sm font-normal">
          {tag}
        </h1>
      ) : tag === null ? (
        <div></div>
      ) : (
        <h1 className="flex justify-center items-center bg-accent p-1 aspect-square right-10 mt-4 rounded-full text-base-100 absolute text-lg font-normal">
          {tag}
        </h1>
      )}
      <Image src={image!} alt={name} width={500} height={500} />
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">{name}</h1>
          <h1 className="font-normal">{description}</h1>
        </div>
        <div className="flex gap-1 font-normal">
          <h1 className="pt-1 text-lg">{"$" + finalPrice}</h1>
          {regularPrice && (
            <h1 className="text-sm opacity-70">{"$" + regularPrice}</h1>
          )}
        </div>
      </div>
      <button className="btn bg-transparent border-solid border-1 border-based_color_peanut_butter_crust rounded-full">
        Add to cart
        <BsFillPlusCircleFill />
      </button>
    </div>
  );
}
