import ContentRight from "./ContentRight";
import PropTypes from "prop-types";

const MainContent1 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[19px] max-w-full text-center text-[48px] text-[#fff] font-[Nexa] ${className}`}
    >
      <div className="w-[666px] flex flex-col items-start justify-start max-w-full">
        <div className="w-[498px] flex flex-row items-start justify-start py-[0px] px-[2px] box-border max-w-full">
          <h1 className="m-[0px] flex-1 relative text-inherit tracking-[0.01em] font-extrabold font-[inherit] inline-block min-h-[73px] max-w-full z-[1] mq361:text-[38px] mq370:text-[29px]">
            Term and Conditions
          </h1>
        </div>
        <div className="self-stretch relative text-[16px] leading-[150%] font-extrabold whitespace-pre-wrap text-left inline-block min-h-[168px] z-[3]">
          Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
          amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur
          adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,
          Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
          amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur
          adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit,
          Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
          amet, consectetur adipiscing elit, Ipsum dolor sit amet, consec
        </div>
      </div>
      <ContentRight
        propPadding="210px 0px 0px"
        image1="\image-1-2@2x.png"
        image2="\image-21@2x.png"
      />
    </div>
  );
};

MainContent1.propTypes = {
  className: PropTypes.string,
};

export default MainContent1;
