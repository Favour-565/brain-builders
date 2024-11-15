import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import ButtomNavigation from "../components/ButtomNavigation";

const Levels = () => {
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

  const onSubscribeButtonContainerClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onProfileButtonContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onLevelIndicatorContainerClick = useCallback(() => {
    navigate("/question");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative rounded-[20px] bg-[#fafafa] overflow-hidden flex flex-row items-end justify-start gap-[73px] leading-[normal] tracking-[normal] text-center text-[16px] text-[#fff] font-[Abel] mq321:gap-[18px] mq409:flex-wrap">
        <div className="h-[932px] w-[430px] flex flex-col items-end justify-start relative shrink-0 max-w-full mq386:h-auto">
          <main className="mt-[-19px] mr-[-2px] self-stretch h-[951px] relative shrink-0 max-w-[102%] mq386:h-auto mq386:min-h-[951]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_217.5px)] w-full h-full object-contain"
              alt=""
              src="/rectangle-692@2x.png"
            />
            <section className="absolute top-[23px] left-[3px] [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] w-full flex flex-col items-start justify-start pt-[144px] pb-[207px] pl-[57px] pr-[53px] box-border gap-[55.5px] max-w-full z-[1] text-center text-[22px] text-[#fff] font-[Abel]">
              <div className="w-[435px] h-[928px] relative [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq320:gap-[20px]">
                <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[74px] pr-[79px] mq320:pl-[20px] mq320:pr-[20px] mq320:box-border">
                  <Button
                    className="h-[50px] flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[2]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#118e96",
                      fontSize: "20",
                      background: "#fff",
                      borderRadius: "9px",
                      "&:hover": { background: "#fff" },
                      height: 50,
                    }}
                  >
                    Select level
                  </Button>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq386:flex-wrap">
                  <div className="w-[128px] flex flex-col items-start justify-start gap-[9px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-[0px] px-[4px]">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="h-[120px] flex-1 relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_#1ac547,_#076921)] border-[#fafafa] border-[0px] border-solid box-border w-full h-full z-[2]" />
                          <img
                            className="absolute top-[26px] left-[31px] w-[58px] h-[68px] object-cover z-[3]"
                            loading="lazy"
                            alt=""
                            src="/frame-427319915@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-[5px] bg-[#0b2239] flex flex-row items-start justify-start py-[8px] px-[29px] whitespace-nowrap cursor-pointer z-[2]"
                      onClick={onLevelIndicatorContainerClick}
                    >
                      <a className="[text-decoration:none] w-[69px] relative leading-[20px] text-[inherit] inline-block min-w-[69px]">
                        Level 1
                      </a>
                    </div>
                  </div>
                  <div className="w-[128px] flex flex-col items-start justify-start gap-[9px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-[0px] px-[4px]">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="h-[120px] flex-1 relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_#30749f,_#0f3556)] border-[#fafafa] border-[0px] border-solid box-border w-full h-full z-[2]" />
                          <img
                            className="absolute top-[22px] left-[31px] w-[58px] h-[68px] object-cover z-[3]"
                            alt=""
                            src="/frame-427319915-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      className="self-stretch h-[36px] z-[2]"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "22",
                        background: "#0b2239",
                        borderRadius: "5px",
                        "&:hover": { background: "#0b2239" },
                        height: 36,
                      }}
                    >
                      Level 2
                    </Button>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq386:flex-wrap mq386:justify-center">
                <div className="w-[128px] flex flex-col items-start justify-start gap-[9px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-[0px] px-[4px]">
                    <div className="flex-1 flex flex-row items-start justify-start">
                      <div className="h-[120px] flex-1 relative">
                        <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_#30749f,_#0f3556)] border-[#fafafa] border-[0px] border-solid box-border w-full h-full z-[2]" />
                        <img
                          className="absolute top-[22px] left-[31px] w-[58px] h-[68px] object-cover z-[3]"
                          alt=""
                          src="/frame-427319915-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    className="self-stretch h-[36px] z-[2]"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "22",
                      background: "#0b2239",
                      borderRadius: "5px",
                      "&:hover": { background: "#0b2239" },
                      height: 36,
                    }}
                  >
                    Level 3
                  </Button>
                </div>
                <div className="w-[128px] flex flex-col items-start justify-start gap-[9px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-[0px] px-[4px]">
                    <div className="flex-1 flex flex-row items-start justify-start">
                      <div className="h-[120px] flex-1 relative">
                        <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_#30749f,_#0f3556)] border-[#fafafa] border-[0px] border-solid box-border w-full h-full z-[2]" />
                        <img
                          className="absolute top-[22px] left-[31px] w-[58px] h-[68px] object-cover z-[3]"
                          alt=""
                          src="/frame-427319915-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    className="self-stretch h-[36px] z-[2]"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "22",
                      background: "#0b2239",
                      borderRadius: "5px",
                      "&:hover": { background: "#0b2239" },
                      height: 36,
                    }}
                  >
                    Level 4
                  </Button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-[0px] pl-[0px] pr-[4px]">
                <Button
                  className="h-[46px] w-[108px] z-[4]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "20",
                    background: "#0b2239",
                    borderRadius: "6px",
                    "&:hover": { background: "#0b2239" },
                    width: 108,
                    height: 46,
                  }}
                >
                  Next
                </Button>
              </div>
            </section>
            <img
              className="absolute top-[19px] left-[3px] rounded-[4px] w-[430px] h-[72px] overflow-hidden z-[4]"
              alt=""
              src="/frame-427319836.svg"
            />
            <ButtomNavigation
              propMarginRight="unset"
              propMarginLeft="unset"
              propPosition="absolute"
              propGap="41px"
              propMarginTop="unset"
              propAlignSelf="unset"
              propWidth="100%"
              propTop="853px"
              propLeft="2px"
              onHomeButtonContainerClick={onFrameContainerClick}
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
              onPlayGamesButtonContainerClick={onFrameContainerClick1}
              icons8Games50="/icons8games50@2x.png"
              propMinWidth="50px"
              propHeight2="unset"
              propColor1="#097586"
              onLeaderBoardButtonContainerClick={onFrameContainerClick2}
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
          </main>
          <div
            className="!m-[0] absolute top-[20px] right-[32px] rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] cursor-pointer z-[5]"
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
          <div
            className="w-[28px] h-[14px] absolute !m-[0] top-[41px] left-[36px] cursor-pointer z-[5]"
            onClick={openSlideMenu}
          >
            <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
          </div>
        </div>
        <div className="h-[404px] w-[139px] flex flex-col items-start justify-start shrink-0">
          <div className="self-stretch h-[47px] shadow-[0px_-4px_6.4px_rgba(0,_0,_0,_0.25)_inset] rounded-[26px] bg-[#e34033] flex flex-row items-start justify-start py-[5px] px-[29px] box-border shrink-0 whitespace-nowrap">
            <h1 className="m-[0px] self-stretch flex-1 relative text-inherit leading-[37px] font-normal font-[inherit]">
              Reset time
            </h1>
          </div>
        </div>
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

export default Levels;
