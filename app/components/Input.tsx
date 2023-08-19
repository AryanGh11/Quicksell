import { InputType } from "@/types/InputType";

export default function Input({ value, setValue, id, label, type }: InputType) {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={id} className="font-bold pl-2">
        {label}
      </label>
      <input
        className="border-solid text-sm border-[1px] border-opacity-40 focus:border-[2px] focus:border-secondary border-based_color_peanut_butter_crust p-2 rounded-lg w-full bg-transparent selection:bg-secondary selection:text-neutral"
        type={type}
        id={id}
        placeholder="Type here..."
        onChange={(e) => setValue!(e.target.value)}
        value={value}
      />
    </div>
  );
}
