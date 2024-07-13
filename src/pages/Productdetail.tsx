import Loader from "@/components/shared/Loader";
import Rating from "@/components/shared/Rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useFetchSingleProductQuery } from "@/redux/api/productApi";
import { StarIcon } from "lucide-react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const { data, isLoading } = useFetchSingleProductQuery(id);

  if (isLoading) {
    return <Loader size={200} />;
  }

  const { _id, name, brand, image, description, price, rating } = data.data;

  console.log(rating);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={image}
            alt="Product Image"
            className="w-full rounded-lg object-cover aspect-[4/3]"
          />
        </div>
        <div className="grid gap-4">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{name}</h1>
              <Rating rating={rating}/>
            </div>
            <p className="text-2xl font-bold text-primary">$ {price}</p>
            <Button size="lg" className="mt-4">
              Add to Cart
            </Button>
          </div>
          <Tabs defaultValue="specification">
            <TabsList className="border-b">
              <TabsTrigger value="specification">Specification</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
            </TabsList>
            <TabsContent value="specification">
              <div className="grid gap-4 py-6">
                <div className="grid gap-2">
                  <h2 className="text-xl font-bold">Product Specifications</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <p className="font-medium">Material</p>
                      <p className="text-muted-foreground">Aluminum</p>
                    </div>
                    <div className="grid gap-1">
                      <p className="font-medium">Weight</p>
                      <p className="text-muted-foreground">800g</p>
                    </div>
                    <div className="grid gap-1">
                      <p className="font-medium">Brand</p>
                      <p className="text-muted-foreground">{brand.name}</p>
                    </div>
                    <div className="grid gap-1">
                      <p className="font-medium">Origin</p>
                      <p className="text-muted-foreground">{brand.origin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="description">
              <div className="grid gap-4 py-6">
                <div className="grid gap-2">
                  <h2 className="text-xl font-bold">Product Description</h2>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="grid gap-4 py-6">
                <div className="grid gap-2">
                  <h2 className="text-xl font-bold">Customer Reviews</h2>
                  <div className="grid gap-6">
                    <div className="flex gap-4">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-4">
                        <div className="flex gap-4 items-start">
                          <div className="grid gap-0.5 text-sm">
                            <h3 className="font-semibold">Sarah Johnson</h3>
                            <time className="text-sm text-muted-foreground">
                              2 days ago
                            </time>
                          </div>
                          <div className="flex items-center gap-0.5 ml-auto">
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                          </div>
                        </div>
                        <div className="text-sm leading-loose text-muted-foreground">
                          <p>
                            I've been wearing this t-shirt for a few weeks now
                            and it's been a great addition to my wardrobe. The
                            fabric is soft and comfortable, and the prism design
                            is really eye-catching.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Avatar className="w-10 h-10 border">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-4">
                        <div className="flex gap-4 items-start">
                          <div className="grid gap-0.5 text-sm">
                            <h3 className="font-semibold">Alex Smith</h3>
                            <time className="text-sm text-muted-foreground">
                              3 weeks ago
                            </time>
                          </div>
                          <div className="flex items-center gap-0.5 ml-auto">
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-primary" />
                            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                          </div>
                        </div>
                        <div className="text-sm leading-loose text-muted-foreground">
                          <p>
                            The Acme Prism T-Shirt is a great quality product.
                            The fabric is durable and the fit is true to size.
                            I've washed it several times and it's held up really
                            well.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="questions">
              <div className="grid gap-4 py-6">
                <div className="grid gap-2">
                  <h2 className="text-xl font-bold">Customer Questions</h2>
                  <div className="grid gap-6">
                    <div className="grid gap-4">
                      <div className="grid gap-1">
                        <p className="font-medium">
                          Does this keyboard have RGB lighting?
                        </p>
                        <p className="text-muted-foreground">
                          Yes, many of our mechanical keyboards feature
                          customizable RGB lighting.
                        </p>
                      </div>
                      <div className="grid gap-1">
                        <p className="font-medium">
                          What is the warranty on this keyboard?
                        </p>
                        <p className="text-muted-foreground">
                          We offer a 1-year warranty on all our mechanical
                          keyboards, covering any manufacturing defects.
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <div className="grid gap-1">
                        <p className="font-medium">
                          Can I customize the keycaps on this keyboard?
                        </p>
                        <p className="text-muted-foreground">
                          Absolutely! Our mechanical keyboards support standard
                          keycap sizes, making them compatible with most
                          aftermarket keycap sets.
                        </p>
                      </div>
                      <div className="grid gap-1">
                        <p className="font-medium">
                          Does this keyboard have programmable keys?
                        </p>
                        <p className="text-muted-foreground">
                          Yes, our keyboards come with software that allows you
                          to program keys and create custom macros.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
