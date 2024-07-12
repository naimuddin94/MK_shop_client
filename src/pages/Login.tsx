import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { LucideEye, LucideEyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <section className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your email and password to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="mail@example.com"
                required
              />
            </div>
            <div className="space-y-2 relative">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="text-sm font-medium underline underline-offset-4 hover:text-primary"
                >
                  Forgot password?
                </a>
              </div>
              <Input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[40%] opacity-50 cursor-pointer"
              >
                {showPassword ? <LucideEye /> : <LucideEyeOff />}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              type="submit"
              className="w-full border-theme/40"
            >
              Login
            </Button>
          </CardFooter>
          <Link
            to="/register"
            className="inline-block w-full text-center text-sm  font-medium underline underline-offset-4 hover:text-primary pb-8"
          >
            Haven't account yet ? Sign Up
          </Link>
        </Card>
      </form>
    </section>
  );
}

export default Login;
