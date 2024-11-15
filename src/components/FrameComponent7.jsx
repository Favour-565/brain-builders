import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent7 = ({
  className = "",
  propWidth,
  propFlex,
  propMinHeight,
  propHeight,
  propMinHeight1,
  propHeight1,
}) => {
  const frameDiv8Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const aITextParaphraserStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
      height: propHeight,
    };
  }, [propMinHeight, propHeight]);

  const sEOTextGeneratorStyle = useMemo(() => {
    return {
      minHeight: propMinHeight1,
      height: propHeight1,
    };
  }, [propMinHeight1, propHeight1]);

  return (
    <div
      className={`w-[856px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-[16px] text-[#2e4d00] font-[Nexa] mq400:flex-wrap ${className}`}
      style={frameDiv8Style}
    >
      <div className="w-[152px] flex flex-col items-start justify-start gap-[12px]">
        <div className="self-stretch relative leading-[28px] font-extrabold">
          Use Cases
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative leading-[28px] font-extrabold inline-block min-h-[56px]">
            1nsectetur adipiscing
          </div>
          <div className="self-stretch relative leading-[28px] font-extrabold inline-block min-h-[56px]">
            1nsectetur adipiscing
          </div>
          <div className="self-stretch relative leading-[28px] font-extrabold inline-block min-h-[56px]">
            1nsectetur adipiscing
          </div>
          <div className="self-stretch relative leading-[28px] font-extrabold inline-block min-h-[56px]">
            1nsectetur adipiscing
          </div>
          <div
            className="self-stretch relative leading-[28px] font-extrabold inline-block min-h-[56px]"
            style={aITextParaphraserStyle}
          >
            1nsectetur adipiscing
          </div>
          <div
            className="self-stretch relative leading-[28px] font-extrabold inline-block min-h-[56px]"
            style={sEOTextGeneratorStyle}
          >
            1nsectetur adipiscing
          </div>
        </div>
      </div>
      <div className="w-[152px] flex flex-col items-start justify-start gap-[12px]">
        <div className="self-stretch relative leading-[28px] font-extrabold">
          Explore
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative leading-[28px] font-extrabold">
            1nsectetur
          </div>
          <div className="self-stretch relative leading-[28px] font-extrabold">
            1nsectetur
          </div>
          <div className="self-stretch relative leading-[28px] font-extrabold">
            1nsectetur
          </div>
          <div className="self-stretch relative leading-[28px] font-extrabold">
            1nsectetur
          </div>
          <div className="self-stretch relative leading-[28px] font-extrabold">
            1nsectetur
          </div>
        </div>
      </div>
      <div className="w-[152px] flex flex-col items-start justify-start gap-[12px]">
        <div className="self-stretch relative leading-[28px] font-extrabold">
          Legal
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative leading-[28px] font-extrabold">
            Contact Us
          </div>
          <div className="self-stretch relative leading-[28px] font-extrabold">
            Terms and Service
          </div>
          <div className="self-stretch relative leading-[28px] font-extrabold">
            Privacy Policy
          </div>
          <div className="self-stretch relative leading-[28px] font-extrabold">
            1nsectetur
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinHeight: PropTypes.any,
  propHeight: PropTypes.any,
  propMinHeight1: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default FrameComponent7;
