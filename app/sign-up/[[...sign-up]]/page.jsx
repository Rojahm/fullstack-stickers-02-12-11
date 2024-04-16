"use client";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/app/(front)/ui/Header";
// import { SignUp } from "@clerk/nextjs";

function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
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
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <div className="bg-hero-background-image flex flex-col bg-cover h-[100vh] relative">
      <Header color={"white"} />
      <div className="flex flex-col justify-center items-center my-20 pb-14 mx-32 lg:mx-44 gap-10 lg:gap-16">
        <h1 className="text-white font-extrabold text-3xl md:text-[40px] lg:text-[60px] uppercase drop-shadow-md">
          Sign Up
        </h1>
        <div className="text-center w-[80%] lg:w-[40%]">
          {/* <div className="flex text-center justify-center items-center">
            <SignUp />
          </div> */}
          {!pendingVerification && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmailAddress(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  className="rounded p-2"
                ></input>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  className="rounded p-2"
                ></input>
              </div>
              <button
                // onClick={handleSubmit}
                type="submit"
                className="bg-orange-400 text-white rounded py-2 font-bold"
              >
                Sign Up
              </button>
            </form>
          )}
          {pendingVerification && (
            <div>
              <form>
                <input
                  value={code}
                  placeholder="Code..."
                  onChange={(e) => setCode(e.target.value)}
                />
                <button onClick={onPressVerify}>Verify Email</button>
              </form>
            </div>
          )}
          <div className="flex justify-center items-center gap-5 my-5">
            <p className="text-white">Already Have an account?</p>
            <Link
              href={"/sign-in"}
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
