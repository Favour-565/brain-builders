import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[559px] flex flex-col items-start justify-start gap-[54px] max-w-full text-left text-[32px] text-[#fff] font-[Nexa] mq400:gap-[27px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[27px] box-border gap-[14px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[832px] w-[1341px] absolute !m-[0] bottom-[-590px] left-[-620px] object-cover z-[1]"
            alt=""
            src="/background-shape1@2x.png"
          />
          <h1 className="m-[0px] flex-1 relative text-inherit leading-[122.2%] font-normal font-[inherit] inline-block max-w-full z-[2] mq361:text-[19px] mq361:leading-[23px] mq370:text-[26px] mq370:leading-[31px]">
            <p className="m-[0px]">Empower Yourself for a</p>
            <p className="m-[0px] text-[#ff3a2a]">Brighter Tomorrrow</p>
          </h1>
        </div>
        <div className="w-[527px] relative text-[14px] leading-[122.2%] font-extrabold font-[Nexa] inline-block max-w-full z-[2]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
        <h1 className="m-[0px] self-stretch relative text-inherit leading-[122.2%] font-normal font-[inherit] z-[2] mq361:text-[19px] mq361:leading-[23px] mq370:text-[26px] mq370:leading-[31px]">
          <p className="m-[0px]">
            <span className="text-[#ffc43e]">Education</span>
            <span>{` takes you as far `}</span>
          </p>
          <p className="m-[0px]">
            <span>as you are willing to go...</span>
            <span className="text-[#002724]">.</span>
          </p>
        </h1>
        <div className="w-[527px] relative text-[14px] leading-[122.2%] font-extrabold font-[Nexa] inline-block max-w-full z-[2]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-[0px] px-[21px] box-border max-w-full">
        <div className="flex flex-row items-end justify-start gap-[22px] mq361:flex-wrap">
          <img
            className="self-stretch w-[137px] relative rounded-[7px] max-h-full object-cover min-h-[43px] z-[2]"
            alt=""
            src="/image-1-1@2x.png"
          />
          <img
            className="h-[41px] w-[137px] relative rounded-[7px] object-cover z-[2]"
            alt=""
            src="/image-2-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
