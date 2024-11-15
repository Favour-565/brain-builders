import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";

const AppPromotion = ({ className = "" }) => {
  return (
    <div
      className={`w-[1269px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full text-left text-[32px] text-[#0b2239] font-[Nexa] ${className}`}
    >
      <div className="w-[1053px] flex flex-col items-start justify-start gap-[112px] max-w-full mq370:gap-[28px] mq407:gap-[56px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq370:flex-wrap">
          <div className="w-[313px] flex flex-col items-start justify-start pt-[4px] px-[0px] pb-[0px] box-border">
            <div className="self-stretch h-[57px] relative tracking-[0.01em] leading-[32px] inline-block shrink-0 z-[2] mq361:text-[16px] mq361:leading-[26px]">
              <p className="m-[0px] font-extrabold">Explore more</p>
              <p className="m-[0px] text-[20px] font-[Nexa] text-[#f17700]">
                Download the Mobile App
              </p>
            </div>
          </div>
          <div className="flex flex-row items-end justify-start pt-[13.6px] px-[0px] pb-[0px] box-border gap-[24px] max-w-full z-[2]">
            <img
              className="self-stretch w-[150px] relative rounded-[7px] max-h-full object-cover min-h-[47px]"
              loading="lazy"
              src="\image-1-2@2x.png"

              alt=""
            />
            <img
              className="h-[45px] w-[150px] relative rounded-[7px] object-cover"
              loading="lazy"
              src="\image-21@2x.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[1028px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
          <FrameComponent7
            propWidth="856px"
            propFlex="unset"
            propMinHeight="56px"
            propHeight="unset"
            propMinHeight1="56px"
            propHeight1="unset"
          />
        </div>
      </div>
    </div>
  );
};

AppPromotion.propTypes = {
  className: PropTypes.string,
};

export default AppPromotion;
