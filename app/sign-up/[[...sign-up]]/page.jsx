"use client";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/app/(front)/ui/Header";
import { useSession } from "@clerk/nextjs";
// import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  // const [addedToDB, setAddedToDB] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();
  // start the sign up process.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        // ADD aditional info
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/verify-sign-up");
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <div className="bg-hero-background-image flex flex-col bg-cover h-[100vh] relative">
      <Header color={"white"} />
      <div className=" w-full flex flex-col h-full justify-center items-center gap-10 lg:gap-16">
        {/* <div className="text-center w-[80%] lg:w-[40%]"> */}
        {/* <div className="flex text-center justify-center items-center">
            <SignUp />
          </div> */}
        {!pendingVerification ? (
          <h1 className="text-white font-extrabold text-3xl md:text-[40px] uppercase drop-shadow-md">
            Sign Up
          </h1>
        ) : (
          <h1 className="text-white font-extrabold text-3xl md:text-[40px] uppercase drop-shadow-md">
            Verify Your Email address
          </h1>
        )}
        <div className="bg-zinc-200/50 px-5 py-16 rounded-lg w-[500px]">
          {!pendingVerification && (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center gap-5 "
              >
                <div className="flex justify-between items-center gap-4 w-[80%]">
                  <label
                    htmlFor="email"
                    className="w-32 text-white font-bold text-lg"
                  >
                    Email:
                  </label>
                  <input
                    onChange={(e) => setEmailAddress(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    className="rounded p-2 w-full"
                  ></input>
                </div>
                <div className="flex justify-between items-center gap-4 w-[80%]">
                  <label
                    htmlFor="password"
                    className="w-32 text-white font-bold text-lg"
                  >
                    Password:
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    className="rounded p-2 w-full"
                  ></input>
                </div>
                <button
                  // onClick={handleSubmit}
                  type="submit"
                  className="bg-orange-400 text-white rounded px-4 py-2 font-bold"
                >
                  Sign Up
                </button>
              </form>
              <div className="flex justify-center items-center gap-5 my-5">
                <p className="text-white">Already Have an account?</p>
                <Link
                  href={"/sign-in"}
                  className="bg-orange-400 text-white rounded py-2 px-4 font-bold"
                >
                  Login
                </Link>
              </div>
            </>
          )}
          {pendingVerification && (
            <>
              <h1 className="text-white font-extrabold text-xl uppercase drop-shadow-md">
                Check your email
              </h1>
              <form className="flex flex-col justify-center items-center gap-5 ">
                <input
                  value={code}
                  placeholder="Code..."
                  onChange={(e) => setCode(e.target.value)}
                  className="rounded p-2 w-full"
                />
                <button
                  className="bg-orange-400 text-white rounded px-4 py-2 font-bold"
                  onClick={onPressVerify}
                >
                  Verify Email
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* <div className="relative h-[6.25vw] -bottom-1 md:-bottom-2 bg-hero-bg-curve bg-contain"></div> */}
    </div>
  );
}

export default SignUpPage;

// export default function SignUpForm() {

//   return (
//     <div>
//       {!pendingVerification && (
//         <form>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               onChange={(e) => setEmailAddress(e.target.value)}
//               id="email"
//               name="email"
//               type="email"
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               id="password"
//               name="password"
//               type="password"
//             />
//           </div>
//           <button onClick={handleSubmit}>Sign up</button>
//         </form>
//       )}
//       {pendingVerification && (
//         <div>
//           <form>
//             <input
//               value={code}
//               placeholder="Code..."
//               onChange={(e) => setCode(e.target.value)}
//             />
//             <button onClick={onPressVerify}>Verify Email</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
