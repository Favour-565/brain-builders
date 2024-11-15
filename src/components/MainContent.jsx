import ContentRight from "./ContentRight";
import PropTypes from "prop-types";

const MainContent = ({ className = "" }) => {
  return (
    <div
      className={`w-[1106px] flex flex-col items-end justify-start gap-[19px] max-w-full text-center text-[48px] text-[#fff] font-[Nexa] ${className}`}
    >
      <div className="w-[675px] flex flex-col items-start justify-start max-w-full">
        <h1 className="m-[0px] w-[216px] relative text-inherit tracking-[0.01em] font-extrabold font-[inherit] inline-block min-h-[73px] z-[1] mq361:text-[38px] mq370:text-[29px]">
          About us
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[9px] pr-[0px] box-border max-w-full text-left text-[16px]">
          <div className="flex-1 relative leading-[150%] font-extrabold whitespace-pre-wrap inline-block min-h-[168px] max-w-full z-[3]">
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
      </div>
      <ContentRight image1="\image-1-2@2x.png" image2="\image-21@2x.png" />
    </div>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
