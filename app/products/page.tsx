import { prisma } from "@/util/prisma";
import Items from "../components/Items";
import Filter from "../components/Filter";

export default async function Products() {
  //Get products from prisma
  const products = await prisma.product.findMany();
  //Get all of categories
  const categories = await prisma.category.findMany();
  return (
    <div className="flex flex-col px-6 pt-10 pb-14 gap-10">
      <Filter products={products} categories={categories} />
    </div>
  );
}
