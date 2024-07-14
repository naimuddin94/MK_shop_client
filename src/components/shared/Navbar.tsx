import logo from "@/assets/images/logo.svg";
import Container from "@/components/shared/Container";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { currentUser, removeUser } from "@/redux/features/auth/authSlice";
import { currentCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { toast } from "../ui/use-toast";
import NavMenus from "./NavMenus";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const user = useAppSelector(currentUser);
  const cart = useAppSelector(currentCart);
  const dispatch = useAppDispatch();

  const [logoutFn] = useLogoutMutation();

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

  const handleLogout = async () => {
    try {
      dispatch(removeUser());
      const res = await logoutFn(undefined).unwrap();
      toast({
        title: res?.message,
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
          {user ? (
            <>
              <Link to="/dashboard/carts">
                <div className="relative">
                  <Button variant="ghost">
                    <MdOutlineShoppingCart size={20} />
                  </Button>
                  <span
                    className={`absolute ${
                      cart.products.length > 9 ? "right-0" : "right-2"
                    }`}
                  >
                    {cart.products.length}
                  </span>
                </div>
              </Link>
              <ThemeToggle />
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
              <Avatar>
                <AvatarImage src={user?.image} alt="user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <ThemeToggle />
            </>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
