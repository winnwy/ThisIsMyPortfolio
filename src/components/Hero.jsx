import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="flex items-center justify-center border-b border-neutral-900 pb-10 lg:mb-35">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="pb-6 text-6xl font-light tracking-tight lg:mt-16 lg:text-7xl">
          Hey, I’m <span className="text-purple-400">Wenying!</span>
        </h1>
        <span className="bg-gradient-to-r from-teal-300 via-purple-400 to-pink-300 bg-clip-text text-transparent text-4xl font-medium italic">
          I build cool things on the web ✨
        </span>
        <p className="my-4 max-w-xl py-6 text-lg font-light tracking-tight leading-relaxed">
          {HERO_CONTENT}
        </p>
      </div>
    </div>
  );
};

export default Hero;