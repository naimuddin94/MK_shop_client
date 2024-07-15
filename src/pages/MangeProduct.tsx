import Container from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FilePenIcon, TrashIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ManageProduct() {
  const [products] = useState([
    {
      id: 1,
      name: "Acme Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 99.99,
      inventory: 50,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Gizmo Smart Lamp",
      description: "Adjustable smart lamp with voice control",
      price: 49.99,
      inventory: 25,
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "Techno Fitness Tracker",
      description: "Advanced fitness tracker with heart rate monitoring",
      price: 79.99,
      inventory: 75,
      status: "In Stock",
    },
    {
      id: 4,
      name: "Lumina LED Bulbs",
      description: "Energy-efficient LED bulbs with adjustable brightness",
      price: 12.99,
      inventory: 100,
      status: "In Stock",
    },
    {
      id: 5,
      name: "Aqua Water Purifier",
      description: "Compact water purifier with advanced filtration",
      price: 59.99,
      inventory: 30,
      status: "Out of Stock",
    },
  ]);
  return (
    <Container>
      <div className="flex flex-col h-full my-8">
        <header className="bg-background border-b pb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Product Management</h1>
          <Link to="/dashboard/add-product">
            <Button size="sm">Create New Product</Button>
          </Link>
        </header>
        <main className="flex-1 overflow-auto pt-5">
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Inventory</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.inventory}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          product.status === "In Stock"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="outline">
                          <FilePenIcon className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button size="icon" variant="outline">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </Container>
  );
}

export default ManageProduct;
