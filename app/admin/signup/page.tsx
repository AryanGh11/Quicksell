import AlreadyExisting from "@/app/components/AlreadyExisting";
import DatabaseConfirmed from "@/app/components/DatabaseConfirmed";
import { SearchParamTypes } from "@/types/SearchParamsType";
import { prisma } from "@/util/prisma";

export default async function Signup({ searchParams }: SearchParamTypes) {
  const userStatus = await prisma.adminUser.findFirst({
    where: { email: searchParams.email },
  });
  return (
    <div>
      {userStatus && <AlreadyExisting text="Admin already existing!" />}
      {!userStatus && (
        <DatabaseConfirmed isLogin="true" link="/admin" timer={true} />
      )}
    </div>
  );
}
