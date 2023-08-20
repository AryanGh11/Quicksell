import { SearchParamTypes } from "@/types/SearchParamsType";
import { prisma } from "@/util/prisma";
import Link from "next/link";

export default async function AddProductToDatabase({
  searchParams,
}: SearchParamTypes) {
  const regularPrice = parseInt(searchParams.regularPrice as any, 10);
  const finalPrice = parseInt(searchParams.finalPrice as any, 10);
  for (let index = 1; index < 2; index++) {
    await prisma.product.create({
      data: {
        name: searchParams.name,
        description: searchParams.description,
        regularPrice: regularPrice,
        finalPrice: finalPrice,
        image: searchParams.image,
        tag: searchParams.tag,
        category: searchParams.category,
      },
    });
  }
  return (
    <div className="w-full flex justify-center h-[calc(100vh-6.5rem)] pt-16 gap-6 items-center flex-col px-6">
      <h1 className="font-bold">Done!</h1>
      <div className="w-full flex justify-center pt-16 gap-2 items-center flex-col">
        <Link href={"/admin/upload-items"} className="w-full">
          <button className="w-full btn bg-secondary text-neutral">Back</button>
        </Link>
        <Link href={"/"} className="w-full">
          <button className="w-full btn bg-base-100">Homepage</button>
        </Link>
      </div>
    </div>
  );
}
