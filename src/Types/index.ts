export type TBrand = {
  _id: string;
  name: string;
  origin: string;
};

export type TProduct = {
  _id: string;
  name: string;
  image: string;
  brand: {
    name: string;
    origin: string;
  };
  description: string;
  material: string;
  weight: string;
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

type TOrderProduct = {
  _id: string;
  name: string;
  image: string;
  brand: string;
  price: number;
  rating: number;
};

export type TOrderDetail = {
  _id: string;
  user: string;
  product: TOrderProduct;
  quantity: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TFetchOrder = {
  _id: string;
  user: string;
  orders: TOrderDetail[];
  totalAmount: number;
  address: string;
  city: string;
  state: string;
  phone: string;
  paymentInfo: string;
  isConfirmed: boolean;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

