import v87 from "@/assets/images/V87.webp";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = () => {
  return (
    <Card className="shadow group shadow-theme/30 hover:shadow-theme/40 hover:shadow-md duration-500">
      <CardHeader>
        <img src={v87} alt="" className="w-fit group-hover:scale-105 duration-500" />
      </CardHeader>
      <CardContent>
        <CardTitle>LOGI B56</CardTitle>
        <CardDescription className="my-5">
          Discover our collection of meticulously designed mechanical keyboards,
          engineered....
        </CardDescription>
        <CardTitle>$99</CardTitle>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="text-theme">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
