import { assets } from "../assets/assets";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <img
          src={assets.loader}
          alt="loader-logo"
          className="w-12 h-12 rounded-full animate-spin"
        />
      </div>
    </div>
  );
};

export default Loading;
