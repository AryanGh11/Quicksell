import AlreadyExisting from "@/app/components/AlreadyExisting";
import DatabaseConfirmed from "@/app/components/DatabaseConfirmed";
import PrimaryButton from "@/app/components/PrimaryButton";
import SecondaryButton from "@/app/components/SecondaryButton";
import { SearchParamTypes } from "@/types/SearchParamsType";
import { prisma } from "@/util/prisma";
import Link from "next/link";

export default async function Login({ searchParams }: SearchParamTypes) {
  const userStatus = await prisma.adminUser.findFirst({
    where: { email: searchParams.email, password: searchParams.password },
  });
  return (
    <div>
      {userStatus && (
          <h1 className="w-full h-full flex justify-center items-center font-bold text-xl">
            Welcome!
          </h1>
        ) && <DatabaseConfirmed isLogin="true" link="/admin" timer={true} />}
      {!userStatus && (
        <div className="flex flex-col px-6 gap-12 py-24">
          <AlreadyExisting text="Admin not found or email/password is wrong! 😓" />
          <div className="flex flex-col gap-2">
            <Link href={"/admin"}>
              <PrimaryButton text="Back to signup" disable={false} />
            </Link>
            <Link href={"/"}>
              <SecondaryButton text="Go home" disable={false} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
