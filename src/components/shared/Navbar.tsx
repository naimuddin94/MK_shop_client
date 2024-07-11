import logo from "../../assets/images/logo.svg";
// import logo from "../../assets/images/logo-5.webp";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "../ui/button";
import Container from "./Container";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo image" className="w-16" />
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-5">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <Button variant="ghost">
            <MdOutlineShoppingCart size={20} />
          </Button>
          <Button variant="outline">Login</Button>
          <ThemeToggle />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
