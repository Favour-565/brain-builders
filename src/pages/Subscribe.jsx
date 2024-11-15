import { useState, useCallback } from "react";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import PlanOptions from "../components/PlanOptions";
import SilverPlanCard from "../components/SilverPlanCard";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const [isSlideMenuOpen, setSlideMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openSlideMenu = useCallback(() => {
    setSlideMenuOpen(true);
  }, []);

  const closeSlideMenu = useCallback(() => {
    setSlideMenuOpen(false);
  }, []);

  const onNavigationRowContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onPlayGamesButtonClick = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  const onLeaderboardButtonContainerClick = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onProfileIconContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative rounded-[20px] bg-[#fafafa] overflow-hidden flex flex-col items-start justify-start pt-[40px] px-[36px] pb-[0.3px] box-border gap-[12px] leading-[normal] tracking-[normal] text-center text-[24px] text-[#002724] font-['Satoshi_Variable']">
        <div className="flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[15px]">
          <div
            className="h-[14px] w-[28px] relative cursor-pointer"
            onClick={openSlideMenu}
          >
            <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
          </div>
        </div>
        <div className="w-[347px] flex flex-row items-start justify-start py-[0px] px-[14px] box-border max-w-full">
          <h1 className="m-[0px] flex-1 relative text-inherit leading-[35px] font-black font-[inherit]">
            You’re in control
          </h1>
        </div>
        <div className="w-[347px] flex flex-row items-start justify-start pt-[0px] px-[14px] pb-[13px] box-border max-w-full text-[14px] font-[Abel]">
          <h2 className="m-[0px] flex-1 relative text-inherit leading-[18px] font-normal font-[inherit]">
            Choose the billing package that suits you the best. You can switch
            anytime.
          </h2>
        </div>
        <PlanOptions />
        <SilverPlanCard />
        <div className="flex flex-row items-start justify-start pt-[0px] pb-[10px] pl-[72px] pr-[66px] mq358:pl-[20px] mq358:pr-[20px] mq358:box-border">
          <div className="h-[29px] flex flex-row items-end justify-start pt-[0px] px-[0px] pb-[0px] box-border gap-[24px]">
            <img
              className="h-[30px] w-[98px] relative rounded-[4px] object-cover"
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
            <img
              className="self-stretch w-[98px] relative rounded-[4px] max-h-full object-cover min-h-[29px]"
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
          </div>
        </div>
        <footer className="ml-[-37px] w-[433px] shadow-[0px_0px_12px_rgba(0,_0,_0,_0.25)] rounded-t-[20px] rounded-b-[0px] bg-[#fff] flex flex-row items-start justify-start p-[25px] box-border relative gap-[41px] max-w-[121%] shrink-0 text-center text-[8px] text-[#097586] font-[Poppins] mq361:gap-[20px] mq415:flex-wrap">
          <div className="w-[33px] flex flex-col items-start justify-start pt-[3.8px] px-[0px] pb-[0px] box-border">
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[1px] cursor-pointer"
              onClick={onNavigationRowContainerClick}
            >
              <div className="flex flex-row items-start justify-start py-[0px] px-[2px]">
                <img
                  className="h-[28px] w-[29px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
              </div>
              <div className="self-stretch relative">Home</div>
            </div>
          </div>
          <div className="h-[47.7px] w-[50px] relative text-[#fe8601]">
            <div className="absolute top-[36.7px] left-[0px] inline-block w-[50px] h-[11px]">
              Subscribe
            </div>
            <img
              className="absolute top-[0px] left-[3.7px] w-[42.7px] h-[42.7px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-1@2x.png"
            />
          </div>
          <div className="w-[50px] flex flex-col items-start justify-start pt-[4.3px] px-[0px] pb-[0px] box-border">
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[1px] cursor-pointer"
              onClick={onPlayGamesButtonClick}
            >
              <div className="flex flex-row items-start justify-start py-[0px] px-[6px]">
                <img
                  className="h-[27px] w-[37.8px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/icons8games50@2x.png"
                />
              </div>
              <div className="self-stretch relative inline-block min-w-[50px]">
                Play Games
              </div>
            </div>
          </div>
          <div className="w-[55px] flex flex-col items-start justify-start pt-[5.1px] px-[0px] pb-[0px] box-border">
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[0.5px] cursor-pointer"
              onClick={onLeaderboardButtonContainerClick}
            >
              <div className="flex flex-row items-start justify-start py-[0px] pl-[7px] pr-[8px]">
                <img
                  className="h-[26px] w-[40px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/icons8leaderboard50-1@2x.png"
                />
              </div>
              <div className="self-stretch relative inline-block min-w-[55px]">
                Leader Board
              </div>
            </div>
          </div>
          <div
            className="w-[31px] !m-[0] absolute top-[28.8px] right-[25px] flex flex-col items-start justify-end pt-[29px] px-[0px] pb-[0px] box-border cursor-pointer"
            onClick={onProfileIconContainerClick}
          >
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <img
                className="h-[29px] w-[27px] absolute !m-[0] top-[-28.5px] left-[calc(50%_-_13.5px)] object-cover"
                loading="lazy"
                alt=""
                src="/layer-24-1@2x.png"
              />
              <div className="flex-1 relative">Me</div>
            </div>
          </div>
        </footer>
      </div>
      {isSlideMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSlideMenu}
        >
          <SlideMenu onClose={closeSlideMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Subscribe;
