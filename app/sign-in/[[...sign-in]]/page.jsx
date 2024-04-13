import Link from "next/link";
import Header from "@/app/(front)/ui/Header";
import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <div className="bg-hero-background-image flex flex-col bg-cover h-[100vh] relative">
      <Header color={"white"} />
      <div className="flex flex-col justify-center items-center my-20 pb-14 mx-32 lg:mx-44 gap-10 lg:gap-16">
        <h1 className="text-white font-extrabold text-3xl md:text-[40px] lg:text-[60px] uppercase drop-shadow-md">
          Login
        </h1>
        <div className="text-center w-[80%] lg:w-[40%]">
          <div className="flex justify-center items-center">
            <SignIn />
          </div>
          {/* <form className="flex flex-col gap-5">
            <input type="text" className="rounded p-2"></input>
            <input type="password" className="rounded p-2"></input>
            <button className="bg-orange-400 text-white rounded py-2 font-bold">
              Login
            </button>
          </form> */}
          <div className="flex justify-center items-center gap-5 my-5">
            <p className="text-white">Don't Have an account?</p>
            <Link
              href={"/sign-up"}
              className="bg-orange-400 text-white rounded py-2 px-4 font-bold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="relative h-[6.25vw] -bottom-1 md:-bottom-2 bg-hero-bg-curve bg-contain"></div> */}
    </div>
  );
}

export default SignInPage;
