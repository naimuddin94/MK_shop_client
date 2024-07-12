import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UploadIcon } from "lucide-react";
import { useState } from "react";

function AddProduct() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid gap-6 px-4 py-8 mx-auto max-w-4xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Add New Product</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Product Image</CardTitle>
              <CardDescription>
                Upload an image for your product.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="aspect-square bg-muted dark:bg-muted/30 rounded-md overflow-hidden">
                  {selectedImage && (
                    <img
                      src={previewUrl as string}
                      alt="Product Image"
                      width={300}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <Button
                  variant="outline"
                  className="justify-center"
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  <UploadIcon className="w-4 h-4 mr-2" />
                  Upload Image
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>
                Fill in the details for your new product.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter product name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                    className="min-h-[120px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="brand">Brand</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cherry">Cherry</SelectItem>
                      <SelectItem value="gateron">Gateron</SelectItem>
                      <SelectItem value="kailh">Kailh</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter product price"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                      id="stock"
                      type="number"
                      placeholder="Enter product stock"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <Button variant="outline">Discard</Button>
        <Button type="submit">Save Product</Button>
      </div>
    </div>
  );
}

export default AddProduct;
