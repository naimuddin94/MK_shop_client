import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";

const HomeProduct = () => {
  return (
    <Container>
      <section className="space-y-8 my-8">
        <Heading>Keyboards</Heading>
        <div className="flex flex-col md:flex-row gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center">
          <Button variant="outline" className="border-theme/30">Show All Products</Button>
        </div>
      </section>
    </Container>
  );
};

export default HomeProduct;
