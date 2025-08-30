import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20">
      <div className="overflow-hidden">
        <Spotlight
          className="-top-20 -left-10 md:-left-22 md:-top-10 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-23 left-32 md:left-full md:top-52 h-screen "
          fill="purple"
        />
        {/* <Spotlight
          className="top-22 left-96 md:left-96 md:top-10 h-screen rotate-180"
          fill="blue"
        /> */}
        <Spotlight
          className="top-22 bottom-12 md:left-12 md:bottom-10 h-screen rotate-180"
          fill="blue"
        />
      </div>
      <div className="relative flex h-screen w-screen items-center justify-center sm:-left-10 -left-5">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:50px_50px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="flex justify-center relative mt-10 mb-20 md:mt-8 md:mb-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]  flex flex-col justify-center items-center">
            <h3 className="">Web Magic with Next.js</h3>
            <TextGenerateEffect
              words={"Transforming visions into engaging User Journeys"}
              className={"text-center text-[40px] md:text-5xl lg:text-6xl"}
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
              Hi, I&apos;m Navneet, a React.js and Next.js Developer.
            </p>
            <a href="#about">
              <MagicButton
                title={"Show my work"}
                icon={<FaLocationArrow />}
                position={"right"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
