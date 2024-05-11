import footerLogo from "../assets/images/footerLogo.png";

const Footer = () => {
  return (
    <div className="mt-16">
      <div className="bg-[url('./assets/images/cloud.png')] bg-top bg-no-repeat bg-cover">
        <div className="flex justify-center pr-28 pt-16">
          <img src={footerLogo} alt="logo" height={100} width={200} />
        </div>
        <div className=" flex flex-col justify-center items-center bg-[url('./assets/images/footer-pattern.png')] bg-bottom bg-no-repeat bg-contain py-24 ">
          <div className="flex justify-center gap-32 ">
            <div>
              <div className="pb-3 uppercase">Discover Welmont</div>
              <div className="flex flex-col">
                <div>Introduction</div>
                <div>The Philosophy</div>
                <div>The Welmont Way</div>
                <div>Evolutionary Learning</div>
              </div>
            </div>
            <div>
              <div className="pb-3 uppercase">Programs</div>
              <div className="flex flex-col">
                <div>Play Group</div>
                <div>Nursery</div>
                <div>Junior KG</div>
                <div>Senior KG</div>
                <div>Day Care</div>
              </div>
            </div>
            <div>
              <div className="pb-3 uppercase">Facilities</div>
              <div className="flex flex-col">
                <div>Learning Center</div>
                <div>Safety & Hygiene</div>
                <div>Outdoor Play</div>
              </div>
            </div>
            <div>
              <div className="pb-3 uppercase">About Us</div>
              <div className="flex flex-col">
                <div>Vision</div>
                <div>Founders</div>
                <div>Team</div>
              </div>
            </div>
            <div>
              <div className="pb-3 uppercase">Blog</div>
            </div>
          </div>
          <div className="pt-8">
            <input
              className="w-[900px] bg-[#d0d0d0] rounded-lg py-2 ::placeholder text-[#6c6c6c] px-6"
              type="text"
              placeholder="Enter your email to subscribe to our newsletter"
            />
          </div>
          <div className="bg-[#ffcc29] mt-8 cursor-pointer text-base px-10 py-3 border-2 border-blue-400 text-center rounded-full flex justify-center items-center">
            Subscribe
          </div>
          <div className="pt-12 flex justify-between items-center gap-20">
            <div className="flex flex-col items-center gap-8">
              <div className="relative rounded-full bg-[#58c5cf] w-24 h-24">
                <div className="absolute top-[25%] left-[35%] text-5xl">T</div>
              </div>
              <div>info@welmont pre-school.com</div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div className="relative rounded-full bg-[#ea556f] w-24 h-24">
                <div className="absolute top-[25%] left-[35%] text-5xl">E</div>
              </div>
              <div>info@welmont pre-school.com</div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div className="relative rounded-full bg-[#8fc25e] w-24 h-24">
                <div className="absolute top-[25%] left-[35%] text-5xl">A</div>
              </div>
              <div>info@welmont pre-school.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
