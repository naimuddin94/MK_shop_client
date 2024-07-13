export type TBrand = {
  _id: string;
  name: string;
  origin: string;
};

export type TProduct = {
  _id: string;
  name: string;
  image: string;
  brand: TBrand;
  description: string;
  rating: number;
  price: number;
  stock: number;
};
