export type AddCartType = {
  name: string;
  image: string;
  price: number | null;
  quantity?: number | 1;
  id: string;
  description: string | null;
};