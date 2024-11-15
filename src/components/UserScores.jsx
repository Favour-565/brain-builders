import UserRows from "./UserRows";
import PropTypes from "prop-types";

const UserScores = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[0px] pl-[3px] pr-[0px] box-border max-w-full text-center text-[26px] text-[#fff] font-[Nexa] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[26px] max-w-full">
        <UserRows
          avatars="/ellipse-6@2x.png"
          adeyemi="Adeyemi"
          placeholders="5,3472"
          st="1st"
        />
        <div className="self-stretch rounded-[6px] [background:linear-gradient(90deg,_#00336f,_#000024)] flex flex-row items-start justify-between pt-[16px] pb-[14px] pl-[190px] pr-[39px] box-border relative max-w-full gap-[20px] z-[1] lg:pl-[95px] lg:box-border mq361:pl-[20px] mq361:box-border mq370:pl-[47px] mq370:box-border mq400:flex-wrap">
          <div className="h-[74px] w-[1076px] relative rounded-[6px] [background:linear-gradient(90deg,_#00336f,_#000024)] hidden max-w-full z-[0]" />
          <img
            className="h-[calc(100%_-_8.7px)] w-[65.3px] absolute !m-[0] top-[3.6px] bottom-[5.1px] left-[72px] rounded-[50%] max-h-full object-contain z-[1]"
            src="/ellipse-6@2x.png"
            alt=""
          />
          <div className="w-[148px] flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px] box-border">
            <h2 className="m-[0px] self-stretch relative text-inherit leading-[160%] font-normal font-[Nexa] z-[1] mq361:text-[21px] mq361:leading-[33px]">
              Funmi
            </h2>
          </div>
          <div className="w-[384px] flex flex-row items-start justify-center gap-[78px] max-w-full text-[rgba(28,28,28,0.72)] mq361:gap-[39px] mq361:flex-wrap">
            <div className="flex-1 rounded-[6px] bg-[#fff] flex flex-row items-start justify-start pt-[3px] px-[69px] pb-[0px] box-border min-w-[100px] z-[1]">
              <div className="h-[41px] w-[239px] relative rounded-[6px] bg-[#fff] hidden" />
              <div className="flex-1 relative leading-[160%] z-[2] mq361:text-[21px] mq361:leading-[33px]">
                4,3472
              </div>
            </div>
            <div className="h-[42px] w-[67px] relative">
              <div className="absolute top-[0px] left-[4px] rounded-[6px] bg-[#fff] w-[58px] h-[41px] z-[1]" />
              <div className="absolute top-[1px] left-[0px] leading-[160%] inline-block w-[67px] h-[41px] z-[2] mq361:text-[21px] mq361:leading-[33px]">
                2nd
              </div>
            </div>
          </div>
        </div>
        <UserRows
          avatars="/ellipse-6@2x.png"
          rectangleDivWidth="148px"
          adeyemi="Shade"
          placeholders="3,3472"
          st="3rd"
        />
        <UserRows
          avatars="/ellipse-6@2x.png"
          rectangleDivWidth="148px"
          adeyemi="Chika"
          placeholders="2,3472"
          st="4th"
        />
        <UserRows
          avatars="/ellipse-6@2x.png"
          rectangleDivWidth="180px"
          adeyemi="Oluwanifemi"
          placeholders="1,3472"
          st="5th"
        />
        <UserRows
          avatars="/ellipse-6@2x.png"
          rectangleDivWidth="148px"
          adeyemi="Yemisi"
          placeholders="9472"
          st="6th"
        />
      </div>
    </div>
  );
};

UserScores.propTypes = {
  className: PropTypes.string,
};

export default UserScores;
