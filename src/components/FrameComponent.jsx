import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  propBackgroundImage,
  propWidth,
  x30,
  k351,
  propHeight,
  propWidth1,
  nGN,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const frameDiv5Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const k351Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv6Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className={`self-stretch rounded-[11px] flex flex-col items-start justify-start pt-[8px] px-[68px] pb-[4px] gap-[91px] bg-cover bg-no-repeat bg-[top] z-[3] text-center text-[12px] text-[#fff] font-[Abel] ${className}`}
      style={frameDiv4Style}
    >
      <div
        className="w-[69px] flex flex-row items-start justify-start py-[0px] pl-[8px] pr-[9px] box-border"
        style={frameDiv5Style}
      >
        <div className="h-[15px] flex-1 rounded-[3px] bg-[#097586] flex flex-row items-start justify-start py-[0px] px-[3px] box-border whitespace-nowrap">
          <div className="mt-[-2px] flex-1 relative leading-[21px]">{x30}</div>
        </div>
      </div>
      <img
        className="w-[133px] h-[91px] relative object-cover hidden"
        alt=""
        src={k351}
        style={k351Style}
      />
      <div
        className="w-[68px] h-[15px] rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[11px] box-border"
        style={frameDiv6Style}
      >
        <div className="mt-[-2px] flex-1 relative leading-[21px]">{nGN}</div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  x30: PropTypes.string,
  k351: PropTypes.string,
  nGN: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default FrameComponent;
