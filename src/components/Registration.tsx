import bluePick from "../assets/images/blue_pick.png";
import { AgeObj, EssentialObj, ParentObj } from "../utils/LearningObj";

const Registration = () => {
  return (
    <div className="py-16">
      <div className="head text-center text-3xl relative flex justify-center">
        <img src={bluePick} alt="pick" height={100} width={100} />
        <div className="head absolute top-10 uppercase">Registration</div>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <div className="flex flex-col items-center gap-4 w-[500px] mt-14">
          <div className="uppercase text-center mb-6 bg-[#ea556f] w-[400px] rounded-full py-3">
            AGE GROUP (AS OF 1ST JAN)
          </div>
          <div className="flex flex-col gap-4 w-full">
            {AgeObj?.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between pr-4">
                  <div className="text-sm">{item.name}</div>
                  <div className="text-sm">{item.age}</div>
                </div>
                <div className="border-dotted border-t-2 border-black" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-[500px] mt-14">
          <div className="uppercase text-center mb-6 bg-[#ea556f] w-[400px] rounded-full py-3">
            Essential Criteria
          </div>
          <div className="flex flex-col gap-2 w-full">
            {EssentialObj?.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="text-[26px] opacity-50">{index + 1}</div>
                  <div className="text-sm">{item.name}</div>
                </div>
                <div className="border-dotted border-t-2 border-black" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-[500px] mt-14">
          <div className="uppercase text-center mb-6 bg-[#ea556f] w-[400px] rounded-full py-3">
            Parent Orientation Session
          </div>
          <div className="flex flex-col gap-2 w-full">
            {ParentObj?.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="text-[26px] opacity-50">{index + 1}</div>
                  <div className="text-sm">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
