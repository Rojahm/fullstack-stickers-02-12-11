import Image from "next/image";
import Link from "next/link";
// UI icons
import { CiHome } from "react-icons/ci";

function NotFound() {
  return (
    <div className="bg-sky-300 h-[100vh] w-full flex flex-col items-center">
      <div className="flex items-center gap-5 mt-10 mb-16">
        <Link href={"/"}>
          <CiHome size={44} />
          <p className="font-bold">Home</p>
        </Link>
        <Link href={"/"}>
          <Image
            src={"/notFound (2).png"}
            width={150}
            height={150}
            alt="go home gary"
          />
        </Link>
      </div>
      <Link href={"/"}>
        <Image
          src={"/notFound (1).png"}
          width={300}
          height={300}
          alt="page not found ghost"
        />
      </Link>
    </div>
  );
}

export default NotFound;
