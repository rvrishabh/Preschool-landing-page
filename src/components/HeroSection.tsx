import babyButterfly from "../assets/images/baby-butterfly.png";
import heroText from "../assets/images/hero-text.png";

const HeroSection = () => {
  return (
    <div className="bg-[url('./assets/images/hero-top.png')] bg-right-top bg-no-repeat bg-auto">
      <div className="bg-[url('./assets/images/hero-layer.png')] bg-bottom bg-no-repeat bg-contain h-[90vh]">
        <div className="bg-[url('./assets/images/hero-design.png')] bg-bottom bg-no-repeat bg-contain h-[90vh]">
          <div className="pl-36 pt-[6%] flex items-center gap-8">
            <div>
              <img
                src={babyButterfly}
                alt="hero-image"
                height={688}
                width={600}
                
              />
            </div>
            <div>
              <img src={heroText} alt="hero-text" width={250} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
