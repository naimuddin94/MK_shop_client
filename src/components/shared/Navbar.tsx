import logo from "@/assets/images/logo.svg";
import Container from "@/components/shared/Container";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import NavMenus from "./NavMenus";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-glass-white backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo image" className="w-12" />
          <h3 className="text-lg font-bold">KS</h3>
        </div>
        <div>
          <NavMenus />
        </div>
        <div className="flex items-center gap-5">
          <Button variant="ghost">
            <MdOutlineShoppingCart size={20} />
          </Button>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
