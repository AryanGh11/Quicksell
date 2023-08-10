import { prisma } from "@/util/prisma";

export default async function Alert() {
  const alert = await prisma.alert.findFirst();
  return (
    <div className="py-3 px-6 text-sm bg-secondary text-neutral font-normal flex justify-center">
      {alert?.text}
    </div>
  );
}
