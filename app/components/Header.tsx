import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center pt-10 pb-14 px-6 gap-8">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-normal tracking-widest">#SCANDLEXPERIENCE</h1>
        <h1 className="font-bold tracking-wider text-3xl pr-4">
          Always{" "}
          <span className="text-peanut_butter_crust">cool and soothe</span> your
          feelings available in a variety of{" "}
          <span className="text-peanut_butter_crust">candle</span>
        </h1>
      </div>
      <Link href={"/products"}>
        <PrimaryButton text={"Discover Products"} disable={false} />
      </Link>
    </header>
  );
}
