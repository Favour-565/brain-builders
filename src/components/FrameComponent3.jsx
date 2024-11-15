import UserInformation from "./UserInformation";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`mr-[-49px] w-[1341px] flex flex-row items-start justify-start relative max-w-[105%] shrink-0 text-left text-[48px] text-[#002724] font-['Nexa_Light'] ${className}`}
    >
      <img
        className="h-[832px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
        alt=""
        src="/rectangle-39-1@2x.png"
      />
      <div className="w-[924px] !m-[0] absolute top-[153px] left-[101px] flex flex-col items-start justify-start gap-[29px] max-w-full">
        <h1 className="m-[0px] w-[492px] relative text-inherit tracking-[0.01em] inline-block min-h-[73px] max-w-full z-[2] font-[inherit] mq361:text-[29px] mq370:text-[38px]">
          <span>
            <span>Our User</span>
            <span className="font-extrabold font-[Nexa]">{` `}</span>
          </span>
          <span className="font-[Abel] text-[#0062a2]">Experience!</span>
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[4px] pr-[0px] box-border max-w-full text-[40px] text-[#f17700] font-[Abel]">
          <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[26px] max-w-full">
            <UserInformation
              profilePicture="/rectangle-42@2x.png"
              chichi="Chichi"
              ahmed=" Ahmed"
            />
            <UserInformation
              profilePicture="/rectangle-43@2x.png"
              chichi="Bright"
              ahmed=" Kunle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
