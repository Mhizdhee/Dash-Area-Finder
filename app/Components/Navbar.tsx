import Image from "next/image";
import Logo from "../../public/Images/ic_logo.png";
import Avatar from "../../public/Images/avatar.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex  w-full items-center justify-between py-[22.5px] lg:container lg:px-[100px] lg:py-6 bg-white lg:fixed">
        <div>
          <Image src={Logo} alt="logo " />
        </div>
        <div className="lg:flex items-center justify-between gap-x-3">
          <p className="p-3 hidden lg:flex font-[inter] font-medium text-base text-[#101012] leading-[10px]">
            Welcome!
          </p>

          <Image src={Avatar} alt="avatar" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
