import { useMemo } from "react";
import PropTypes from "prop-types";

const UserRows = ({
  className = "",
  avatars,
  rectangleDivWidth,
  adeyemi,
  placeholders,
  st,
}) => {
  const userNamesRowStyle = useMemo(() => {
    return {
      width: rectangleDivWidth,
    };
  }, [rectangleDivWidth]);

  return (
    <div
      className={`self-stretch rounded-[6px] [background:linear-gradient(90deg,_#00336f,_#000024)] flex flex-row items-start justify-between pt-[16px] pb-[14px] pl-[190px] pr-[44px] box-border relative max-w-full gap-[20px] z-[1] text-center text-[26px] text-[#fff] font-[Abel] lg:pl-[95px] lg:pr-[22px] lg:box-border mq361:pl-[20px] mq361:box-border mq370:pl-[47px] mq370:box-border mq400:flex-wrap ${className}`}
    >
      <div className="h-[74px] w-[1076px] relative rounded-[6px] [background:linear-gradient(90deg,_#00336f,_#000024)] hidden max-w-full z-[0]" />
      <img
        className="h-[calc(100%_-_8.7px)] w-[65.3px] absolute !m-[0] top-[3.6px] bottom-[5.1px] left-[72px] rounded-[50%] max-h-full object-contain z-[1]"
        loading="lazy"
        alt=""
        src={avatars}
      />
      <div
        className="w-[148px] flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px] box-border"
        style={userNamesRowStyle}
      >
        <h2 className="m-[0px] self-stretch relative text-inherit leading-[160%] font-normal font-[inherit] z-[1] mq361:text-[21px] mq361:leading-[33px]">
          {adeyemi}
        </h2>
      </div>
      <div className="w-[379px] flex flex-row items-start justify-center gap-[82px] max-w-full text-[rgba(28,28,28,0.72)] mq361:gap-[41px] mq361:flex-wrap">
        <div className="flex-1 rounded-[6px] bg-[#fff] flex flex-row items-start justify-start pt-[3px] px-[69px] pb-[0px] box-border min-w-[100px] z-[1]">
          <div className="h-[41px] w-[239px] relative rounded-[6px] bg-[#fff] hidden" />
          <div className="flex-1 relative leading-[160%] z-[2] mq361:text-[21px] mq361:leading-[33px]">
            {placeholders}
          </div>
        </div>
        <div className="w-[58px] rounded-[6px] bg-[#fff] flex flex-row items-start justify-start pt-[1px] pb-[0px] pl-[7px] pr-[6px] box-border z-[1]">
          <div className="h-[41px] w-[58px] relative rounded-[6px] bg-[#fff] hidden" />
          <div className="flex-1 relative leading-[160%] z-[2] mq361:text-[21px] mq361:leading-[33px]">
            {st}
          </div>
        </div>
      </div>
    </div>
  );
};

UserRows.propTypes = {
  className: PropTypes.string,
  avatars: PropTypes.string,
  adeyemi: PropTypes.string,
  placeholders: PropTypes.string,
  st: PropTypes.string,

  /** Style props */
  rectangleDivWidth: PropTypes.any,
};

export default UserRows;
