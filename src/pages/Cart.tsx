import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

function CartPage() {
  const cartItems = [
    {
      id: 1,
      image: "/placeholder.svg",
      name: "Cozy Blanket",
      price: 29.99,
      quantity: 2,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      name: "Autumn Mug",
      price: 12.99,
      quantity: 1,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      name: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 3,
    },
  ];
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 0.1 * subtotal;
  const tax = 0.08 * subtotal;
  const total = subtotal - discount + tax;
  return (
    <Container>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[80px_1fr_auto] items-center gap-4"
              >
                <img
                  src="/placeholder.svg"
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <div className="text-right font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-muted/40 rounded-lg p-6 grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Discount</span>
                <span className="text-green-500">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link to="/dashboard/checkout">
              <Button size="lg" className="w-full">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CartPage;
