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
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="flex justify-center items-center min-h-screen">
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
              id="email"
              type="email"
              placeholder="mail@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-sm font-medium underline underline-offset-4 hover:text-primary"
              >
                Forgot password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" type="submit" className="w-full border-theme/40">
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
    </section>
  );
}

export default Login;
