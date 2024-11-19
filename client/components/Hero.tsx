import * as React from 'react';

export const Hero = () => {
  return (
    <section className="flex relative flex-col items-start px-20 pt-36 pb-64 -mt-3.5 w-full min-h-[774px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b74d622e922b559f420c53f596396d24857f45aabb15319edf29776ae995dcdd?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <h1 className="relative text-6xl font-bold leading-[78px] text-blue-950 w-[620px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Catch Fun While <br /> Learning!
      </h1>
      <p className="relative text-3xl font-bold leading-none text-white">
        Test your skills | Win big
      </p>
      <button className="overflow-hidden relative gap-2.5 px-4 py-px mt-11 text-xl font-bold bg-amber-500 rounded-md h-[30px] shadow-[0px_3px_4px_rgba(0,0,0,0.25)] text-emerald-950 max-md:mt-10 max-md:ml-2.5">
        Get Started
      </button>
      <div className="flex relative gap-6 items-end mt-9 mb-0 min-h-[58px] max-md:mb-2.5 max-md:ml-1">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/39a515d453248451bdcbde6b0f32b43ddb32b63b4be915664af742f5e3d984a0?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345"
          alt="Achievement badge"
          className="object-contain shrink-0 rounded-lg aspect-[3.19] w-[150px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/18b758eb33fa203f0e2895019427ce39c762336a683432260e9d19afba543dca?placeholderIfAbsent=true&apiKey=442354fd1b8446e3aaa0dbfefef21345"
          alt="Achievement badge"
          className="object-contain shrink-0 rounded-lg aspect-[3.19] w-[150px]"
        />
      </div>
    </section>
  );
};
