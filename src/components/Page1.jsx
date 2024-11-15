import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ButtomNavigation from "./ButtomNavigation";
import PropTypes from "prop-types";

const Page1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/subscribe");
  }, [navigate]);

  const onPlayGamesButtonContainerClick = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  const onLeaderBoardButtonContainerClick = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div
      className={`ml-[-1px] self-stretch bg-[#fff] overflow-hidden flex flex-col items-start justify-start pt-[105px] px-[1px] pb-[0px] box-border gap-[24px] max-w-full text-left text-[36px] text-[#002724] font-[Abel] ${className}`}
    >
      <div className="w-[346px] flex flex-row items-start justify-start py-[0px] px-[18px] box-border max-w-full">
        <h1 className="m-[0px] flex-1 relative text-inherit leading-[122.2%] font-bold font-[inherit] z-[1]">
          Improve your Basic Knowledge
        </h1>
      </div>
      <div className="w-[419px] flex flex-row items-start justify-start pt-[0px] px-[18px] pb-[402px] box-border max-w-full text-[16px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
          <h1 className="m-[0px] self-stretch relative text-inherit leading-[150%] font-normal font-[inherit] whitespace-pre-wrap z-[1]">{`Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, `}</h1>
          <div className="flex flex-row items-end justify-start py-[0px] pl-[0px] pr-[20px] gap-[14px] z-[1]">
            <img
              className="self-stretch w-[74px] relative rounded-[4px] max-h-full object-cover min-h-[23px]"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <img
              className="h-[22px] w-[74px] relative rounded-[4px] object-cover"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start max-w-full text-center text-[8px] text-[#097586] font-[Poppins]">
        <ButtomNavigation
          maskGroup="/mask-group1@2x.png"
          onFrameContainerClick={onFrameContainerClick}
          icons8Pay50="/icons8pay50@2x.png"
          onPlayGamesButtonContainerClick={onPlayGamesButtonContainerClick}
          icons8Games50="/icons8games50@2x.png"
          onLeaderBoardButtonContainerClick={onLeaderBoardButtonContainerClick}
          icons8Leaderboard501="/icons8leaderboard50-1@2x.png"
          onFrameContainerClick1={onFrameContainerClick1}
          layer241="/layer-24-12@2x.png"
        />
        <img
          className="mr-[-22px] w-[476px] h-[932px] relative object-cover shrink-0 max-w-[111%]"
          alt=""
          src="/home-page-mobile-3-1@2x.png"
        />
      </div>
    </div>
  );
};

Page1.propTypes = {
  className: PropTypes.string,
};

export default Page1;
