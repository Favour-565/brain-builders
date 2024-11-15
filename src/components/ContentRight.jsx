import { useMemo } from "react";
import PropTypes from "prop-types";

const ContentRight = ({ className = "", propPadding, image1, image2 }) => {
  const storeButtonContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-[16px] text-[#fff] font-[Nexa] mq407:flex-wrap ${className}`}
    >
      <div
        className="flex flex-col items-start justify-start pt-[197px] px-[0px] pb-[0px] box-border min-w-[324px] max-w-full mq407:flex-1"
        style={storeButtonContainerStyle}
      >
        <div className="flex flex-row items-end justify-start pt-[13.6px] px-[0px] pb-[0px] gap-[24px] z-[1] mq370:flex-wrap">
          <img
            className="self-stretch w-[150px] relative rounded-[7px] max-h-full object-cover min-h-[47px]"
            loading="lazy"
            alt=""
            src={image1}
          />
          <img
            className="h-[45px] w-[150px] relative rounded-[7px] object-cover"
            loading="lazy"
            alt=""
            src={image2}
          />
        </div>
      </div>
      <div className="h-[264px] w-[666px] relative leading-[150%] font-extrabold whitespace-pre-wrap inline-block shrink-0 min-w-[666px] max-w-full z-[3] mq361:min-w-full mq407:flex-1">{`dipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit `}</div>
    </div>
  );
};

ContentRight.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default ContentRight;
