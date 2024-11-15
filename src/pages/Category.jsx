import { useState, useCallback } from "react";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import CategoryRow from "../components/CategoryRow";
import ButtomNavigation from "../components/ButtomNavigation";
import SecondaryContent from "../components/SecondaryContent";

const Category = () => {
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

  const onNavigationCellContainerClick = useCallback(() => {
    navigate("/subscribe");
  }, [navigate]);

  const onNavigationRowContainerClick1 = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onNavigationCellContainerClick1 = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[20px] bg-[#fff] overflow-hidden flex flex-row items-start justify-start pt-[20px] px-[0px] pb-[0.3px] box-border gap-[58px] leading-[normal] tracking-[normal] mq409:flex-wrap">
        <main className="h-[951px] w-full absolute !m-[0] top-[-19px] left-[-3px] mq389:h-auto mq389:min-h-[951]">
          <img
            className="absolute top-[0px] left-[calc(50%_-_217.5px)] w-full h-full object-contain"
            alt=""
            src="/rectangle-69@2x.png"
          />
          <img
            className="absolute top-[19px] left-[3px] rounded-[4px] w-[430px] h-[72px] overflow-hidden z-[3]"
            alt=""
            src="/frame-427319836.svg"
          />
          <section className="absolute top-[23px] left-[3px] [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] w-full flex flex-row items-start justify-start py-[150px] px-[7px] box-border min-h-[928px] max-w-full z-[1]">
            <div className="h-[928px] w-[435px] relative [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] hidden max-w-full" />
            <CategoryRow />
          </section>
        </main>
        <div className="h-[76px] w-[435px] relative bg-[#fff] hidden max-w-full z-[1]" />
        <div className="w-[430px] flex flex-col items-end justify-start py-[0px] px-[32px] box-border gap-[773px] min-w-[430px] shrink-0 max-w-full mq389:min-w-full mq409:flex-1">
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[6px]">
              <div
                className="w-[28px] h-[14px] relative cursor-pointer z-[4]"
                onClick={openSlideMenu}
              >
                <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
              </div>
            </div>
            <div
              className="rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] cursor-pointer z-[4]"
              onClick={onNavigationRowContainerClick}
            >
              <div className="h-[41px] w-[102px] relative rounded-[7px] bg-[#fff] hidden" />
              <img
                className="h-[28px] w-[89px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/logo-1@2x.png"
              />
            </div>
          </div>
          <ButtomNavigation
            propMarginRight="-34px"
            propMarginLeft="unset"
            propPosition="relative"
            propGap="41px"
            propMarginTop="unset"
            propAlignSelf="unset"
            propWidth="433px"
            propTop="unset"
            propLeft="unset"
            onHomeButtonContainerClick={onNavigationRowContainerClick}
            maskGroup="/mask-group@2x.png"
            propHeight="unset"
            propDisplay="unset"
            propColor="#097586"
            onFrameContainerClick={onNavigationCellContainerClick}
            propFlexDirection="column"
            propHeight1="unset"
            propFlex="unset"
            icons8Pay50="/icons8pay50@2x.png"
            propAlignSelf1="unset"
            icons8Games50="/mask-group-11@2x.png"
            propMinWidth="50px"
            propHeight2="unset"
            propColor1="#fe8601"
            onLeaderBoardButtonContainerClick={onNavigationRowContainerClick1}
            icons8Leaderboard501="/icons8leaderboard50-1@2x.png"
            propMinWidth1="55px"
            propHeight3="unset"
            propColor2="#097586"
            onFrameContainerClick1={onNavigationCellContainerClick1}
            propMargin="0 !important"
            propPosition1="absolute"
            propTop1="28.8px"
            propRight="25px"
            propPadding="29px 0px 0px"
            propDisplay1="flex"
            propFlexDirection1="row"
            propHeight4="unset"
            layer241="/layer-24-11@2x.png"
            propMargin1="0 !important"
            propTop2="-29.1px"
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
        <SecondaryContent
          maskGroup="/mask-group-2@2x.png"
          icons8Pay50="/icons8pay50-1@2x.png"
          icons8Games50="/icons8games501@2x.png"
          icons8Leaderboard501="/icons8leaderboard50-1-1@2x.png"
          layer241="/layer-24-1-1@2x.png"
          propMarginRight="unset"
          propMarginLeft="unset"
          propPosition="unset"
          propGap="20px"
          propMarginTop="unset"
          propAlignSelf="stretch"
          propWidth="unset"
          propTop="unset"
          propLeft="unset"
          propHeight="11px"
          propDisplay="inline-block"
          propColor="#fe8601"
          propFlexDirection="row"
          propHeight1="47.7px"
          propFlex="1"
          propAlignSelf1="stretch"
          propMinWidth="unset"
          propHeight2="11px"
          propColor1="#097586"
          propMinWidth1="unset"
          propHeight3="11px"
          propColor2="#097586"
          propMargin="unset"
          propPosition1="unset"
          propTop1="unset"
          propRight="unset"
          propPadding="3.8px 0px 0px"
          propDisplay1="unset"
          propFlexDirection1="unset"
          propHeight4="40px"
          propMargin1="unset"
          propTop2="0.2px"
          propLeft1="2px"
          propFlex1="unset"
          propPosition2="absolute"
          propTop3="29px"
          propLeft2="0px"
          propDisplay2="inline-block"
          propWidth1="31px"
          propHeight5="11px"
        />
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

export default Category;
