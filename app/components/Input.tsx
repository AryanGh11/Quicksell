import { InputType } from "@/types/InputType";

export default function Input({ value, setValue, id, label, type }: InputType) {
  const handleValue = (e: any) => {
    setValue!(e.target.value.toLowerCase());
  };
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
        onChange={handleValue}
        value={value}
      />
    </div>
  );
}

//Copy code below:

// const data = [
//   {
//     value: title,
//     setValue: setTitle,
//     id: "title",
//     type: "text",
//     label: "Title",
//   },
//   {
//     value: description,
//     setValue: setShortDes,
//     id: "description",
//     type: "text",
//     label: "Description",
//   },
//   {
//     value: image,
//     setValue: setImage,
//     id: "image",
//     type: "text",
//     label: "Image",
//   },
// ];
// {data.map((val: InputType) => (
//   <Input
//     value={val.value}
//     id={val.id}
//     label={val.label}
//     setValue={val.setValue}
//     type={val.type}
//     key={val.id}
//   />
// ))}
