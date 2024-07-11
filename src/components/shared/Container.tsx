import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      {children}
    </section>
  );
};

export default Container;
