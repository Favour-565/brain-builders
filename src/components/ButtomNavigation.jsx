import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ButtomNavigation = ({
  className = "",
  propMarginRight,
  propMarginLeft,
  propPosition,
  propGap,
  propMarginTop,
  onButtomNavigationClick,
  propAlignSelf,
  propWidth,
  propTop,
  propLeft,
  onHomeButtonContainerClick,
  maskGroup,
  propHeight,
  propDisplay,
  propColor,
  onFrameContainerClick,
  propFlexDirection,
  propHeight1,
  propFlex,
  icons8Pay50,
  propAlignSelf1,
  onPlayGamesButtonContainerClick,
  icons8Games50,
  propMinWidth,
  propHeight2,
  propColor1,
  onLeaderBoardButtonContainerClick,
  icons8Leaderboard501,
  onIcons8LeaderboardClick,
  propMinWidth1,
  propHeight3,
  propColor2,
  onFrameContainerClick1,
  propMargin,
  propPosition1,
  propTop1,
  propRight,
  propPadding,
  propDisplay1,
  propFlexDirection1,
  propHeight4,
  layer241,
  propMargin1,
  propTop2,
  propLeft1,
  propFlex1,
  propPosition2,
  propTop3,
  propLeft2,
  propDisplay2,
  propWidth1,
  propHeight5,
}) => {
  const buttomNavigationStyle = useMemo(() => {
    return {
      marginRight: propMarginRight,
      marginLeft: propMarginLeft,
      position: propPosition,
      gap: propGap,
      marginTop: propMarginTop,
      alignSelf: propAlignSelf,
      width: propWidth,
      top: propTop,
      left: propLeft,
    };
  }, [
    propMarginRight,
    propMarginLeft,
    propPosition,
    propGap,
    propMarginTop,
    propAlignSelf,
    propWidth,
    propTop,
    propLeft,
  ]);

  const homeStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
      color: propColor,
    };
  }, [propHeight, propDisplay, propColor]);

  const frameDiv1Style = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
      height: propHeight1,
    };
  }, [propFlexDirection, propHeight1]);

  const subscribeButtonContainerStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const subscribeStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const playGamesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      height: propHeight2,
      color: propColor1,
    };
  }, [propMinWidth, propHeight2, propColor1]);

  const leaderBoardStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      height: propHeight3,
      color: propColor2,
    };
  }, [propMinWidth1, propHeight3, propColor2]);

  const frameDiv2Style = useMemo(() => {
    return {
      margin: propMargin,
      position: propPosition1,
      top: propTop1,
      right: propRight,
      padding: propPadding,
    };
  }, [propMargin, propPosition1, propTop1, propRight, propPadding]);

  const meButtonContainerStyle = useMemo(() => {
    return {
      display: propDisplay1,
      flexDirection: propFlexDirection1,
      height: propHeight4,
    };
  }, [propDisplay1, propFlexDirection1, propHeight4]);

  const layer241Style = useMemo(() => {
    return {
      margin: propMargin1,
      top: propTop2,
      left: propLeft1,
    };
  }, [propMargin1, propTop2, propLeft1]);

  const meStyle = useMemo(() => {
    return {
      flex: propFlex1,
      position: propPosition2,
      top: propTop3,
      left: propLeft2,
      display: propDisplay2,
      width: propWidth1,
      height: propHeight5,
    };
  }, [
    propFlex1,
    propPosition2,
    propTop3,
    propLeft2,
    propDisplay2,
    propWidth1,
    propHeight5,
  ]);

  const navigate = useNavigate();

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/subscribe");
  }, [navigate]);

  const onPlayGamesButtonContainerClick1 = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  const onLeaderBoardButtonContainerClick1 = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onFrameContainerClick3 = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div
      className={`mr-[-1px] self-stretch shadow-[0px_0px_12px_rgba(0,_0,_0,_0.25)] rounded-t-[20px] rounded-b-[0px] bg-[#fff] flex flex-row items-start justify-start p-[25px] relative gap-[41px] shrink-0 z-[2] text-center text-[8px] text-[#097586] font-[Nexa] mq345:flex-wrap mq361:gap-[20px] ${className}`}
      style={buttomNavigationStyle}
      onClick={onButtomNavigationClick}
    >
      <div className="w-[33px] flex flex-col items-start justify-start pt-[3.8px] px-[0px] pb-[0px] box-border text-[#fe8601]">
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[1px]"
          onClick={onHomeButtonContainerClick}
        >
          <div className="flex flex-row items-start justify-start py-[0px] px-[2px]">
            <img
              className="h-[28px] w-[29px] relative object-cover"
              loading="lazy"
              
              alt=""
              src={maskGroup}
            />
          </div>
          <div className="self-stretch relative" style={homeStyle}>
            Home
          </div>
        </div>
      </div>
      <div
        className="w-[50px] flex flex-col items-start justify-end pt-[36.7px] px-[0px] pb-[0px] box-border cursor-pointer"
        onClick={onFrameContainerClick}
        style={frameDiv1Style}
      >
        <div
          className="self-stretch flex flex-row items-start justify-start relative"
          style={subscribeButtonContainerStyle}
        >
          <img
            className="h-[42.7px] w-[42.7px] absolute !m-[0] top-[-36.7px] right-[3.6px] object-contain"
            loading="lazy"
            alt=""
            src={icons8Pay50}
          />
          <div className="flex-1 relative z-[1]" style={subscribeStyle}>
            Subscribe
          </div>
        </div>
      </div>
      <div className="w-[50px] flex flex-col items-start justify-start pt-[4.3px] px-[0px] pb-[0px] box-border">
        <div
          className="self-stretch flex flex-col items-end justify-start gap-[1px] cursor-pointer"
          onClick={onPlayGamesButtonContainerClick}
        >
          <div className="flex flex-row items-start justify-end py-[0px] px-[6px]">
            <img
              className="h-[27px] w-[37.8px] relative object-cover"
              loading="lazy"
              alt=""
              src={icons8Games50}
            />
          </div>
          <div
            className="self-stretch relative inline-block min-w-[50px]"
            style={playGamesStyle}
          >
            Play Games
          </div>
        </div>
      </div>
      <div className="w-[55px] flex flex-col items-start justify-start pt-[5.1px] px-[0px] pb-[0px] box-border">
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[0.5px] cursor-pointer"
          onClick={onLeaderBoardButtonContainerClick}
        >
          <div className="flex flex-row items-start justify-start py-[0px] pl-[7px] pr-[8px]">
            <img
              className="h-[26px] w-[40px] relative object-cover"
              loading="lazy"
              alt=""
              src={icons8Leaderboard501}
              onClick={onIcons8LeaderboardClick}
            />
          </div>
          <div
            className="self-stretch relative inline-block min-w-[55px]"
            style={leaderBoardStyle}
          >
            Leader Board
          </div>
        </div>
      </div>
      <div
        className="w-[31px] !m-[0] absolute top-[28.8px] right-[25px] flex flex-col items-start justify-end pt-[29px] px-[0px] pb-[0px] box-border cursor-pointer"
        onClick={onFrameContainerClick1}
        style={frameDiv2Style}
      >
        <div
          className="self-stretch flex flex-row items-start justify-start relative"
          style={meButtonContainerStyle}
        >
          <img
            className="h-[29px] w-[27px] absolute !m-[0] top-[-28.8px] left-[calc(50%_-_13.5px)] object-cover"
            loading="lazy"
            alt=""
            src={layer241}
            style={layer241Style}
          />
          <div className="flex-1 relative" style={meStyle}>
            Me
          </div>
        </div>
      </div>
    </div>
  );
};

ButtomNavigation.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  icons8Pay50: PropTypes.string,
  icons8Games50: PropTypes.string,
  icons8Leaderboard501: PropTypes.string,
  layer241: PropTypes.string,

  /** Style props */
  propMarginRight: PropTypes.any,
  propMarginLeft: PropTypes.any,
  propPosition: PropTypes.any,
  propGap: PropTypes.any,
  propMarginTop: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propColor: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propHeight1: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight2: PropTypes.any,
  propColor1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propHeight3: PropTypes.any,
  propColor2: PropTypes.any,
  propMargin: PropTypes.any,
  propPosition1: PropTypes.any,
  propTop1: PropTypes.any,
  propRight: PropTypes.any,
  propPadding: PropTypes.any,
  propDisplay1: PropTypes.any,
  propFlexDirection1: PropTypes.any,
  propHeight4: PropTypes.any,
  propMargin1: PropTypes.any,
  propTop2: PropTypes.any,
  propLeft1: PropTypes.any,
  propFlex1: PropTypes.any,
  propPosition2: PropTypes.any,
  propTop3: PropTypes.any,
  propLeft2: PropTypes.any,
  propDisplay2: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight5: PropTypes.any,

  /** Action props */
  onButtomNavigationClick: PropTypes.func,
  onHomeButtonContainerClick: PropTypes.func,
  onFrameContainerClick: PropTypes.func,
  onPlayGamesButtonContainerClick: PropTypes.func,
  onLeaderBoardButtonContainerClick: PropTypes.func,
  onIcons8LeaderboardClick: PropTypes.func,
  onFrameContainerClick1: PropTypes.func,
};

export default ButtomNavigation;
