"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Pagination({ qty }) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const pageNumber = Number(params.get("pn")) || 1;
  const paginate = Number(params.get("pg")) || 6;
  const numberOfPages = Math.ceil(qty / paginate);

  // Generate the suitable Array for page numbers
  const pageArray = () => {
    let pages = [];
    if (numberOfPages <= 7) {
      return Array.from(Array(numberOfPages), (_, i) => i + 1);
    } else if (pageNumber < 3) {
      return [1, 2, 3, "...", numberOfPages];
    } else if (pageNumber === 3) {
      return [1, 2, 3, 4, "...", numberOfPages];
    } else if (pageNumber > numberOfPages - 2) {
      return [1, "...", numberOfPages - 2, numberOfPages - 1, numberOfPages];
    } else if (pageNumber === numberOfPages - 2) {
      return [
        1,
        "...",
        numberOfPages - 3,
        numberOfPages - 2,
        numberOfPages - 1,
        numberOfPages,
      ];
    } else {
      return [
        1,
        "...",
        pageNumber - 1,
        pageNumber,
        pageNumber + 1,
        "...",
        numberOfPages,
      ];
    }
  };
  //Generate buttons
  const pages = pageArray();
  let pageBtns = [];
  pages.map((page) => {
    page === "..."
      ? pageBtns.push(<div>{page}</div>)
      : pageBtns.push(
          <button
            key={page}
            onClick={() => {
              params.set("pn", page);
              replace(`${pathname}?${params.toString()}`);
            }}
            className={`font-bold border border-green-600 rounded-full w-10 leading-10 text-center hover:bg-purple-700 hover:text-white ${
              page === pageNumber
                ? "bg-green-600 shadow-lg text-white"
                : "shadow-md"
            }`}
          >
            {page}
          </button>
        );
  });
  // Goes to top of the page
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex my-10 justify-between items-center gap-5">
      <div className="flex gap-2">{pageBtns}</div>
      <div className="flex gap-2 font-thin text-sm items-center">
        <p className="text-sm">Items per Page:</p>
        <select
          onChange={() => {
            params.set("pg", pagination.value);
            params.set("pn", 1);
            replace(`${pathname}?${params.toString()}`);
            goTop();
          }}
          name="pagination"
          id="pagination"
          className="rounded"
          defaultValue={paginate}
        >
          {/* <option value={2}>2</option> */}
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
    </div>
  );
}

export default Pagination;
