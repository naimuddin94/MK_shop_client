import PaginationComponent from "@/components/shared/PaginationComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

function AddBrand() {
  const [brands, setBrands] = useState([
    { id: 1, name: "Nike", origin: "United States" },
    { id: 2, name: "Adidas", origin: "Germany" },
    { id: 3, name: "Gucci", origin: "Italy" },
    { id: 4, name: "Uniqlo", origin: "Japan" },
  ]);
  const [newBrand, setNewBrand] = useState({
    name: "",
    origin: "",
  });
  const handleInputChange = (e) => {
    setNewBrand((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleAddBrand = () => {
    if (newBrand.name.trim() && newBrand.origin.trim()) {
      setBrands((prevBrands) => [
        ...prevBrands,
        { id: prevBrands.length + 1, ...newBrand },
      ]);
      setNewBrand({ name: "", origin: "" });
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
      <div className="bg-background rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">Add New Brand</h2>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="name">Brand Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter brand name"
              value={newBrand.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="origin">Brand Origin</Label>
            <Input
              id="origin"
              name="origin"
              type="text"
              placeholder="Enter brand origin"
              value={newBrand.origin}
              onChange={handleInputChange}
            />
          </div>
          <Button onClick={handleAddBrand}>Add Brand</Button>
        </div>
      </div>
      <div className="bg-background rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">Existing Brands</h2>
        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Brand Name</TableHead>
              <TableHead>Brand Origin</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brands.map((brand) => (
              <TableRow key={brand.id}>
                <TableCell>{brand.name}</TableCell>
                <TableCell>{brand.origin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationComponent />
      </div>
    </div>
  );
}

export default AddBrand;
