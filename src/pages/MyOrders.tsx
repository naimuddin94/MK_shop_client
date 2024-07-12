import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PackageIcon } from "lucide-react";

function MyOrders() {
  const orders = [
    {
      id: 1,
      orderDate: "2023-06-01",
      products: [
        {
          name: "Wireless Headphones",
          quantity: 1,
          status: "Delivered",
        },
        {
          name: "Leather Backpack",
          quantity: 1,
          status: "Delivered",
        },
      ],
      total: 149.99,
    },
    {
      id: 2,
      orderDate: "2023-05-15",
      products: [
        {
          name: "Smartwatch",
          quantity: 1,
          status: "Shipped",
        },
      ],
      total: 99.99,
    },
    {
      id: 3,
      orderDate: "2023-04-20",
      products: [
        {
          name: "Fitness Tracker",
          quantity: 1,
          status: "Pending",
        },
        {
          name: "Yoga Mat",
          quantity: 1,
          status: "Pending",
        },
      ],
      total: 79.98,
    },
    {
      id: 4,
      orderDate: "2023-03-01",
      products: [
        {
          name: "Portable Bluetooth Speaker",
          quantity: 1,
          status: "Delivered",
        },
      ],
      total: 59.99,
    },
  ];
  return (
    <div className="bg-muted/40 min-h-screen py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
        <div className="grid gap-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PackageIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">Order #{order.id}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(order.orderDate).toLocaleDateString()}
                </span>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Quantity
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Status
                      </TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order.products.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="font-medium">{product.name}</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <div>{product.quantity}</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge
                            variant={
                              product.status === "Delivered"
                                ? "secondary"
                                : product.status === "Shipped"
                                ? "outline"
                                : "default"
                            }
                            className="text-xs"
                          >
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          {(product.quantity * 59.99).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-muted-foreground text-sm">
                  Total: ${order.total.toFixed(2)}
                </div>
                <Button variant="outline" size="sm">
                  View Order
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
