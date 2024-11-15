import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent17 from "./FrameComponent17";
import ButtomNavigation from "./ButtomNavigation";
import PropTypes from "prop-types";

const FrameComponent13 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/subscribe");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  const onFrameContainerClick3 = useCallback(() => {
    navigate("/levels");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start max-w-full text-left text-[16px] text-[#2e4d00] font-[Nexa] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[21px] pr-[16px] box-border max-w-full">
        <FrameComponent17 />
      </div>
      <ButtomNavigation
        propMarginRight="unset"
        propMarginLeft="unset"
        propPosition="relative"
        propGap="41px"
        propMarginTop="-2px"
        propAlignSelf="stretch"
        propWidth="unset"
        propTop="unset"
        propLeft="unset"
        onHomeButtonContainerClick={onFrameContainerClick}
        maskGroup="/mask-group@2x.png"
        propHeight="unset"
        propDisplay="unset"
        propColor="#097586"
        onFrameContainerClick={onFrameContainerClick1}
        propFlexDirection="column"
        propHeight1="unset"
        propFlex="unset"
        icons8Pay50="/icons8pay50@2x.png"
        propAlignSelf1="unset"
        onPlayGamesButtonContainerClick={onFrameContainerClick2}
        icons8Games50="/icons8games50@2x.png"
        propMinWidth="50px"
        propHeight2="unset"
        propColor1="#097586"
        icons8Leaderboard501="/mask-group-13@2x.png"
        propMinWidth1="55px"
        propHeight3="unset"
        propColor2="#fe8601"
        onFrameContainerClick1={onFrameContainerClick3}
        propMargin="0 !important"
        propPosition1="absolute"
        propTop1="28.8px"
        propRight="25px"
        propPadding="29px 0px 0px"
        propDisplay1="flex"
        propFlexDirection1="row"
        propHeight4="unset"
        layer241="/layer-24-13@2x.png"
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
    </section>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
