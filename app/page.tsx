import Image from "next/image";
import SigninForm from "./ui/signin-form";

export default function Login() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="bg-[#444444] rounded-2xl w-full max-w-xl h-fit">
        <h2 className="text-center text-4xl font-extrabold p-2 text-[#DA0037]">
          Login
        </h2>
        <SigninForm />
      </div>
    </main>
  );
}
