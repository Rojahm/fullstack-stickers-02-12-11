"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { searchPack } from "@/app/lib/data";
import Packs from "@/app/(front)/ui/Packs";
function PackResult({ setTitle }) {
  const params = useSearchParams();
  const query = params.get("query");
  const [packs, setPacks] = useState([]);
  useEffect(() => {
    setTitle(query);
    const handleSearch = async (query) => {
      if (query) {
        const packResult = await searchPack(query);
        setPacks(packResult.result);
      } else {
        setPacks([]);
      }
    };
    handleSearch(query);
  }, [query]);
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
      <Packs packs={packs} />
    </div>
  );
}

export default PackResult;
