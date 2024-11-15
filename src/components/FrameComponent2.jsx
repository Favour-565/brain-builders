import GetStarted from "./GetStarted";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0px] pb-[141px] pl-[20px] pr-[482px] box-border max-w-full text-left text-[64px] text-[#0b2167] font-[Nexa] lg:pr-[241px] lg:box-border mq361:pr-[20px] mq361:box-border mq400:pr-[120px] mq400:pb-[92px] mq400:box-border border border-red-500 ${className} `}
    >
      <div className="w-[620px] border border-red-500 flex flex-col items-start justify-start gap-[37px] max-w-full mq400:gap-[18px]">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <h1 className="m-[0px] self-stretch relative text-inherit leading-[122.2%] font-normal font-[inherit] z-[4] mq361:text-[38px] mq361:leading-[47px] mq370:text-[51px] mq370:leading-[63px]">
            <p className="m-[0px]">Catch Fun While</p>
            <p className="m-[0px]">Learning!</p>
          </h1>
          <h1 className="m-[0px] w-[519px] relative text-[32px] leading-[122.2%] font-normal font-[inherit] text-[#fff] whitespace-pre-wrap inline-block max-w-full z-[5] mq361:text-[19px] mq361:leading-[23px] mq370:text-[26px] mq370:leading-[31px]">
            Test your skills | Win big
          </h1>
        </div>
        <div className="w-[166px] flex flex-row items-start justify-start py-[0px] px-[9px] box-border text-[20px] text-[#002724]">
          <GetStarted />
        </div>
        <div className="flex flex-row items-start justify-start py-[0px] px-[3px] box-border max-w-full">
          <div className="flex flex-row items-end justify-start pt-[11px] px-[0px] pb-[0px] box-border gap-[24px] max-w-full z-[4] mq361:flex-wrap">
            <img
              className="self-stretch w-[150px] relative rounded-[7px] max-h-full object-cover min-h-[47px]"
              loading="lazy"
              alt=""
              src="/image-11@2x.png"
            />
            <img
              className="h-[45px] w-[150px] relative rounded-[7px] object-cover"
              loading="lazy"
              alt=""
              src="/image-22@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
