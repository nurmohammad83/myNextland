'use client'
import React from "react";

const CTA = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-2 sm:flex-row sm:w-[70%] mx-auto justify-between items-center border border-green-500 py-10 px-5 rounded-xl">
        <h1 className="text-3xl  text-white font-poppins text-center font-semibold">
          Start your free trial today.
        </h1>
        <a
          class="inline-block rounded-full bg-gradient-to-r from-green-400 via-green-600 to-green-800 hover:bg-gradient-to-l hover:from-green-300 hover:via-green-600 hover:to-green-800 p-[2px] text-white focus:outline-none focus:ring active:text-opacity-75"
          href="/download"
        >
          <span class="block rounded-full px-8 py-3 text-sm font-medium bg-transparent">
            Get Started
          </span>
        </a>
      </div>
    </div>
  );
};

export default CTA;
