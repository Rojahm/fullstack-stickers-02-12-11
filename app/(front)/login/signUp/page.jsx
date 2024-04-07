import Link from "next/link";
import Header from "../../ui/Header";
function SignUpPage() {
  return (
    <div className="bg-hero-background-image flex flex-col bg-cover h-[85vh] relative">
      <Header color={"white"} />
      <div className="flex flex-col justify-center items-center my-20 pb-14 mx-32 lg:mx-44 gap-10 lg:gap-16">
        <h1 className="text-white font-extrabold text-3xl md:text-[40px] lg:text-[60px] uppercase drop-shadow-md">
          Sign Up
        </h1>
        <div className="text-center w-[80%] lg:w-[40%]">
          <form className="flex flex-col gap-5">
            <input type="text" className="rounded p-2"></input>
            <input type="password" className="rounded p-2"></input>
            <button className="bg-orange-400 text-white rounded py-2 font-bold">
              Sign Up
            </button>
          </form>
          <div className="flex justify-center items-center gap-5 my-5">
            <p className="text-white">Already Have an account?</p>
            <Link
              href={"/login"}
              className="bg-orange-400 text-white rounded py-2 px-4 font-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="relative h-[6.25vw] -bottom-1 md:-bottom-2 bg-hero-bg-curve bg-contain"></div> */}
    </div>
  );
}

export default SignUpPage;
