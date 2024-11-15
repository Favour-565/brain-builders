import ButtomNavigation from "./ButtomNavigation";
import PropTypes from "prop-types";

const SecondaryContent = ({
  className = "",
  maskGroup,
  icons8Pay50,
  icons8Games50,
  icons8Leaderboard501,
  layer241,
  propMarginRight,
  propMarginLeft,
  propPosition,
  propGap,
  propMarginTop,
  propAlignSelf,
  propWidth,
  propTop,
  propLeft,
  propHeight,
  propDisplay,
  propColor,
  propFlexDirection,
  propHeight1,
  propFlex,
  propAlignSelf1,
  propMinWidth,
  propHeight2,
  propColor1,
  propMinWidth1,
  propHeight3,
  propColor2,
  propMargin,
  propPosition1,
  propTop1,
  propRight,
  propPadding,
  propDisplay1,
  propFlexDirection1,
  propHeight4,
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
  return (
    <div
      className={`w-[433px] flex flex-col items-start justify-start pt-[397.2px] px-[0px] pb-[0px] box-border min-w-[433px] max-w-full shrink-0 mq473:min-w-full mq409:flex-1 ${className}`}
    >
      <ButtomNavigation
        propMarginRight={propMarginRight}
        propMarginLeft={propMarginLeft}
        propPosition={propPosition}
        propGap={propGap}
        propMarginTop={propMarginTop}
        propAlignSelf={propAlignSelf}
        propWidth={propWidth}
        propTop={propTop}
        propLeft={propLeft}
        maskGroup={maskGroup}
        propHeight={propHeight}
        propDisplay={propDisplay}
        propColor={propColor}
        propFlexDirection={propFlexDirection}
        propHeight1={propHeight1}
        propFlex={propFlex}
        icons8Pay50={icons8Pay50}
        propAlignSelf1={propAlignSelf1}
        icons8Games50={icons8Games50}
        propMinWidth={propMinWidth}
        propHeight2={propHeight2}
        propColor1={propColor1}
        icons8Leaderboard501={icons8Leaderboard501}
        propMinWidth1={propMinWidth1}
        propHeight3={propHeight3}
        propColor2={propColor2}
        propMargin={propMargin}
        propPosition1={propPosition1}
        propTop1={propTop1}
        propRight={propRight}
        propPadding={propPadding}
        propDisplay1={propDisplay1}
        propFlexDirection1={propFlexDirection1}
        propHeight4={propHeight4}
        layer241={layer241}
        propMargin1={propMargin1}
        propTop2={propTop2}
        propLeft1={propLeft1}
        propFlex1={propFlex1}
        propPosition2={propPosition2}
        propTop3={propTop3}
        propLeft2={propLeft2}
        propDisplay2={propDisplay2}
        propWidth1={propWidth1}
        propHeight5={propHeight5}
      />
    </div>
  );
};

SecondaryContent.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  icons8Pay50: PropTypes.string,
  icons8Games50: PropTypes.string,
  icons8Leaderboard501: PropTypes.string,
  layer241: PropTypes.string,
  propMarginRight: PropTypes.string,
  propMarginLeft: PropTypes.string,
  propPosition: PropTypes.string,
  propGap: PropTypes.string,
  propMarginTop: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propWidth: PropTypes.string,
  propTop: PropTypes.string,
  propLeft: PropTypes.string,
  propHeight: PropTypes.string,
  propDisplay: PropTypes.string,
  propColor: PropTypes.string,
  propFlexDirection: PropTypes.string,
  propHeight1: PropTypes.string,
  propFlex: PropTypes.string,
  propAlignSelf1: PropTypes.string,
  propMinWidth: PropTypes.string,
  propHeight2: PropTypes.string,
  propColor1: PropTypes.string,
  propMinWidth1: PropTypes.string,
  propHeight3: PropTypes.string,
  propColor2: PropTypes.string,
  propMargin: PropTypes.string,
  propPosition1: PropTypes.string,
  propTop1: PropTypes.string,
  propRight: PropTypes.string,
  propPadding: PropTypes.string,
  propDisplay1: PropTypes.string,
  propFlexDirection1: PropTypes.string,
  propHeight4: PropTypes.string,
  propMargin1: PropTypes.string,
  propTop2: PropTypes.string,
  propLeft1: PropTypes.string,
  propFlex1: PropTypes.string,
  propPosition2: PropTypes.string,
  propTop3: PropTypes.string,
  propLeft2: PropTypes.string,
  propDisplay2: PropTypes.string,
  propWidth1: PropTypes.string,
  propHeight5: PropTypes.string,
};

export default SecondaryContent;
