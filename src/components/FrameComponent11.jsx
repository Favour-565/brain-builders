import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent11 = ({
  className = "",
  propBackgroundImage,
  x30,
  propTextDecoration,
  propDisplay,
  k351,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const x30Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      display: propDisplay,
    };
  }, [propTextDecoration, propDisplay]);

  return (
    <div
      className={`w-[139px] rounded-[11px] flex flex-row items-start justify-start pt-[8px] pb-[110px] pl-[43px] pr-[38px] box-border relative bg-[url('/public/frame-427319922@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-[12px] text-[#fff] font-[Abel] ${className}`}
      style={frameDivStyle}
    >
      <div className="h-[15px] w-[52px] rounded-[3px] bg-[#097586] flex flex-row items-start justify-start py-[0px] px-[3px] box-border whitespace-nowrap">
        <a
          className="mt-[-2px] [text-decoration:none] flex-1 relative leading-[21px] text-[inherit] inline-block"
          style={x30Style}
        >
          {x30}
        </a>
      </div>
      <img
        className="h-[106px] w-[105px] relative object-cover hidden z-[1]"
        alt=""
        src={k351}
      />
      <div className="h-[15px] w-[] !m-[0] absolute right-[35px] bottom-[7px] rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[11px] box-border z-[1]">
        <div className="mt-[-2px] flex-1 relative leading-[21px]">50NGN</div>
      </div>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
  x30: PropTypes.string,
  k351: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FrameComponent11;
