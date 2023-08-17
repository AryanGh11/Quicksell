import AlreadyExisting from "@/app/components/AlreadyExisting";
import DatabaseConfirmed from "@/app/components/DatabaseConfirmed";
import { SearchParamTypes } from "@/types/SearchParamsType";
import { prisma } from "@/util/prisma";

export default async function AddProductToDatabase({
  searchParams,
}: SearchParamTypes) {
  const check = await prisma.category.findFirst({
    where: { category: searchParams.category },
  });
  const checkStatus = (val: boolean) => {
    return <DatabaseConfirmed />;
  };
  if (check) {
    return checkStatus(true);
  } else {
    checkStatus(false);
    for (let index = 1; index < 2; index++) {
      await prisma.category.create({
        data: {
          category: searchParams.category,
        },
      });
    }
    return <DatabaseConfirmed />;
  }
}
