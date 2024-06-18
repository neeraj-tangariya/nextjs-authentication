import RegisterForm from "@/components/client/register-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { auth } from "../auth";
import { redirect } from "next/navigation";

async function Register() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign-Up</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <span>OR</span>
          <Link href="/login" className="hover:underline">
            {`Already have an account? Sign-in`}
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;
