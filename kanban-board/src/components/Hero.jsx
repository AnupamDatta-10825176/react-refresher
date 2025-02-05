import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col border border-gray-400">
        {/* Hero left */}
        <div className="w-full flex items-center justify-center py-10">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium text-sm">Our Best Sellers</p>
            </div>
            <h1 className="text-3xl lg:text-5xl leading-relaxed">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">Shop Now</p>
              <p className="w-11 h-[2px] bg-[#414141]"></p>
            </div>
          </div>
        </div>
      </section>
      {/* fresh arrival section */}
      <section className="flex flex-col border border-gray-400 my-2 bg-[#f5f5f5]">
        <div className="flex items-center justify-around space-x-4 py-2">
          <img src={assets.freshArrival} alt="image1" className="w-60 h-60" />
          <img src={assets.freshArrival2} alt="img2" className="w-60 h-60" />
          <img src={assets.freshArrival3} alt="img3" className="w-60 h-60" />
        </div>
      </section>
    </>
  );
};

export default Hero;
