"use client";
import Header from "@/app/(front)/ui/Header";
import { useState } from "react";
import { useSession } from "@clerk/nextjs";
import { addNewUser } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

function VerifyPage() {
  // const [addedToDB, setAddedToDB] = useState(false);
  const router = useRouter();
  const { isSignedIn, session } = useSession();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (!isSignedIn) {
      return;
    } else {
      try {
        await addNewUser(formData);
        router.push("/");
      } catch (err) {
        console.log(err);
      }
    }
    // console.log(session.user.id);
    // console.log(session);
    // console.log(isSignedIn);
    // console.log(formData.get("name"));
    // console.log(formData.get("userId"));
    // console.log(formData.get("email"));
    // console.log(formData.get("role"));
  };
  return (
    <div className="bg-hero-background-image flex flex-col bg-cover h-[100vh] relative">
      <Header color={"white"} />
      <div className=" w-full flex flex-col h-full justify-center items-center gap-10 lg:gap-16">
        <h1 className="text-white font-extrabold text-3xl md:text-[40px] uppercase drop-shadow-md">
          Sign Up Completion
        </h1>
        <div className="bg-zinc-200/50 px-5 py-16 rounded-lg w-[500px]">
          {/* <div className="flex text-center justify-center items-center">
            <SignUp />
          </div> */}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-5 "
          >
            <div className="flex justify-between items-center gap-4 w-[80%]">
              <label
                htmlFor="name"
                className="w-32 text-white font-bold text-lg"
              >
                Name:
              </label>
              <input
                // onChange={(e) => setEmailAddress(e.target.value)}
                required
                id="name"
                name="name"
                type="text"
                className="rounded p-2 w-full"
              ></input>
            </div>
            <div className="flex justify-between items-center gap-4 w-[80%]">
              <label
                htmlFor="lastname"
                className="w-32 text-white font-bold text-lg"
              >
                LastName:
              </label>
              <input
                // onChange={(e) => setPassword(e.target.value)}
                required
                id="lastname"
                name="lastname"
                type="text"
                className="rounded p-2 w-full"
              ></input>
            </div>
            <div className="flex justify-between items-center gap-4 w-[80%]">
              <label
                htmlFor="mobile"
                className="w-32 text-white font-bold text-lg"
              >
                Mobile:
              </label>
              <input
                // onChange={(e) => setPassword(e.target.value)}
                required
                id="mobile"
                name="mobile"
                type="text"
                className="rounded p-2 w-full"
              ></input>
            </div>
            <div className="flex justify-between items-center gap-4 w-[80%]">
              <label
                htmlFor="address"
                className="w-32 text-white font-bold text-lg self-start"
              >
                Address:
              </label>
              <textarea
                // onChange={(e) => setPassword(e.target.value)}
                required
                id="address"
                name="address"
                className="rounded p-2 w-full"
              ></textarea>
            </div>
            <input
              type="text"
              className="hidden"
              name="userId"
              // defaultValue={session.user.id}
            />
            <input
              type="text"
              className="hidden"
              name="email"
              // defaultValue={session.user.emailAddresses[0].emailAddress}
            />
            <input
              type="text"
              className="hidden"
              name="role"
              defaultValue={"member"}
            />
            <button
              // onClick={handleSubmit}
              type="submit"
              className="bg-orange-400 text-white rounded px-4 py-2 font-bold"
            >
              Finish Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* <div className="relative h-[6.25vw] -bottom-1 md:-bottom-2 bg-hero-bg-curve bg-contain"></div> */}
    </div>
  );
}

export default VerifyPage;
