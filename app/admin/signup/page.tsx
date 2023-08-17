import AlreadyExisting from "@/app/components/AlreadyExisting";
import DatabaseConfirmed from "@/app/components/DatabaseConfirmed";
import { SearchParamTypes } from "@/types/SearchParamsType";
import { prisma } from "@/util/prisma";

export default async function Signup({ searchParams }: SearchParamTypes) {
  const check = await prisma.adminUser.findFirst({
    where: { email: searchParams.email },
  });
  const checkStatus = (val: boolean) => {
    return <DatabaseConfirmed />;
  };
  if (check) {
    return checkStatus(true);
  } else {
    checkStatus(false);
    for (let index = 1; index < 2; index++) {
      await prisma.adminUser.create({
        data: {
          name: searchParams.name,
          email: searchParams.email,
          password: searchParams.password,
          username: searchParams.username,
        },
      });
    }
    return <DatabaseConfirmed />;
  }
}
