import MainLayout from "@/components/layout/MainLayout";
import PaymentElement from "@/components/payment/PaymentElement";
import About from "@/pages/About";
import AddBrand from "@/pages/AddBrand";
import AddProduct from "@/pages/AddProduct";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ManageProduct from "@/pages/MangeProduct";
import MyOrders from "@/pages/MyOrders";
import ProductDetail from "@/pages/Productdetail";
import Products from "@/pages/Products";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/manage-product",
        element: <ManageProduct />,
      },
      {
        path: "/dashboard/edit-product/:id",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/add-brand",
        element: <AddBrand />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/dashboard/carts",
        element: <CartPage />,
      },
      {
        path: "/dashboard/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/payment",
        element: <PaymentElement />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
