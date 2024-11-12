"use client";

import { Button } from "@/components/Button";


export const About = () => {
  
  return (
    <section className="flex items-center justify-center min-h-screen py-24 px-5  overflow-x-clip">
      <div className="container mx-auto">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80 my-10">
          <div className="col-span-2 text-center">
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
              About Us.
            </h2>
            <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6 text-justify">
              <p>
              At Bright Scholars, we believe that every student has the potential to shine. Our mission is to foster a dynamic learning environment where curiosity is ignited and intellect is nurtured. With a team of dedicated educators and innovative programs, we provide students with the tools they need to excel academically and personally.
              </p>
              <p>
              Our comprehensive curriculum is designed to inspire lifelong learners who are prepared for the challenges of tomorrow.
              </p>
            </div>
            <div className="flex gap-8 mt-12 justify-center">
              <Button>More About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
