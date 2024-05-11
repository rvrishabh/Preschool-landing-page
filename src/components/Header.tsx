import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="pt-8">
      <div className="flex gap-14 justify-center items-center">
        <img src={logo} alt="logo" height={200} width={200} />
        <div className="flex gap-10">
          <div className="text-sm">DISCOVER WELMONT</div>
          <div className="text-sm">PROGRAMS</div>
          <div className="text-sm">FACILITIES</div>
          <div className="text-sm">ABOUT US</div>
          <div className="text-sm">BLOG</div>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#6ac4d0] text-white zoom cursor-pointer text-base px-10 py-2 text-center rounded-full flex justify-center items-center">
            Contact Us
          </div>
          <div className="bg-[#96c054] text-white zoom cursor-pointer text-base px-10 py-2 text-center rounded-full flex justify-center items-center">
            Admissions
          </div>
          <div className="bg-[#ef5b71] text-white zoom cursor-pointer text-base px-10 py-2 text-center rounded-full flex justify-center items-center">
            Franchise
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
