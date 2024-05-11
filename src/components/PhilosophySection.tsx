import greenPick from "../assets/images/green_pick.png";
import butterfly from "../assets/images/butterfly.png";
import brain from "../assets/images/brain.png";
// import playing from "../assets/images/playing.png";

const PhilosophySection = () => {
  return (
    <div className="py-16">
      <div className="head text-center text-3xl relative flex justify-center">
        <img src={greenPick} alt="pick" height={100} width={100} />
        <div className="head absolute top-5 uppercase">
          METAMORPHOSIS OF CHILD: <br /> THE PHILOSOPHY OF WELMONT
        </div>
      </div>
      <div className="flex items-center justify-center py-10 pt-28 gap-8">
        <img src={brain} alt="diagram" height={200} width={400} />
        <img src={butterfly} alt="diagram" height={200} width={300} />
      </div>
      <div className="text-[#ef5b71] flex justify-center items-center gap-24">
        <div className="head text-center text-lg leading-4">
          <span className="uppercase head text-xl block">The Brain </span>
          The essence of child
        </div>
        <div className="head text-center text-lg leading-4">
          <span className="uppercase head text-xl block">The Wings </span>
          Environment of Learning
        </div>
        <div className="head text-center text-lg leading-4">
          <span className="uppercase head text-xl block">METAMORPHOSIS </span>
          The Transformation of child
        </div>
      </div>
      <div className="flex flex-col items-center pt-32">
        <div className="head text-3xl">
          THE WELMONT WAY OF BLOSSOMING A CHILD
        </div>
        <div className="text-center w-[500px] pt-6">
          During this period of building foundational skills, your child is
          laying the groundwork for the adult they will become.
          WelmontPreschool, through it’s Evolutionary pedagogy and curriculum,
          achieves this process with its beliefs in :
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-2 grid-rows-2 w-[900px] gap-3">
          <div className="bg-[#6ac4d0] text-sm flex items-center justify-center rounded-full h-10">
            Increasing Happiness Quotient of a child
          </div>
          <div className="bg-[#ea556f] text-sm flex items-center justify-center rounded-full h-10">
            Adopting the Virtuous Circle way of teaching
          </div>
          <div className="bg-[#f5a623] text-sm flex items-center justify-center rounded-full h-10">
            Inculcating ‘Sanskars’, the core Indian values in a child
          </div>
          <div className="bg-[#96c054] text-sm flex items-center justify-center rounded-full h-10">
            Building a strong foundation for a child
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col items-center justify-center bg-[url('./assets/images/playing.png')] bg-center bg-no-repeat bg-cover rounded-t-[300px] mx-16 h-[550px] mt-20">
        <div className="text-4xl font-bebas">
          {" "}
          Children learn as they play. <br /> Most importantly, in play, <br />{" "}
          children learn how to learn.
        </div>
        <div className="max-w-[200px] text-center leading-4 pt-3">
          - O. FRED DONALDSON Internationally recognised play specialist
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
