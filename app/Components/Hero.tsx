import Image from "next/image";
import ReviewImg from "../../public/Images/Frame 5916.png";
import Search from "./Search";

const Hero = () => {
  return (
    <>
      <div className="lg:flex justify-between lg:px-[100px]">
        <div className="pt-[179px] ">
          <div className=" lg:w-[557px] ">
            <h1 className="font-[inter] text-[#1E1E1E] text-[40px] font-bold leading-[48px] ">
              Find a place you will love to live!
            </h1>
            <p className="pt-[16px] text-[#1E1E1E] font-[inter] text-[16px] leading-[25.6px] font-normal ">
              See through the lenses of people who have lived or visited the
              neighbourhood you might have in mind.
            </p>

            <Search />
          </div>
        </div>
        <section className="hidden lg:flex items-center justify-between pl-[40px]">
          <Image src={ReviewImg} alt="img" className="" />
        </section>
      </div>
    </>
  );
};

export default Hero;
