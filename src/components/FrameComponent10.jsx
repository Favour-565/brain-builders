import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent10 = ({
  className = "",
  propLeft,
  ellipse7,
  facts,
  propWidth,
  propMinWidth,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const factsStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/levels");
  }, [navigate]);

  return (
    <div
      className={`!m-[0] absolute top-[140px] left-[24px] flex flex-col items-end justify-start gap-[7px] text-center text-[10px] text-[#fff] font-[Nexa] ${className}`}
      style={frameDiv3Style}
    >
      <img
        className="w-[85px] h-[85px] relative rounded-[50%] object-cover"
        alt=""
        src={ellipse7}
      />
      <div className="flex flex-row items-start justify-end py-[0px] pl-[8px] pr-[5px]">
        <div
          className="rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[23px] cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <div
            className="w-[26px] relative leading-[20px] inline-block min-w-[26px]"
            style={factsStyle}
          >
            {facts}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
  ellipse7: PropTypes.string,
  facts: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent10;
