import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopContent from "../components/TopContent";
import ButtonOptions from "../components/ButtonOptions";
import ButtomNavigation from "../components/ButtomNavigation";

const Question = () => {
  const navigate = useNavigate();

  const onButtomNavigationClick = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  const onSubscribeButtonContainerClick = useCallback(() => {
    navigate("/subscribe");
  }, [navigate]);

  const onLeaderBoardContentClick = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onProfileButtonContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-[20px] bg-[#fafafa] overflow-hidden flex flex-col items-start justify-start pt-[20px] pb-[0.3px] pl-[19px] pr-[11px] box-border gap-[46px] leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[72px] absolute !m-[0] top-[0px] right-[0px] left-[0px] rounded-[4px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/frame-427319836.svg"
      />
      <TopContent />
      <section className="self-stretch flex flex-row items-start justify-start pt-[0px] px-[43px] pb-[55px] text-center text-[24px] text-[#fff] font-[Abel] mq390:pl-[20px] mq390:pr-[20px] mq390:box-border">
        <div className="w-[304px] flex flex-row items-start justify-start relative">
          <img
            className="h-[224px] w-[390px] absolute !m-[0] top-[calc(50%_-_112px)] left-[calc(50%_-_195px)] rounded-[20px] object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-72@2x.png"
          />
          <h1 className="m-[0px] flex-1 relative text-inherit leading-[28px] font-normal font-[inherit] z-[1]">
            Which of these is the strongest bone ?
          </h1>
        </div>
      </section>
      <ButtonOptions />
      <ButtomNavigation
        propMarginRight="unset"
        propMarginLeft="-20px"
        propPosition="relative"
        propGap="41px"
        propMarginTop="unset"
        onButtomNavigationClick={onButtomNavigationClick}
        propAlignSelf="unset"
        propWidth="433px"
        propTop="unset"
        propLeft="unset"
        maskGroup="/mask-group1@2x.png"
        propHeight="unset"
        propDisplay="unset"
        propColor="#fe8601"
        onFrameContainerClick={onSubscribeButtonContainerClick}
        propFlexDirection="column"
        propHeight1="unset"
        propFlex="unset"
        icons8Pay50="/icons8pay50@2x.png"
        propAlignSelf1="unset"
        icons8Games50="/icons8games50@2x.png"
        propMinWidth="50px"
        propHeight2="unset"
        propColor1="#097586"
        onLeaderBoardButtonContainerClick={onLeaderBoardContentClick}
        icons8Leaderboard501="/icons8leaderboard50-1@2x.png"
        propMinWidth1="55px"
        propHeight3="unset"
        propColor2="#097586"
        onFrameContainerClick1={onProfileButtonContainerClick}
        propMargin="0 !important"
        propPosition1="absolute"
        propTop1="28.8px"
        propRight="25px"
        propPadding="29px 0px 0px"
        propDisplay1="flex"
        propFlexDirection1="row"
        propHeight4="unset"
        layer241="/layer-24-12@2x.png"
        propMargin1="0 !important"
        propTop2="-28.8px"
        propLeft1="calc(50% - 13.5px)"
        propFlex1="1"
        propPosition2="relative"
        propTop3="unset"
        propLeft2="unset"
        propDisplay2="unset"
        propWidth1="unset"
        propHeight5="unset"
      />
    </div>
  );
};

export default Question;
