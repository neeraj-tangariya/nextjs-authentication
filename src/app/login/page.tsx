import { LoginForm } from "@/components/client/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

async function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign-In</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <span>OR</span>
          <Link href="/register" className="hover:underline">
            {`Don't have an account? Signup`}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
