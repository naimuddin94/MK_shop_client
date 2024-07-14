import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useFetchRatingsByProductIdQuery } from "@/redux/api/ratingApi";
import { TProduct } from "@/Types";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductCard({ product }: { product: TProduct }) {
  const { _id, name, image, description, brand, price, rating } = product;
  const { data: ratingData } = useFetchRatingsByProductIdQuery({
    id: _id,
    param: { page: 1, limit: 1 },
  });

  return (
    <Link to={`/product/${_id}`} className="flex flex-col h-full">
      <Card className="w-full flex flex-col justify-between max-w-md hover:shadow hover:shadow-theme/50 duration-500 flex-grow">
        <div className="p-4 flex-1">
          <img
            src={image}
            alt="Mechanical Keyboard"
            className="rounded-t-lg object-cover w-full aspect-[4/3]"
          />
        </div>
        <CardContent className="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-end gap-3">
              <Rating rating={rating} />
              <p className="text-muted-foreground text-lg">
                {ratingData?.data?.meta?.total}
              </p>
            </div>
            <CardTitle className="text-xl font-bold">{name}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {description.slice(0, 50)}
            </CardDescription>
            <CardTitle className="text-md font-semibold">
              {brand.name}
            </CardTitle>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${price}</span>
            <Button variant="outline">Add to Cart</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProductCard;
