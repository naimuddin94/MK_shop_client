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

export type TCartProduct = {
  _id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

export type TOrder = {
  product: string;
  quantity: number;
};

export type TConfirmOrders = {
  address: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  orders: TOrder[];
};

export type TCartState = {
  products: TCartProduct[];
  totalAmount: number;
  confirmOrders: TConfirmOrders | null;
};