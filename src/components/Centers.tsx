import greenPick from "../assets/images/green_pick.png";
import CenterCard from "./CenterCard";

const Centers = () => {
  return (
    <div className="py-16">
      <div className="head text-center text-3xl relative flex justify-center">
        <img src={greenPick} alt="pick" height={100} width={100} />
        <div className="head absolute top-5 uppercase">
          LEARNINGS CENTERS:
          <br />
          INDOORS AND OUT IN THE OPEN
        </div>
      </div>
      <div className="flex justify-center items-center w-full gap-10 mt-12">
        <div className="grid grid-rows-3 grid-cols-4 gap-2 max-w-[500px]">
          <CenterCard
            title="Activity Room"
            image="bg-[url('./assets/images/activityRoom.png')]"
            size="col-span-2 h-[200px]"
          />
          <CenterCard
            title="Outdoor Play Area"
            image="bg-[url('./assets/images/playArea.png')]"
            size="col-span-2"
          />
          <CenterCard
            title="Pretend & Play System"
            image="bg-[url('./assets/images/pretend.png')]"
          />
          <CenterCard
            title="Library Room"
            image="bg-[url('./assets/images/library.png')]"
            size="col-span-3"
          />

          <CenterCard
            title="Av & dance Room"
            image="bg-[url('./assets/images/danceRoom.png')]"
            size="col-span-2"
          />
          <CenterCard
            title="Art and Craft "
            image="bg-[url('./assets/images/art.png')]"
            size="col-span-2"
          />
        </div>
        <div className="grid grid-rows-2 grid-cols-2 gap-4 relative">
          <CenterCard
            image="bg-[url('./assets/images/play.png')]"
            size="col-span-1 w-[300px] h-[300px] "
          />
          <CenterCard
            image="bg-[url('./assets/images/house.png')]"
            size="col-span-1"
          />
          <CenterCard
            image="bg-[url('./assets/images/sand.png')]"
            size="col-span-1"
          />{" "}
          <CenterCard
            image="bg-[url('./assets/images/anounce.png')]"
            size="col-span-1"
          />
          <div className="uppercase flex flex-col text-center items-center gap-2 justify-center text-white text-sm absolute top-44 left-44 rounded-full w-64 h-64 bg-[#ef5b71]">
            <div>Climbing Walls</div>
            <div className="border-dotted border-t-2 w-20" />
            <div>Telephone Pipes</div>
            <div className="border-dotted border-t-2 w-20" />
            <div>Textured Tiles</div>
            <div className="border-dotted border-t-2 w-20" />
            <div>Specially Designed Play Structure</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centers;
