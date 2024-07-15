import { Outlet } from "react-router-dom";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Navigationbar from "../shared/Navigationbar";

const MainLayout = () => {
  return (
    <>
      <Navigationbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
