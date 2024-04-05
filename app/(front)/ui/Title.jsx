import Link from "next/link";
function Title({ title, link }) {
  return (
    <div>
      <Link href={link} className="text-4xl">
        {title}
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md" />
    </div>
  );
}

export default Title;
