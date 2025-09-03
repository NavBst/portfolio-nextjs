import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <section className="py-10 z-50" id="clients">
      <h1 className="text-3xl font-bold text-center mt-1">
        My{" "}
        <span className="text-purple-200">Work Experience</span>
      </h1>
      <div className="w-full mt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {
            workExperience.map((card)=>{
                return <Button key={card.id}
                borderRadius="1.5rem" 
                className="flex-1 text-white "
                duration={Math.floor(Math.random() * 1000) + 10000}
                >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 md:p-5 lg:p-10">
                        <img src={card.thumbnail} alt={card.title} className="lg:w-32 md:w-20 w-16" />
                        <div className="lg:ms-5 ">
                            <h1 className="text-start text-xl md:text-2xl font-bold ">
                                {card.title}
                            </h1>
                            <p className="text-start text-white-100 m-3 font-semibold">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            })
        }
      </div>
    </section>
  );
};

export default Experience;
