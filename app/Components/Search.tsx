"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "../../public/Icons/ic_search.png";

const Search = () => {
  return (
    <>
      <div>
        <form className="mt-6">
          <div className="relative ">
            <Image
              src={SearchIcon}
              alt="search"
              className="absolute top-6 left-2"
            />
            <input
              className="bg-[#F3F7FE] w-full py-[16px] px-[12px] pl-[28px] pr-[10px] rounded-md border border-[#D4DCF1] placeholder:text-[#484851] placeholder:text-[14px] focus:outline-none focus:border-blue-500 "
              placeholder="Enter Address"
              type="text"
            />

            <button className="mt-[8px] bg-[#3366FF] text-[#FFFFFF] py-[15.5px] px-[40px] rounded-md text-[16px] font-[inter] font-medium leaading-[19.36px]">
              SEARCH
            </button>
          </div>
        </form>
        <div className="mt-4">
          <Link
            href="./review"
            className=" text-[#1E1E1E] text-[16px] font-medium"
          >
            Go to Review Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default Search;
