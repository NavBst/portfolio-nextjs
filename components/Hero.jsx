import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-23 left-32 md:left-full d:top-10 h-screen "
          fill="purple"
        />
        {/* <Spotlight
          className="top-22 left-96 md:left-96 md:top-10 h-screen rotate-180"
          fill="blue"
        /> */}
        <Spotlight
          className="top-22 left-96 md:left-36 md:bottom-52 h-screen rotate-180"
          fill="blue"
        />
      </div>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex justify-center relative mt-10 mb-20 md:mt-8 md:mb-20  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]  flex flex-col justify-center items-center">
          <h3 className="">Web Magic with Next.js</h3>
          <TextGenerateEffect
            words={"Transforming visions into engaging user Journeys"}
            className={"text-center text-[40px] md:text-5xl lg:text-6xl"}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi, I&apos;m Navneet, a React.js and Next.js Developer.
          </p>
          <a href="#about">
            <MagicButton title={'Show my work'}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
