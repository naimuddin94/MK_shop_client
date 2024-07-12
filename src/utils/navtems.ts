type dropdownMenu = { title: string; href: string; description: string };

export type navItem = {
  label: string;
  href?: string;
  children?: dropdownMenu[];
};

export const adminNavItems: navItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Dashboard",
    children: [
      {
        title: "Add Brand",
        href: "/add-brand",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Add Product",
        href: "/add-product",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        title: "Carts",
        href: "/carts",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        title: "Ratings",
        href: "/ratings",
        description:
          "For sighted users to preview content available behind a link.",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];


export const userNavItems: navItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Dashboard",
    children: [
      {
        title: "Profile",
        href: "/profile",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "My Orders",
        href: "/my-orders",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        title: "Carts",
        href: "/carts",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        title: "Ratings",
        href: "/ratings",
        description:
          "For sighted users to preview content available behind a link.",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
