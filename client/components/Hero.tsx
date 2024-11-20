import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-start px-5 pt-20 pb-20 w-full min-h-screen bg-blue-100 md:px-20 md:pt-36 md:pb-64">
      {/* Background Illustration */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b74d622e922b559f420c53f596396d24857f45aabb15319edf29776ae995dcdd?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345"
          alt="Background illustration for the hero section"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Heading */}
      <h1 className="relative text-4xl font-bold leading-tight text-blue-950 max-w-[620px] md:text-6xl md:leading-[78px]">
        Catch Fun While <br /> Learning!
      </h1>

      {/* Subtext */}
      <p className="relative mt-4 text-xl font-bold text-white md:text-3xl">
        Test your skills | Win big
      </p>

      {/* Get Started Button */}
      <button className="relative mt-10 px-6 py-3 text-lg font-bold bg-amber-500 text-emerald-950 rounded-md shadow-md hover:bg-amber-600 active:bg-amber-700 md:text-xl">
        Get Started
      </button>

      {/* Achievement Badges */}
      <div className="flex gap-6 items-end mt-8 md:mt-12">
        <div className="relative w-24 h-16 md:w-36 md:h-24">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39a515d453248451bdcbde6b0f32b43ddb32b63b4be915664af742f5e3d984a0?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345"
            alt="Achievement badge 1"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-24 h-16 md:w-36 md:h-24">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18b758eb33fa203f0e2895019427ce39c762336a683432260e9d19afba543dca?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345"
            alt="Achievement badge 2"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
