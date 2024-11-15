import { useState, useCallback } from "react";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent10 from "../components/FrameComponent10";
import ButtomNavigation from "../components/ButtomNavigation";
import SecondaryContent from "../components/SecondaryContent";

const SubCategory = () => {
  const [isSlideMenuOpen, setSlideMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openSlideMenu = useCallback(() => {
    setSlideMenuOpen(true);
  }, []);

  const closeSlideMenu = useCallback(() => {
    setSlideMenuOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSubscribeButtonOneClick = useCallback(() => {
    navigate("/subscribe");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onCategoryLabelsContainerClick = useCallback(() => {
    navigate("/levels");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[20px] bg-[#fff] overflow-hidden flex flex-row items-start justify-start pt-[20px] px-[0px] pb-[0.3px] box-border gap-[58px] leading-[normal] tracking-[normal] mq409:flex-wrap">
        <main className="h-[951px] w-full absolute !m-[0] top-[-19px] left-[-3px]">
          <img
            className="absolute top-[0px] left-[calc(50%_-_217.5px)] w-full h-full object-contain"
            alt=""
            src="/rectangle-693@2x.png"
          />
          <img
            className="absolute top-[19px] left-[3px] rounded-[4px] w-[430px] h-[72px] overflow-hidden z-[3]"
            alt=""
            src="/frame-427319836.svg"
          />
          <section className="absolute top-[23px] left-[3px] [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] w-full flex flex-col items-start justify-start pt-[140px] pb-[311px] pl-[8px] pr-[7px] box-border gap-[11px] max-w-full z-[1] text-center text-[24px] text-[#0b2239] font-[Nexa]">
            <div className="w-[435px] h-[928px] relative [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center">
              <div className="h-[58px] w-[243px] rounded-[15px] flex flex-row items-start justify-start pt-[20px] pb-[0px] pl-[68px] pr-[67px] box-border z-[2]">
                <h1 className="m-[0px] flex-1 relative text-inherit leading-[47px] font-normal font-[inherit]">
                  Sports
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[10px] px-[40px] pb-[65px] box-border relative gap-[10px] max-w-full z-[2] text-[10px] text-[#fff]">
              <div className="w-full !m-[0] absolute right-[0px] bottom-[-10px] left-[0px] flex flex-row items-center justify-start p-[10px] box-border max-w-full h-full">
                <img
                  className="h-[398px] flex-1 relative rounded-[29px] max-w-full overflow-hidden object-cover"
                  alt=""
                  src="/rectangle-711@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-[0px] px-[13px] box-border gap-[50px] max-w-full z-[1] mq335:gap-[25px]">
                <div className="w-[452px] flex flex-row items-center justify-center">
                  <button className="cursor-pointer padding-[60px]  [border:none] bg-[#fff]  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[6px] flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-[#e6e6e6]">
                    <div className="flex-1 relative w-[296px] text-[18px]  leading-[20px] font-[Nexa] text-[#118e96] text-center">
                      Select a Sub category
                    </div>
                  </button>
                </div>
                <div className="self-stretch h-[252px] flex flex-row items-center justify-center flex-wrap content-center relative gap-x-[28px] gap-y-[91px]">
                  <div className="!m-[0] absolute top-[0px] left-[24px] flex flex-col items-end justify-start gap-[7px]">
                    <img
                      className="w-[85px] h-[85px] relative rounded-[50%] object-cover"
                      loading="lazy"
                      alt=""
                      src="/ellipse-7@2x.png"
                    />
                    <div className="flex flex-row items-start justify-end py-[0px] pl-[8px] pr-[5px]">
                      <div
                        className="rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[17px] cursor-pointer"
                        onClick={onCategoryLabelsContainerClick}
                      >
                        <a className="[text-decoration:none] w-[37px] relative leading-[20px] text-[inherit] inline-block min-w-[37px]">
                          Science
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-[85px] !m-[0] absolute top-[0px] left-[200px] flex flex-col items-end justify-start gap-[7px]">
                    <img
                      className="w-[85px] h-[85px] relative rounded-[50%] object-cover"
                      alt=""
                      src="/ellipse-7-1@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[8px] pr-[5px]">
                      <div
                        className="flex-1 rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[19px] cursor-pointer"
                        onClick={onCategoryLabelsContainerClick}
                      >
                        <a className="[text-decoration:none] flex-1 relative leading-[20px] text-[inherit]">
                          Sports
                        </a>
                      </div>
                    </div>
                  </div>
                  <FrameComponent10
                    ellipse7="/ellipse-7-3@2x.png"
                    facts="Facts"
                  />
                  <FrameComponent10
                    propLeft="200px"
                    ellipse7="/ellipse-7-2@2x.png"
                    facts="Technology"
                    propWidth="53px"
                    propMinWidth="53px"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="h-[76px] w-[435px] relative bg-[#fff] hidden max-w-full z-[1]" />
        <div className="w-[430px] flex flex-col items-end justify-start py-[0px] px-[32px] box-border gap-[773px] min-w-[430px] shrink-0 max-w-full mq470:min-w-full mq409:flex-1">
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
              onClick={onFrameContainerClick}
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
            onHomeButtonContainerClick={onFrameContainerClick}
            maskGroup="/mask-group@2x.png"
            propHeight="unset"
            propDisplay="unset"
            propColor="#097586"
            onFrameContainerClick={onSubscribeButtonOneClick}
            propFlexDirection="column"
            propHeight1="unset"
            propFlex="unset"
            icons8Pay50="/icons8pay50@2x.png"
            propAlignSelf1="unset"
            onPlayGamesButtonContainerClick={onFrameContainerClick1}
            icons8Games50="/mask-group-11@2x.png"
            propMinWidth="50px"
            propHeight2="unset"
            propColor1="#fe8601"
            onLeaderBoardButtonContainerClick={onFrameContainerClick2}
            icons8Leaderboard501="/icons8leaderboard50-1@2x.png"
            propMinWidth1="55px"
            propHeight3="unset"
            propColor2="#097586"
            onFrameContainerClick1={onFrameContainerClick2}
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

export default SubCategory;
