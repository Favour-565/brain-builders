import PropTypes from "prop-types";

const FrameComponent16 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0px] pb-[45px] pl-[1px] pr-[2px] box-border max-w-full text-center text-[28px] text-[#0b2239] font-[Abel] ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[17px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[77px] pr-[75px] mq389:pl-[20px] mq389:pr-[20px] mq389:box-border">
          <h1 className="m-[0px] flex-1 relative text-inherit tracking-[0.01em] font-normal font-[inherit]">
            Meet the Team
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end pt-[0px] pb-[18px] pl-[2px] pr-[3px] box-border max-w-full text-[12px] text-[#4a4e4f]">
          <div className="flex-1 flex flex-col items-end justify-start gap-[21px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[7px] pr-[6px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq369:flex-wrap">
                  <img
                    className="h-[88px] w-[90px] relative rounded-[8px] object-cover min-h-[88px]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-62@2x.png"
                  />
                  <img
                    className="h-[88px] w-[90px] relative rounded-[8px] object-cover min-h-[88px]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-62-1@2x.png"
                  />
                  <img
                    className="h-[88px] w-[90px] relative rounded-[8px] object-contain min-h-[88px]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-62-2@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq372:flex-wrap">
                  <h3 className="m-[0px] w-[91px] relative text-inherit leading-[139%] inline-block shrink-0 font-[inherit]">
                    <p className="m-[0px]">Allen David</p>
                    <p className="m-[0px]">
                      <b>Creative Head</b>
                    </p>
                  </h3>
                  <h3 className="m-[0px] w-[91px] relative text-inherit leading-[139%] inline-block shrink-0 font-[inherit]">
                    <p className="m-[0px]">Sofia James</p>
                    <p className="m-[0px]">
                      <b>Team Head</b>
                    </p>
                  </h3>
                  <h3 className="m-[0px] w-[91px] relative text-inherit leading-[139%] inline-block shrink-0 font-[inherit]">
                    <p className="m-[0px]">Usman Dele</p>
                    <p className="m-[0px]">
                      <b>ICT Head</b>
                    </p>
                  </h3>
                </div>
              </div>
            </div>
            <h2 className="m-[0px] self-stretch relative text-[14px] leading-[150%] font-normal font-[inherit] text-justify">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco `}</h2>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-[24px]">
          <div className="self-stretch flex flex-row items-start justify-center py-[0px] pl-[20px] pr-[26px]">
            <h1 className="m-[0px] w-[193px] relative text-inherit tracking-[0.01em] font-normal font-[inherit] inline-block shrink-0">
              Contact us
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start [row-gap:20px] text-left text-[10px] text-[#4a4e4f] font-['Satoshi_Variable']">
            <div className="flex-1 flex flex-col items-start justify-start pt-[2.9px] px-[0px] pb-[0px] box-border min-w-[101px]">
              <div className="self-stretch h-[67.1px] relative leading-[11.33px] inline-block shrink-0">
                <p className="m-[0px]">
                  <span className="font-medium font-['Satoshi_Variable']">{`A Product of `}</span>
                  <b className="font-[Abel] whitespace-pre-wrap">
                    Martad Education and Skills Development Ltd
                  </b>
                  <span className="font-medium">.</span>
                </p>
                <p className="m-[0px] font-medium">&nbsp;</p>
                <p className="m-[0px] font-medium">
                  3b Alegbe Close, Mende, Maryland, Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[2.9px] pb-[0px] pl-[0px] pr-[14px] font-[Abel]">
              <div className="h-[66.9px] relative leading-[11.33px] inline-block shrink-0 z-[1]">
                <p className="m-[0px]">
                  <b>Contact us</b>
                </p>
                <p className="m-[0px] font-medium font-['Satoshi_Variable']">
                  &nbsp;
                </p>
                <p className="m-[0px]">
                  <b>+234 704 330 3000</b>
                </p>
                <p className="m-[0px]">
                  <b>_234 809 293 3000</b>
                </p>
                <p className="m-[0px] font-medium font-['Satoshi_Variable']">
                  info@examprimed.com
                </p>
              </div>
            </div>
            <div className="h-[79px] w-[110px] relative font-medium inline-block shrink-0">
              <p className="m-[0px]">Policy</p>
              <p className="m-[0px]">Instruction</p>
              <p className="m-[0px]">Terms and Conditions</p>
              <p className="m-[0px]">Comapany</p>
              <p className="m-[0px]">About us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;
