import React from "react";
import Image from "next/image";
import SearchIcon from "../../public/Icons/ic_search.png";
import Logo from "../../public/Images/ic_logo.png";
import Avatar from "../../public/Images/avatar.png";
import Close from "../../public/Icons/icons.png";
import ShareIcon from "../../public/Icons/Button.png";
import SaveIcon from "../../public/Icons/Icon.png";
import Frame1 from "../../public/Images/Placeholder Image.png";
import Frame2 from "../../public/Images/Frame 43.png";
import Frame3 from "../../public/Images/Frame 44.png";
import UserImg from "../../public/Icons/Ellipse 1 (1).png";
import Star from "../../public/Icons/Shape.png";
import HandIcon from "../../public/Icons/Frame 5907.png";
import LeaveReview from "../Components/LeaveReview";

const ReviewPage = () => {
  return (
    <>
      <div className="lg:bg-[#F2F6FD] w-[100vw] h-[190px]">
        <div>
          <div className="flex  w-full items-center justify-between pt-[22.5px] lg:container lg:px-[100px] lg:py-6">
            <div>
              <Image src={Logo} alt="logo " />
            </div>
            <div className="lg:flex items-center justify-between gap-x-3">
              <p className="p-3 hidden lg:flex font-[inter] font-medium text-base text-[#101012] leading-[10px]">
                Welcome!
              </p>

              <Image src={Avatar} alt="avatar" />
            </div>
          </div>
        </div>
        <form className="mt-[10.5px]">
          <div className="flex md:hidden relative ">
            <Image
              src={SearchIcon}
              alt="search"
              className="absolute top-6 left-2"
            />
            <input
              className="bg-[#F3F7FE] w-full  py-[16px] px-[12px] pl-[28px] pr-[10px] rounded-md border border-[#D4DCF1] placeholder:text-[#484851] placeholder:text-[14px] focus:outline-none focus:border-blue-500 "
              placeholder="Enter Address"
              type="text"
            />
            <Image
              src={Close}
              alt="search"
              className="absolute top-6 md: left-[92%]"
            />
          </div>
          <div className="hidden md:flex relative mt-[-7%] md:ml-[217px]   ">
            <Image
              src={SearchIcon}
              alt="search"
              className="absolute top-6 left-2"
            />

            <input
              className="bg-[#F3F7FE] w-[65%]   py-[16px] px-[12px] pl-[28px] pr-[10px] rounded-md border border-[#D4DCF1] placeholder:text-[#484851] placeholder:text-[14px] focus:outline-none focus:border-blue-500 "
              placeholder="Enter Address"
              type="text"
            />
            <Image
              src={Close}
              alt="search"
              className="absolute top-6  left-[60%]"
            />
          </div>
        </form>
        <div>
          <div className="lg:px-[100px]">
            <div>
              <h3 className="pt-[8px] font-[inter] font-medium text-[16px] text-[#1E1E1E] leading-[19.2px]">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </h3>
              <p className="font-[inter] text-[12px] leading-[18px] pt-[8px]">
                <span className="font-semibold  text-[#18181B]">"450"</span>
                <span className=" font-medium  text-[#18181B]">
                  Reviews (People are raving about the location)
                </span>
              </p>
            </div>

            <div className="pt-[16px] w-full overflow-x-scroll no-scrollbar flex justify-start items-center">
              <div className="flex justify-start items-center gap-2 leading-[13.8px] font-normal text-[12px]">
                <div className="flex justify-center items-center h-[22px] w-[61px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className="text-[12px] text-[#1E1E1E]  text-center leading-[13.8px] font-normal">
                    Schools
                  </p>
                </div>
                <div className="flex justify-center items-center h-[22px] w-[69px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px]  border-[1px] border-[#1E1E1E]">
                  <p className="text-[12px] text-[#1E1E1E] text-center">
                    Hospitals
                  </p>
                </div>
                <div className="flex justify-center items-center h-[22px] w-[56px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px]  border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E]  text-center">Airport</p>
                </div>
                <div className="flex justify-center items-center h-[22px] w-[43px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E]  text-center">Gym</p>
                </div>
                <div className="flex justify-center items-center h-[22px] w-[42px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E] text-center">Park</p>
                </div>
                <div className="flex justify-center items-center h-[22px] w-[46px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E] text-center">WiFi</p>
                </div>
                <div className="flex justify-center items-center h-[22px] w-[120px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E]  text-center">Shopping Malls</p>
                </div>

                <div className="flex justify-center items-center h-[24px] w-[100px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E]  text-center">Train station</p>
                </div>
                <div className="flex justify-center items-center h-[24px] w-[90px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E]  text-center">Night life</p>
                </div>
                <div className="flex justify-center items-center h-[24px] w-[80px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E]  text-center">Public wifi</p>
                </div>
                <div className="flex justify-center items-center h-[24px] w-[80px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E] text-center">Parking lot</p>
                </div>
                <div className="flex justify-center items-center h-[24px] w-[70px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E]  text-center">Security</p>
                </div>
                <div className="flex justify-center items-center h-[24px] w-[110px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E]  text-center">
                    Public transport
                  </p>
                </div>
                <div className="flex justify-center items-center h-[24px] w-[90px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E]  text-center">Bus station</p>
                </div>
                <div className="flex justify-center items-center h-[24px] w-[60px] rounded-[4px] bg-[#FBFAFC] px-[8px] py-[4px] border-[1px] border-[#1E1E1E]">
                  <p className=" text-[#1E1E1E]  text-center">Quiet</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pt-[27.5px]">
              <LeaveReview />

              <button className="flex items-center justify-center border-[1.5px] border-secondary mx-[16px] w-[50%] h-[40px] rounded-[6px]">
                <Image alt="save-icon" src={SaveIcon} />
              </button>
              <button className=" flex items-center justify-center w-[50%] h-[40px] border-secondary p-4 rounded-[6px]">
                <Image alt="share-icon" src={ShareIcon} />
              </button>
            </div>

            <div className="mt-[16px] flex gap-[8px]">
              <Image src={Frame1} alt="fram1" />
              <div className=" flex flex-col gap-[8px]">
                <Image src={Frame2} alt="fram2" />
                <Image src={Frame3} alt="fram3" />
              </div>
            </div>
            <div className="mt-[16px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[14px] leading-[16.1px] gap-[8px]">
                  <Image src={UserImg} alt="user" />
                  <p className="text-[#1E1E1E]  font-normal ">James T.</p>
                  <p className="text-[#1E1E1E99]">5 Months ago</p>
                </div>

                <div className="flex items-center  text-[14px] px-[24px] leading-[16.1px]">
                  <Image src={Star} alt="user" />

                  <p className="text-[#1E1E1E]">4.0</p>
                </div>
              </div>
              <div className="pt-[8px] font-normal w-11/12 lg:w-full sm:w-full">
                <p className="text-[16px] leading-[24px] text-justify">
                  There is no stable electricity. The roads are fairly good and
                  there is a sense of community. The drainage system is poor and
                  most residents litter their surroundings. There are several
                  grocery stores and Supermarkets.
                </p>
              </div>
              <div className="pt-[8px]">
                <Image src={HandIcon} alt="handicon" />
              </div>
            </div>

            <div className="mt-[16px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[14px] leading-[16.1px] gap-[8px]">
                  <Image src={UserImg} alt="user" />
                  <p className="text-[#1E1E1E]  font-normal ">James T.</p>
                  <p className="text-[#1E1E1E99]">5 Months ago</p>
                </div>

                <div className="flex items-center  text-[14px] px-[24px] leading-[16.1px]">
                  <Image src={Star} alt="user" />

                  <p className="text-[#1E1E1E]">4.0</p>
                </div>
              </div>
              <div className="pt-[8px] font-normal w-11/12 lg:w-full sm:w-full">
                <p className="text-[16px] leading-[24px] text-justify">
                  There is no stable electricity. The roads are fairly good and
                  there is a sense of community. The drainage system is poor and
                  most residents litter their surroundings. There are several
                  grocery stores and Supermarkets.
                </p>
              </div>
              <div className="pt-[8px]">
                <Image src={HandIcon} alt="handicon" />
              </div>
            </div>

            <div className="mt-[16px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[14px] leading-[16.1px] gap-[8px]">
                  <Image src={UserImg} alt="user" />
                  <p className="text-[#1E1E1E]  font-normal ">James T.</p>
                  <p className="text-[#1E1E1E99]">5 Months ago</p>
                </div>

                <div className="flex items-center  px-[24px] text-[14px] leading-[16.1px]">
                  <Image src={Star} alt="user" />

                  <p className="text-[#1E1E1E]">4.0</p>
                </div>
              </div>
              <div className="pt-[8px] font-normal w-11/12 lg:w-full sm:w-full">
                <p className="text-[16px] leading-[24px] text-justify">
                  There is no stable electricity. The roads are fairly good and
                  there is a sense of community. The drainage system is poor and
                  most residents litter their surroundings. There are several
                  grocery stores and Supermarkets.
                </p>
              </div>
              <div className="pt-[8px]">
                <Image src={HandIcon} alt="handicon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
