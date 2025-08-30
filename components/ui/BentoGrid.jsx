"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GlobeDemo";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:auto-rows-[8rem] md:grid-cols-5 max-w-7xl gap-4 mx-auto py-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("navneetbisht@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border bg-white  transition duration-200 hover:shadow-xl border-white/[0.2] z-20",
        className,
      )}
      style={{
        background:
          "linear-gradient(90deg,rgba(26, 0, 26, 1) 0%, rgba(0, 7, 28, 1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex flex-col items-center justify-center"} `}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center"></div> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-8"
          )}
        >
          <div className="font-sans text-xs font-extralight text-[#c1c2d3] md:text-sm lg:text-base">
            {description}
          </div>
          <div className="font-sans font-bold text-neutral-200 text-lg lg:text-3xl max-w-96 z-10 ">
            {title}
          </div>
        </div>

        {id === 2 && <GlobeDemo />}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute top-[50%] -translate-y-[50%] -right-5 lg:right-3">
            <div className="flex flex-col gap-3 lg:gap-8 ">
              {["React.js", "Next.js", "MySQL"].map((item) => {
                return (
                  <span
                    key={item}
                    className="py-2 lg:py-4 px-3 lg:px-4 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                );
              })}
              <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-8 ">
              <span className="py-4 px-3 lg:py-7 rounded-lg text-center bg-[#10132e]" />
              {["AWS", "Tailwind", "Figma"].map((item) => {
                return (
                  <span
                    key={item}
                    className="py-2 lg:py-4 px-3 lg:px-4 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        )}
        {id === 6 && (
          <div className=" relative">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "XMidYMid slice",
                  },
                }}
              />
            </div>
            <MagicButton
              title={copied ? "Email copied" : "Copy my email"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses={"bg-[#162a31]"}
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>    
  );
};
