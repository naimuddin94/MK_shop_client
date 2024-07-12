import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import keyboard from "@/assets/images/202403060016155.png"; 

function ProductCard() {
  return (
    <Card className="w-full max-w-md hover:shadow hover:shadow-theme/50 duration-500">
      <img
        src={keyboard}
        alt="Mechanical Keyboard"

        className="rounded-t-lg object-cover w-full aspect-[4/3]"
      />
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <CardTitle className="text-xl font-bold">
            Mechanical Keyboard
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Tactile and responsive typing experience with Cherry MX switches.
          </CardDescription>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">$99</span>
          <Button variant="outline">Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
