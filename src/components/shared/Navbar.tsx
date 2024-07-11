import logo from "../../assets/images/logo.svg";
// import logo from "../../assets/images/logo-5.webp";
import { MdOutlineShoppingCart } from "react-icons/md";
import Container from "../custom/Container";
import { ThemeToggle } from "../custom/ThemeToggle";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo image" className="w-16" />
        </div>
        <div>
          <ul className="flex items-center gap-5">
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
