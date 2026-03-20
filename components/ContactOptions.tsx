"use client";

import React, { useRef } from "react";
import SendIcon from "./ui/send-icon";
import PhoneVolume from "./ui/phone-volume";
import TwitterXIcon from "./ui/twitter-x-icon";
import { Button } from "./ui/button";
import { AnimatedIconHandle } from "./ui/types";

type classNameProp = {
  className?: string;
};

export function ContactOptions({ className = "" }: classNameProp) {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className={`flex flex-col gap-4 ${className}`}>
        <a
          href="mailto:prathambalehosur.work@gmail.com"
          className="group flex items-center justify-between p-4 bg-neutral-100 dark:bg-neutral-900 rounded-xl transition-all duration-300 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-neutral-800 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <SendIcon className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
            </div>
            <div>
              <h4 className="font-semibold font-sans text-neutral-900 dark:text-neutral-50 mb-0.5">
                Email Me
              </h4>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-sans">
                prathambalehosur.work@gmail.com
              </span>
            </div>
          </div>
          <div className="text-neutral-400 group-hover:translate-x-1 transition-transform group-hover:text-black dark:group-hover:text-white">
            →
          </div>
        </a>

        <a
          href="tel:+918861377060"
          className="group flex items-center justify-between p-4 bg-neutral-100 dark:bg-neutral-900 rounded-xl transition-all duration-300 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white dark:bg-neutral-800 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-sm flex items-center justify-center font-bold relative ">
              <PhoneVolume className="w-5 h-5 text-neutral-900 font-bold dark:text-neutral-100 absolute top-1.5" />
            </div>
            <div>
              <h4 className="font-semibold font-sans text-neutral-900 dark:text-neutral-50 mb-0.5">
                Call Me
              </h4>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-sans">
                +91 88613 77060
              </span>
            </div>
          </div>
          <div className="text-neutral-400 group-hover:translate-x-1 transition-transform group-hover:text-black dark:group-hover:text-white">
            →
          </div>
        </a>

        <a
          href="https://x.com/prathamspiky"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between p-4 bg-neutral-100 dark:bg-neutral-900 rounded-xl transition-all duration-300 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-white dark:bg-neutral-800 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <TwitterXIcon className="size-5" />
            </div>
            <div>
              <h4 className="font-semibold font-sans text-neutral-900 dark:text-neutral-50 mb-0.5">
                DM on X
              </h4>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 font-sans">
                @prathamspiky
              </span>
            </div>
          </div>
          <div className="text-neutral-400 group-hover:translate-x-1 transition-transform group-hover:text-black dark:group-hover:text-white">
            →
          </div>
        </a>
      </div>
    </div>
  );
}

export const ContactFooter = () => {
  const twitterIconRef = useRef<AnimatedIconHandle>(null);
  const phoneIconRef = useRef<AnimatedIconHandle>(null);

  return (
    <div className="w-210 flex flex-col  gap-4 mt-10 mb-10 mx-auto font-serif font-black text-3xl text-center">
      Want to build something together?{" "}
      <div className="flex gap-5 items-center justify-center mt-5">
        <a
          href="mailto:prathambalehosur.work@gmail.com"
        >
          <Button
            className="w-fit px-7 py-5 text-lg font-black tracking-wider flex gap-2 items-center"
            onMouseEnter={() => twitterIconRef.current?.startAnimation()}
            onMouseLeave={() => twitterIconRef.current?.stopAnimation()}
          >
            Email me <SendIcon className="w-5 h-5" />
          </Button>
        </a>
        <a
          href="https://x.com/prathamspiky"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="w-fit px-7 py-5 text-lg font-black tracking-wider flex gap-2 items-center"
            onMouseEnter={() => phoneIconRef.current?.startAnimation()}
            onMouseLeave={() => phoneIconRef.current?.stopAnimation()}
          >
            DM me on{" "}
            <TwitterXIcon ref={phoneIconRef} className="w-6 h-6" />
          </Button>
        </a>
      </div>
    </div>
  );
};

