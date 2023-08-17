import { prisma } from "@/util/prisma";

export default async function Alert() {
  const alerts = await prisma.alert.findMany();
  return (
    <div className="flex flex-col text-center">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className="py-3 px-6 text-sm bg-secondary text-neutral font-normal"
        >
          <h1>{alert.text}</h1>
        </div>
      ))}
    </div>
  );
}
