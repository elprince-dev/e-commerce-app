"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, hasPrev, hasNext }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        onClick={() => createPageUrl(currentPage - 1)}
        disabled={!hasPrev}
        className="rounded-md bg-secondary text-white p-2  text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-[#D5B263]"
      >
        Previous
      </button>
      <button
        onClick={()=> createPageUrl(currentPage + 1)}
        disabled={!hasNext}
        className="rounded-md bg-secondary text-white p-2  text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-[#D5B263]"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
