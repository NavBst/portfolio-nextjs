import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <section className="py-20 z-50" id="projects">
      <h1 className="text-3xl font-bold text-center mt-10">
        A small selection of{" "}
        <span className="text-purple-200">recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 md:gap-x-16 lg:gap-x-20 gap-x-10 gap-y-10 md:gap-y-0 lg:gap-y-40 mt-5">
        {projects.map(({ id, title, des, img, iconLists, link }) => {
          return (
            <div
              key={id}
              className="h-[30rem] flex items-center justify-center sm:w-96 w-[80vw] "
            >
              <PinContainer title={title} href={link} className={""}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[22vh] lg:h-[33vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg.png" className="w-fit h-full" />
                  </div>
                  <img src={img} alt="" className="z-10 absolute bottom-0 left-0 w-full h-full" />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-lg my-4 lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => {
                      return (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="lg:text-xl md:text-xs text-sm text-purple">check live site</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9"/>
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentProjects;
