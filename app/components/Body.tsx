import { prisma } from "@/util/prisma";
import Image from "next/image";
import Items from "./Items";
import Posts from "./Posts";
import FAGs from "./FAQs";

export default async function Body() {
  const images = await prisma.images.findMany();
  const trendingItems = await prisma.product.findMany({ take: 10 });
  const banners = await prisma.banner.findMany();
  const posts = await prisma.posts.findMany();
  return (
    <div className="flex flex-col gap-10">
      <Image
        src={images[0].url}
        alt="homepage_im1"
        width={720}
        height={720}
        className="w-full aspect-square object-cover -scale-x-100"
      />
      <div className="flex flex-col gap-2 text-center px-6">
        <h1 className="font-normal tracking-widest">TRENDING</h1>
        <h1 className="font-bold tracking-wider text-2xl pr-4">
          Shop our popular candle products
        </h1>
      </div>
      <div className="flex flex-col px-6 gap-10">
        {trendingItems.map((trending) => (
          <Items
            tag={trending.tag}
            id={trending.id}
            image={trending.image}
            name={trending.name}
            finalPrice={trending.finalPrice}
            regularPrice={trending.regularPrice}
            description={trending.description}
          />
        ))}
      </div>
      {banners[0] && (
        <div className="h-max w-full">
          <Image
            src={banners[0].image}
            alt={banners[0].title}
            height={500}
            width={500}
            className="w-full"
          />
          <div className="absolute -mt-32 ml-6 flex flex-col items-start text-neutral w-40">
            <h1 className="font-bold bg-secondary text-3xl">
              {banners[0].title}
            </h1>
            <h1>{banners[0].description}</h1>
          </div>
        </div>
      )}
      <button className="btn bg-transparent border-solid border-1 border-based_color_peanut_butter_crust rounded-full mx-6">
        Show more
      </button>
      <div className="flex flex-col gap-6 px-6">
        {posts.map((post) => (
          <Posts
            id={post.id}
            title={post.title!}
            image={post.image!}
            description={post.description!}
          />
        ))}
      </div>
      {banners[1] && (
        <div className="bg-peanut_butter_crust flex justify-center items-center flex-col w-full pb-16">
          <Image
            src={banners[1].image}
            alt={banners[1].title}
            width={720}
            height={720}
            className="z-10 w-full"
          />
          <h1 className="text-4xl text-neutral font-bold absolute -mt-24">
            {banners[1].title}
          </h1>
          <button className="btn bg-secondary text-neutral rounded-full">
            {banners[1].description}
          </button>
        </div>
      )}
      <FAGs />
    </div>
  );
}
