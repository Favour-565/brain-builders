import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

import ButtomNavigation from "../components/ButtomNavigation";
import SecondaryContent from "../components/SecondaryContent";
import Game from "../components/Game";

const Learn = () => {
  const [isSlideMenuOpen, setSlideMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openSlideMenu = useCallback(() => {
    setSlideMenuOpen(true);
  }, []);

  const closeSlideMenu = useCallback(() => {
    setSlideMenuOpen(false);
  }, []);

  const onHomeIconContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSubscribeButtonContainerClick = useCallback(() => {
    navigate("/subscribe");
  }, [navigate]);

  const onLeaderboardIconContainerClick = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onMeButtonContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onGame1ContainerClick = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[20px] bg-[#fff] overflow-hidden flex flex-row items-start justify-start pt-[20px] px-[0px] pb-[0px] box-border gap-[58px] leading-[normal] tracking-[normal] mq409:flex-wrap">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute top-[0px] left-[0px] w-[435px] h-[951px] object-contain"
            alt=""
            src="/rectangle-691@2x.png"
          />
          <main className="absolute top-[-1px] left-[-4px] [backdrop-filter:blur(35px)] rounded-[10px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.1),_rgba(9,_117,_134,_0.5))] w-full h-full z-[2]">
            <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(35px)] rounded-[10px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.1),_rgba(9,_117,_134,_0.5))] w-full h-full hidden" />
            <Button
              className="absolute top-[162px] left-[71px] shadow-[0px_3px_6.2px_rgba(0,_0,_0,_0.15),_0px_0px_16.4px_2px_rgba(199,_228,_231,_0.49)_inset] z-[3]"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#097586",
                fontSize: "22",
                background: "#fff",
                borderRadius: "42px",
                "&:hover": { background: "#fff" },
                width: 295,
                height: 60,
              }}
            >
              Click to Learn
            </Button>
            <section className="absolute top-[267px] left-[42px] w-[360px] h-[340.5px] z-[3] text-center text-[13px] text-[#fff] font-[Abel]">
              <Game
                image4="/image-4@2x.png"
                challengeYourself1="/challenge-yourself-1@2x.png"
                vector4="/vector-4.svg"
              />
              <Game
                propTop="190px"
                propBackgroundImage="url('/image-3@2x.png')"
                propLeft="1px"
                image4="/image-3@2x.png"
                challengeYourself1="/take-exams@2x.png"
                vector4="/vector-3.svg"
                propWidth="71px"
              />
              <Game
                propTop="0px"
                propBackgroundImage="url('/image-21@2x.png')"
                propLeft="196px"
                image4="/image-21@2x.png"
                challengeYourself1="/brain-tutor-1@2x.png"
                vector4="/vector-2.svg"
                propWidth="79px"
              />
              <div
                className="absolute top-[0px] left-[0px] w-[164px] h-[150.5px] bg-[url('/public/image-11@2x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer"
                onClick={onGame1ContainerClick}
              >
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                  alt=""
                  src="/image-11@2x.png"
                />
                <img
                  className="absolute top-[24.1px] left-[30px] w-[104.6px] h-[52.3px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/play-and-learn@2x.png"
                />
                <div className="absolute top-[96.4px] left-[35px] w-[94.7px] h-[30.3px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <h2 className="m-[0px] absolute top-[2.6px] left-[5px] text-inherit leading-[122.2%] font-normal font-[inherit] inline-block w-[83px] h-[15px] z-[2]">
                    PLAY NOW
                  </h2>
                </div>
              </div>
            </section>
            <img
              className="absolute w-[calc(100%_-_10px)] top-[1px] right-[6px] left-[4px] rounded-[4px] max-w-full overflow-hidden h-[72px] z-[3]"
              alt=""
              src="/frame-427319836.svg"
            />
          </main>
        </div>
        <div className="w-[430px] flex flex-col items-start justify-start pt-[3px] px-[0px] pb-[0px] box-border relative min-w-[430px] shrink-0 max-w-full mq470:min-w-full mq409:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start pt-[0px] pb-[0.3px] px-[0px]">
            <div className="self-stretch h-[928px] relative [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] z-[1]" />
            <ButtomNavigation
              propMarginRight="unset"
              propMarginLeft="-1px"
              propPosition="relative"
              propGap="41px"
              propMarginTop="-117px"
              propAlignSelf="stretch"
              propWidth="unset"
              propTop="unset"
              propLeft="unset"
              onHomeButtonContainerClick={onHomeIconContainerClick}
              maskGroup="/mask-group@2x.png"
              propHeight="unset"
              propDisplay="unset"
              propColor="#097586"
              onFrameContainerClick={onSubscribeButtonContainerClick}
              propFlexDirection="column"
              propHeight1="unset"
              propFlex="unset"
              icons8Pay50="/icons8pay50@2x.png"
              propAlignSelf1="unset"
              icons8Games50="/mask-group-11@2x.png"
              propMinWidth="50px"
              propHeight2="unset"
              propColor1="#fe8601"
              onLeaderBoardButtonContainerClick={
                onLeaderboardIconContainerClick
              }
              icons8Leaderboard501="/icons8leaderboard50-1@2x.png"
              propMinWidth1="55px"
              propHeight3="unset"
              propColor2="#097586"
              onFrameContainerClick1={onMeButtonContainerClick}
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
          <div
            className="!m-[0] absolute top-[0px] right-[32px] rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] cursor-pointer z-[4]"
            onClick={onHomeIconContainerClick}
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
            className="w-[28px] h-[14px] absolute !m-[0] top-[21px] left-[36px] cursor-pointer z-[4]"
            onClick={openSlideMenu}
          >
            <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
          </div>
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

export default Learn;
