import React from "react";
import header from "/public/header.webp";
import Image from "next/image";
import bazaar from "/public/bazaar.webp";
import instyle from "/public/instyle.webp";
import versace from "/public/versace.webp";
import bustle from "/public/bustle.webp";
import Link from "next/link";



const Hero = () => {
  return (
    <section className="container flex flex-col lg:flex-row gap-y-10 px-8 py-6">
      {/* Left Div*/}
      <div className="flex-1 mb-4 ">
        <button
          type="button"
          
          className="py-3 px-6 rounded-lg  text-blue-700  bg-blue-200 saturate-100
           font-bold mb-10  "
        >
          Sale 70%
        </button>

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10 ">
          An Industrial Take
           on <br></br>Streetwear
        </h1>

        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-9 ">
          Anyone can beat you but no one can beat your outfit as long as you{" "}
          
          wear Dine outfits.
        </p>
        <button
          type="button"
          className="text-white 
 bg-zinc-900 py-3.5 px-12 mt-4
  half-rounded mb-auto "
         >
          Start Shopping 
        </button>
        <div className="container max-w-xl h-auto flex py-40 justify-between mb-8 ">

         <div className="max-w-xl h-12"><Image src={bazaar} alt="bazaar"  /> </div>
          <Image src={bustle} alt="bustle"  />
          <Image src={versace} alt="versace"  />
          <Image src={instyle} alt="instyle"  />
        </div>

      </div>
      {/* Left Div*/}
      <div className="">
  <div className="flex bg-orange-100 rounded-full w-auto h-auto">
    <Link href="/app/page"> <Image src={header} alt="header" /> </Link>
  </div>
</div>
    </section>
  );
};

export default Hero;