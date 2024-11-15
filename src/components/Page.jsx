import PropTypes from "prop-types";

const Page = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#fff] overflow-hidden flex flex-col items-start justify-start pt-[92px] pb-[75px] pl-[22px] pr-[20px] box-border relative gap-[98px] max-w-full text-left text-[28px] text-[#fff] font-[Abel] ${className}`}
    >
      <img
        className="w-[476px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-32px] max-h-full object-cover"
        alt=""
        src="/home-page-mobile-2-1@2x.png"
      />
      <div className="w-[361px] flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[18px] box-border gap-[69px] max-w-full mq361:gap-[34px]">
        <div className="relative leading-[122.2%] z-[1]">
          <p className="m-[0px]">Empower Yourself for a</p>
          <p className="m-[0px] text-[40px] text-[#ffc43e]">
            Brighter Tomorrrow
          </p>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end text-justify text-[14px]">
          <h2 className="m-[0px] w-[306px] relative text-inherit leading-[122.2%] font-normal font-[inherit] inline-block shrink-0 z-[1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[37px] text-[40px] text-[#ffc43e] mq388:gap-[18px]">
        <div className="self-stretch relative leading-[122.2%] z-[1]">
          <p className="m-[0px]">Education</p>
          <p className="m-[0px] text-[28px] text-[#fff]">
            <span>
              <span>{`takes you as far `}</span>
            </span>
          </p>
          <p className="m-[0px]">
            <span>
              <span>as you are willing to go...</span>
              <span className="text-[#002724]">.</span>
            </span>
          </p>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-[0px] px-[20px] text-justify text-[14px] text-[#fff]">
          <h2 className="m-[0px] w-[313px] relative text-inherit leading-[122.2%] font-normal font-[inherit] inline-block shrink-0 z-[1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </h2>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-[0px] pl-[0px] pr-[2px]">
        <div className="flex flex-row items-end justify-start gap-[14px] z-[1]">
          <img
            className="self-stretch w-[74px] relative rounded-[4px] max-h-full object-cover min-h-[23px]"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <img
            className="h-[22px] w-[74px] relative rounded-[4px] object-cover"
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;
