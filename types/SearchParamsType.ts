type Params = {
  id: string;
};

type SearchParams = {
  id: string;
  name: string;
  description: string | null;
  regularPrice: number | null;
  finalPrice: number;
  image: string | null;
  tag: string | null;
  quantity: number | 0;

  //banners
  title: string;
};

export type SearchParamTypes = {
  params: Params;
  searchParams: SearchParams;
};
