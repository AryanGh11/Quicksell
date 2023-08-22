export type ItemsType = {
  id: string;
  name: string;
  description: string | null;
  regularPrice: number;
  finalPrice?: number;
  image: string | null;
  offer?: number | null;
  category: string;
  quantity?: number | 1;
};
