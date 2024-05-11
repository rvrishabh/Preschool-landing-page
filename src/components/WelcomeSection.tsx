import pinkPick from "../assets/images/pink_pick.png";

const WelcomeSection = () => {
  return (
    <div className="py-12">
      <div className="head text-center text-3xl relative flex justify-center">
        <img src={pinkPick} alt="pick" height={100} width={100} />
        <div className="head absolute top-10 uppercase">
          Welcome to Welmont School
        </div>
      </div>
      <div className="py-14 flex items-center justify-center ">
        <div className="min-w-[500px] ml-[200px]">
          <div>
            Welcome to Welmont Preschool, where each new day <br /> heralds a
            journey of exploration with fun & play.
          </div>
          <div className="pt-2">
            We, at Welmont, understand the crucial importance of <br /> the
            correct stimulation required during the early years to <br />{" "}
            enhance a child's development intellectually, physically, <br />{" "}
            emotionally and socially, to lay down a solid foundation <br /> for
            your child to maximize all future learning abilities. <br /> <br />{" "}
            As per UNICEF, a child's brain develops fastest in the earliest{" "}
            <br /> years of life. These initial experiences are crucial as they{" "}
            <br /> are the building blocks for the development of the brain{" "}
            <br /> architecture for all the learning to come in the years ahead.
          </div>
          <div className="bg-[#6ac4d0] text-base rounded-full flex justify-center items-center w-36 h-10 mt-8">
            Read More
          </div>
        </div>
        <div className="bg-[#ea556f] h-[400px] w-full rounded-l-full flex justify-center items-center">
          <div>
            <div className="border border-t-4 w-1/3 mx-auto mb-4" />
            <div className="text-center w-[300px] italic text-xl text-white">
              In the first few years of life, more than one million neural
              connections are formed each second in the earliest phase of life–
              a pace that never repeats ever again
            </div>
            <div className="text-center text-white head text-sm pt-4">
              UNICEF’s Global Report on <br /> Early Childhood Development, 2017
            </div>
            <div className="border border-t-4 w-1/3 mx-auto mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
