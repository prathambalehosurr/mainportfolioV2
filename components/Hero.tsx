"use client";
import React, { useRef } from "react";
import Tech from "./Tech";
import Avatar from "./Avatar";
import Socials from "./Socials";
import MessageCircleIcon from "./ui/message-circle-icon";
import { Button } from "./ui/button";
import type { AnimatedIconHandle } from "./ui/types";

const Hero = () => {
  const messageIconRef = useRef<AnimatedIconHandle>(null);
  return (
    <div className="relative mb-15 sm:px-10 sm:w-230">
      <Avatar />
      <div className="">
        <div>
          <p className=" font-serif text-5xl sm:text-7xl xl:text-8xl tracking-tight text-neutral-900 dark:text-neutral-50 leading-[0.9]  font-bold flex flex-wrap items-start gap-2 md:gap-4 mt-3 sm:hidden flex-col">
            Hi, I&apos;m Pratham 
            <span className="text-neutral-400 text-3xl">
              Full Stack Engineer & AI Builder
            </span>
          </p>
          <div className="text-7xl leading-tighter  font-serif  max-sm:hidden fleflex-col gap-5 mt-3 items-start ">
            <h1 className="font-extralight">
              Hi, I&apos;m{" "}
              <span className="text-neutral-900 dark:text-neutral-50 font-bold">
                Pratham
              </span>
            </h1>
            <span className="text-neutral-400 font-serif tracking-tighter text-5xl mb-1 ">
              Full Stack Engineer <span className="font-bold mx-2">&</span> AI
              Builder
            </span>
          </div>

          <div className="font-sans text-neutral-400 sm:text-lg text-[14px] tracking-wide mt-2">
            <p className="mb-3 text-neutral-600 dark:text-neutral-300 sm:text-xl">
              I build AI-powered web apps that actually ship.
            </p>
            <span className="flex items-center sm:gap-x-2 flex-wrap ">
              <span className="truncate">
                I work with
              </span>
              <Tech
                logo="/icons/ts.svg"
                name="Typescript"
                className="w-30 max-sm:scale-85 rounded-sm "
              />
              ,
              <br />
              <Tech
                logo="/icons/Bun.svg"
                name="Bun"
                className=" w-19 max-sm:scale-85 rounded-sm -ml-1"
              />{" "}
              ,
              <Tech
                logo="/icons/nextjslight.svg"
                name="Next.js"
                className=" w-22 max-sm:scale-85 rounded-sm hidden dark:flex"
              />{" "}
              <Tech
                logo="/icons/nextjsdark.svg"
                name="Next.js"
                className=" w-22 max-sm:scale-85 rounded-sm dark:hidden"
              />{" "}
              ,<br />
              <Tech
                logo="/icons/python.svg"
                name="Python"
                className=" w-22 max-sm:scale-85 rounded-sm"
              />
              ,
              <Tech
                logo="/icons/postgres.svg"
                name="PostgreSQL"
                className=" w-30 max-sm:scale-85 rounded-sm"
              />
              <span className="flex items-center gap-2 mt-1 mb-1 ">
                to build fast, reliable, AI-ready products.
              </span>
            </span>
            <p className="mt-3 text-[14px] sm:text-[15px] leading-7">
              I&apos;m Pratham, a Full Stack and AI Developer based in
              Davanagere, Karnataka, and a final-year ISE student at Jain
              Institute of Technology.
            </p>
            <p className="text-[14px] sm:text-[15px] leading-7">
              I don&apos;t wait to graduate to do real work. I turn ideas into
              shipped products and spend weekends building the things most
              people only talk about starting.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 font-sans mt-5">
        <a href="/contact">
          <Button
            variant="outline"
            className="gap-2"
            onMouseEnter={() => messageIconRef.current?.startAnimation()}
            onMouseLeave={() => messageIconRef.current?.stopAnimation()}
          >
            Get in touch
            <MessageCircleIcon ref={messageIconRef} size={20} />
          </Button>
        </a>
      </div>
      <Socials />
      <span className="flex items-center mt-20">
        <span className="h-px flex-1 bg-linear-to-r from-transparent to-neutral-400"></span>
        <span className="h-px flex-1 bg-linear-to-l from-transparent to-neutral-400"></span>
      </span>
    </div>
  );
};

export default Hero;
