import AlertModel from "@/components/shared/AlertModel";
import Container from "@/components/shared/Container";
import Loader from "@/components/shared/Loader";
import PaginationComponent from "@/components/shared/PaginationComponent";
import { Badge } from "@/components/ui/badge";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import {
  useDeleteProductsMutation,
  useFetchProductsQuery,
} from "@/redux/api/productApi";
import { TProduct } from "@/Types";
import { truncate } from "@/utils";
import {
  FilePenIcon,
  FilterIcon,
  FilterXIcon,
  ListOrderedIcon,
  TrashIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ManageProduct() {
  const [limit, setLimit] = useState("8");
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("stock");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetchProductsQuery({
    page,
    limit: Number(limit),
    sort,
    searchTerm,
    fields: "name,description,stock,price",
  });

  const [deleteProductFn] = useDeleteProductsMutation();

  const handleBrandDelete = async (productId: string) => {
    await deleteProductFn(productId)
      .unwrap()
      .then((res) => {
        if (res?.statusCode === 200) {
          toast({
            title: res?.message,
            duration: 2000,
          });
        }
      })
      .catch((error) => {
        toast({
          title: error?.data?.message,
          duration: 2000,
        });
      });
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleSort = (sort: string) => {
    setSort(sort);
  };

  const handleClearFilter = () => {
    setSort("stock");
    setSearchTerm("");
  };

  if (isLoading) {
    return <Loader size={200} />;
  }

  return (
    <Container>
      <div className="flex flex-col h-full my-8">
        <header>
          <div className="bg-background border-b pb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Product Management</h1>
            <Link to="/dashboard/add-product">
              <Button size="sm">Create New Product</Button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between my-5">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex gap-4">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                <DropdownMenuContent align="end" className="w-64 p-5">
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
                  <DropdownMenuCheckboxItem
                    onClick={() => handleSort("-createdAt")}
                  >
                    Latest
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem onClick={() => handleSort("price")}>
                    Price: Low to High
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    onClick={() => handleSort("-price")}
                  >
                    Price: High to Low
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    onClick={() => handleSort("-rating")}
                  >
                    Rating: High to Low
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline">
                <FilterXIcon
                  onClick={handleClearFilter}
                  className="h-4 w-4 mr-2"
                />
                Clear
              </Button>
              <Select
                onValueChange={(value) => setLimit(value)}
                value={limit.toString()}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="16">16</SelectItem>
                  <SelectItem value="32">32</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
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
                {data?.data?.result?.map((product: TProduct) => (
                  <TableRow key={product._id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>

                    <TableCell>{truncate(product.description, 6)}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge
                        variant={product.stock > 0 ? "default" : "destructive"}
                      >
                        {product.stock > 0 ? "in stock" : "stock out"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Link to={`/dashboard/edit-product/${product._id}`}>
                          <Button size="icon" variant="outline">
                            <FilePenIcon className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                        </Link>
                        <AlertModel
                          onConfirm={() => handleBrandDelete(product._id)}
                        >
                          <Button size="icon" variant="outline">
                            <TrashIcon className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </AlertModel>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div>
              {data?.data?.meta?.total > 8 && (
                <div className="flex justify-center my-8">
                  <PaginationComponent
                    meta={data?.data?.meta}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
}

export default ManageProduct;
