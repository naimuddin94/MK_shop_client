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

export type TRating = {
  _id: string;
  user: { _id: string; name: string; image: string };
  product: string;
  rating: number;
  feedback: string;
  createdAt: Date;
  updatedAt: Date;
};
