import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <section className="py-20 z-50" id="testimonials">
      <h1 className="text-3xl font-bold text-center mt-10">
        Kind words from{" "}
        <span className="text-purple-200">satisfying clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="h-[56vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden pt-10">
          {" "}
          <InfiniteMovingCards
            items={testimonials}
            speed="slow"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
