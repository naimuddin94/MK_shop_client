import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  return (
    <Container className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="divide-y">
            <div className="flex justify-between items-center py-2">
              <div>
                <h3 className="font-medium">Acme T-Shirt</h3>
                <p className="text-gray-500">Size: M, Color: Black</p>
              </div>
              <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-700 mr-2">
                  <MinusIcon className="w-5 h-5" />
                </button>
                <span>1</span>
                <button className="text-gray-500 hover:text-gray-700 ml-2">
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>
              <div>$19.99</div>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <h3 className="font-medium">Acme Hoodie</h3>
                <p className="text-gray-500">Size: L, Color: Navy</p>
              </div>
              <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-700 mr-2">
                  <MinusIcon className="w-5 h-5" />
                </button>
                <span>1</span>
                <button className="text-gray-500 hover:text-gray-700 ml-2">
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>
              <div>$39.99</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <label htmlFor="promo-code" className="font-medium">
                Promo Code
              </label>
              <div className="flex items-center">
                <Input
                  id="promo-code"
                  type="text"
                  placeholder="Enter promo code"
                  className="border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <Button size="sm">Apply</Button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>$59.98</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Tax</span>
              <span>$4.80</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span>$69.78</span>
            </div>
          </div>
        </div>
        <div className="border rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="address" className="block font-medium mb-1">
                  Address
                </label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Enter your address"
                  className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="city" className="block font-medium mb-1">
                  City
                </label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="state" className="block font-medium mb-1">
                  State
                </label>
                <Input
                  id="state"
                  type="text"
                  placeholder="Enter your state"
                  className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block font-medium mb-1">
                  Zip Code
                </label>
                <Input
                  id="zip"
                  type="text"
                  placeholder="Enter your zip code"
                  className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="country" className="block font-medium mb-1">
                  Country
                </label>
                <div className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="bangladesh">Bangladesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="border rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <RadioGroup defaultValue="card">
                <div className="flex items-center">
                  <RadioGroupItem
                    id="card"
                    value="card"
                    className="mr-2 focus:ring-primary-500"
                  />
                  <Label htmlFor="card" className="font-medium">
                    Credit/Debit Card
                  </Label>
                </div>
                <div className="mt-2">
                  <Input
                    type="text"
                    placeholder="Card number"
                    className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <Input
                      type="text"
                      placeholder="Expiration date"
                      className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    <Input
                      type="text"
                      placeholder="CVV"
                      className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
              </RadioGroup>
            </div>
            <div>
              <RadioGroup defaultValue="paypal">
                <div className="flex items-center">
                  <RadioGroupItem
                    id="paypal"
                    value="paypal"
                    className="mr-2 focus:ring-primary-500"
                  />
                  <Label htmlFor="paypal" className="font-medium">
                    PayPal
                  </Label>
                </div>
                <div className="mt-2">
                  <Input
                    type="email"
                    placeholder="Enter your PayPal email"
                    className="border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </RadioGroup>
            </div>
            <div>
              <RadioGroup defaultValue="apple-pay">
                <div className="flex items-center">
                  <RadioGroupItem
                    id="apple-pay"
                    value="apple-pay"
                    className="mr-2 focus:ring-primary-500"
                  />
                  <Label htmlFor="apple-pay" className="font-medium">
                    Apple Pay
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="border rounded-lg shadow-md p-6 col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Review and Place Order</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Shipping Address</h3>
              <p>John Doe</p>
              <p>123 Main St.</p>
              <p>Anytown, USA 12345</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Payment Method</h3>
              <p>Visa ending in 1234</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span>$59.98</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Tax</span>
              <span>$4.80</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span>$69.78</span>
            </div>
          </div>
          <div className="mt-6">
            <Checkbox id="terms" className="mr-2 focus:ring-primary-500" />
            <Label htmlFor="terms" className="text-gray-500">
              I agree to the{" "}
              <Link to="#" className="text-primary-500 underline">
                terms and conditions
              </Link>
            </Label>
          </div>
          <div className="mt-6">
            <Button size="lg" className="w-full">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CheckoutPage;
