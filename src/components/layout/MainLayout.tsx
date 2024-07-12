import { Outlet } from "react-router-dom";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
