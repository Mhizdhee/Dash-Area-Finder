import React from "react";
import Image from "next/image";
import Star from "../../public/Icons/Shape.png";

const CreateReviewPage = () => {
  return (
    <>
      <div className="fixed z-50 w-full  h-full top-0 left-0 flex  justify-center  items-center bg-opacity-95 bg-[#1D3045]">
        <div className="md:my-[113px] lg:my-[170px] ">
        <div className="bg-[#F3F7FE]  mx-[16px] border rounded-[6px] lg:w-[695px]  ">
          <h2 className="flex items-center justify-center pt-[16px] text-[18px] font-medium leading-[24px] text-[#1E1E1E]">
            Review Location
          </h2>
          <p className="flex items-center justify-center text-[20px] py-[16px] font-medium leading-[24px] text-[#1E1E1E]">
            Bonny and Clyde Street, Lagos
          </p>

          <div className="mx-[16px]">
            <form className="mt-[32px] ">
              <div>
                <select
                  name="amenities"
                  id="amenities"
                  className="bg-[#F3F7FE] w-full text-[#1E1E1E] p-[8px] rounded-[6px]"
                >
                  <option value="">Select Amenities</option>
                  <option value="">
                    <input
                      type="checkbox"
                      id="amenities_0"
                      className="cursor-pointer"
                      name="amenities"
                    />
                  </option>
                </select>
                <p className="text-xs text-primary"></p>
              </div>
            </form>
            <div className="pt-[16px]">
              <label className="text-[14px] font-medium text-[#1e1e1e] display">
                Rate Location
              </label>
            </div>
            <div className="pt-[14px] flex ">
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
            </div>
            <div className="pt-[16px]">
              <p>Write Review</p>
              <textarea
                name="text"
                id="text"
                cols={35}
                rows={10}
                
                className="mt-[14px] w-full placeholder:p-[16px]"
                placeholder="Your Review..... "
              ></textarea>
            </div>

            <div className="mt-[16px] flex items-center gap-1">
              <input
                className="text-sm border"
                id="anonymous"
                type="radio"
                value="false"
                name="anonymous"
              />
              <p className="text-[14px] text-[#484851] leading-[16.94px] font-normal">
                Post as Anonymous
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 pt-[13.5px] mb-[20px]">
              <button
                type="submit"
                className="rounded-[6px] px-[40px] py-[16px] text-base uppercase  text-white bg-secondary font-medium bg-[#e4e9fb] "
              >
                submit
              </button>
              <button className="bg-white text-[#3366FF] border border-secondary rounded-[6px] px-[40px] py-[16px]  text-base uppercase font-medium ">
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CreateReviewPage;
