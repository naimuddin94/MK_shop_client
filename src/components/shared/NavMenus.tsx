import { adminNavItems, navItem, userNavItems } from "@/utils/navtems";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListItem } from "../ui/ListItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const NavMenus = () => {
  const [menus, setMenus] = useState<navItem[]>(userNavItems);
  const [role, setRole] = useState("user");
  useEffect(() => {
    if (role === "admin") {
      setMenus(adminNavItems);
    }
  }, [role]);
  return (
    <ul className="hidden md:flex items-center gap-5">
      <NavigationMenu>
        <NavigationMenuItem className="space-x-1">
          {menus?.map((menu) => {
            if (menu.href) {
              return (
                <Link to={menu.href} key={menu.label}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {menu.label}
                  </NavigationMenuLink>
                </Link>
              );
            } else if (menu.children) {
              return (
                <React.Fragment key={menu.label}>
                  <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {menu.children?.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </React.Fragment>
              );
            }
          })}
        </NavigationMenuItem>
      </NavigationMenu>
    </ul>
  );
};

export default NavMenus;
