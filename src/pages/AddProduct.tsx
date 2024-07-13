import Loader from "@/components/shared/Loader";
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
import { toast } from "@/components/ui/use-toast";
import { useFetchBrandsQuery } from "@/redux/api/brandApi";
import { useAddProductMutation } from "@/redux/api/productApi";
import { TBrand } from "@/Types";
import { jsonToFormData } from "@/utils/formDataBuilder";
import { UploadIcon } from "lucide-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();

  console.log(errors);

  const [brand, setBrand] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [addProductFn] = useAddProductMutation();
  const { data, isLoading: BrandLoading } = useFetchBrandsQuery({});

  // Save a new product to the database
  const onSubmit = async (data: FieldValues) => {
    const newProductData = { ...data, brand, image: selectedImage };

    if (!selectedImage) {
      return toast({
        title: "Product image is required",
        duration: 2000,
      });
    }

    if (!brand) {
      return toast({
        title: "Brand is required",
        duration: 2000,
      });
    }

    const productFormDat = jsonToFormData(newProductData);
    await addProductFn(productFormDat)
      .unwrap()
      .then((res) => {
        console.log(res);
        if (res?.statusCode === 201) {
          toast({
            title: res?.message,
            duration: 2000,
          });
          reset();
          setPreviewUrl(null);
          setSelectedImage(null);
          setBrand("");
        }
      })
      .catch((error) => {
        toast({
          title: error?.data?.message,
          duration: 2000,
        });
      });
  };

  // Discard form
  const handleDiscard = () => {
    setPreviewUrl(null);
    setSelectedImage(null);
    setBrand("");
  };

  if (BrandLoading) {
    return <Loader size={300} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-6 px-4 py-8 mx-auto max-w-4xl sm:px-6 lg:px-8"
    >
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
                  type="button"
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
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    id="name"
                    type="text"
                    placeholder="Enter product name"
                  />
                  {errors.name && (
                    <span className="text-theme text-xs">
                      {errors.name.message as string}
                    </span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    {...register("description", {
                      required: "Description is required",
                    })}
                    id="description"
                    placeholder="Enter product description"
                    className="min-h-[120px]"
                  />
                  {errors.description && (
                    <span className="text-theme text-xs">
                      {errors.description.message as string}
                    </span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="brand">Brand</Label>
                  <Select
                    onValueChange={(value) => setBrand(value)}
                    value={brand}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {data?.data?.result?.map((brand: TBrand) => (
                        <SelectItem key={brand._id} value={brand._id}>
                          {brand.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      {...register("price", {
                        required: "Price is required",
                      })}
                      id="price"
                      type="number"
                      placeholder="Enter product price"
                    />
                    {errors.price && (
                      <span className="text-theme text-xs">
                        {errors.price.message as string}
                      </span>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                      {...register("stock", {
                        required: "Stock is required",
                      })}
                      id="stock"
                      type="number"
                      placeholder="Enter product stock"
                    />
                    {errors.stock && (
                      <span className="text-theme text-xs">
                        {errors.stock.message as string}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <Button type="reset" variant="outline" onClick={handleDiscard}>
          Discard
        </Button>
        <Button type="submit" className="min-w-28">
          {isSubmitting ? <Loader size={28} /> : "Save Product"}
        </Button>
      </div>
    </form>
  );
}

export default AddProduct;
