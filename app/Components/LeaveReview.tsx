"use client";

import Link from "next/link";
import React from "react";

const LeaveReview = () => {
  return (
    <>
      <div>
        <button className="rounded-[6px] w-full px-[40px] py-[16px] bg-[#3366FF] text-[16px] uppercase  text-white  font-medium md:text-[14px] h-fit">
          <Link href="./create-review">LEAVE A REVIEW</Link>
        </button>
      </div>
    </>
  );
};

export default LeaveReview;
