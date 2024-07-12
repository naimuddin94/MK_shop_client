import PaginationComponent from "@/components/shared/PaginationComponent";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { FilterIcon, ListOrderedIcon } from "lucide-react";

function Products() {
  return (
    <div>
      <main className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <Input
              type="search"
              placeholder="Search products..."
              //   value={searchTerm}
              //   onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="grid gap-2">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <div className="grid gap-2">
                      <Label className="flex items-center gap-2">
                        <Checkbox value="Electronics" />
                        Electronics
                      </Label>
                      <Label className="flex items-center gap-2">
                        <Checkbox value="Bags" />
                        Bags
                      </Label>
                      <Label className="flex items-center gap-2">
                        <Checkbox value="Outdoor" />
                        Outdoor
                      </Label>
                      <Label className="flex items-center gap-2">
                        <Checkbox value="Accessories" />
                        Accessories
                      </Label>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="price-range">Price Range</Label>
                    <div className="w-full" />
                  </div>
                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <Slider
                      id="rating"
                      min={0}
                      max={5}
                      step={0.5}
                      //   value={[filters.rating]}
                      //   onValueChange={(value) =>
                      //     setFilters({ ...filters, rating: value })
                      //   }
                      className="w-full"
                    />
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <ListOrderedIcon className="h-4 w-4 mr-2" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>
                  Price: Low to High
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Price: High to Low
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Rating: High to Low
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Newest</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center mt-8">
          <PaginationComponent />
        </div>
      </main>
    </div>
  );
}

export default Products;
