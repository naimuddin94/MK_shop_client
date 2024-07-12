import { Button } from "@/components/ui/button";
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
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profile-image">Profile Image</Label>
            <Input
              id="profile-image"
              type="file"
              className="dark:file:text-white"
            />
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Link
            to="/login"
            className="text-sm text-muted-foreground hover:underline"
          >
            Already have an account? Login
          </Link>
          <Button type="submit" variant="outline">Register</Button>
        </CardFooter>
      </Card>
    </section>
  );
}

export default Register;