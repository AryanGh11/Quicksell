import { PostsType } from "@/types/PostsType";
import Image from "next/image";

export default function Posts({ title, description, image, id }: PostsType) {
  return (
    <div className="w-full flex flex-col gap-6" key={id}>
      <Image
        src={image!}
        alt={title!}
        width={720}
        height={720}
        className="w-full aspect-video object-cover"
      />
      {title && description ? (
        <div className="flex flex-col gap-2">
          {title && <h1 className="font-bold text-2xl">{title}</h1>}
          {description && (
            <h1 className="font-normal text-lg">{description}</h1>
          )}
        </div>
      ) : description ? (
        <h1 className="font-normal text-lg">{description}</h1>
      ) : title ? (
        <h1 className="font-bold text-2xl">{title}</h1>
      ) : null}
    </div>
  );
}
