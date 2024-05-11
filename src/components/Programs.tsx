import bluePick from "../assets/images/blue_pick.png";
import programs from "../assets/images/programs.png";
import curl from "../assets/images/curl.png";
import yellowPick from "../assets/images/yellow_pick.png";
import { LearningObj } from "../utils/LearningObj";

const Programs = () => {
  return (
    <div className="my-16">
      <div className="head text-center text-3xl relative flex justify-center">
        <img src={bluePick} alt="pick" height={100} width={100} />
        <div className="head absolute top-10 uppercase">Welmont Programs</div>
      </div>
      <div className="pt-14 relative m-auto w-1/2">
        <img src={programs} alt="image" height={900} width={700} />
        <div className="absolute -bottom-24">
          <img src={curl} alt="image" height={125} width={190} />
        </div>
      </div>
      <div className="bg-[#f1f2f2] pt-20 bg-[url('./assets/images/sideDesign.png')] bg-no-repeat bg-contain bg-bottom rounded-t-[300px] mx-16 h-[700px] mt-24">
        <div className="head text-center text-3xl relative flex justify-center">
          <img src={yellowPick} alt="pick" height={100} width={100} />
          <div className="head absolute top-5 uppercase">
            LEARNINGS DELIVERED:
            <br />
            THE WAY THEY LOVE IT!
          </div>
        </div>
        <div className="flex items-center justify-center gap-12 pt-14">
          {LearningObj?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  height={120}
                  width={120}
                />
              </div>
              <div className="max-w-44">
                <div className="uppercase">
                  <span className="text-xs">{item.title}</span>
                  <span className="block text-lg text-[#ef5b71]">
                    {item.subtitle}
                  </span>
                </div>
                <div className="text-xs leading-4">{item.shortDes}</div>
                <div className="pt-2 text-sm">{item.longDes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
