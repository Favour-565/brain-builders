import { useState, useCallback } from "react";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent11 from "../components/FrameComponent11";
import ButtomNavigation from "../components/ButtomNavigation";

const BuyCoins = () => {
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

  const onIcons8LeaderboardClick = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onProfileButtonContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative rounded-[20px] bg-[#fafafa] overflow-hidden flex flex-row items-end justify-start gap-[73px] leading-[normal] tracking-[normal] text-center text-[16px] text-[#fff] font-[Abel] mq321:gap-[18px] mq409:flex-wrap">
        <div className="h-[932px] w-[430px] flex flex-col items-end justify-start relative shrink-0 max-w-full mq394:h-auto">
          <main className="mt-[-19px] mr-[-2px] self-stretch h-[951px] relative shrink-0 max-w-[102%] mq394:h-auto mq394:min-h-[951]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_217.5px)] w-full h-full object-contain"
              alt=""
              src="/rectangle-692@2x.png"
            />
            <section className="absolute top-[28px] left-[3px] [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] w-full flex flex-row items-start justify-start py-[101px] px-[48px] box-border min-h-[923px] max-w-full z-[1] text-center text-[12px] text-[#fff] font-[Abel]">
              <div className="h-[928px] w-[435px] relative [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] hidden max-w-full" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[43px] max-w-full z-[2] mq334:gap-[21px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq394:flex-wrap">
                  <FrameComponent11 x30="x 30" k351="/k-35-1@2x.png" />
                  <FrameComponent11
                    propBackgroundImage="url('/frame-427319922@3x.png')"
                    x30="x 70"
                    propTextDecoration="unset"
                    propDisplay="unset"
                    k351="/k-35-1@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq394:flex-wrap">
                  <div className="w-[139px] rounded-[11px] flex flex-col items-start justify-start pt-[8px] pb-[3px] pl-[33px] pr-[32px] box-border gap-[92px] bg-[url('/public/frame-427319922@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <div className="w-[68px] flex flex-row items-start justify-start py-[0px] pl-[7px] pr-[8px] box-border">
                      <div className="h-[15px] flex-1 rounded-[3px] bg-[#097586] flex flex-row items-start justify-start py-[0px] px-[3px] box-border whitespace-nowrap">
                        <div className="mt-[-2px] flex-1 relative leading-[21px]">
                          x 175
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[105px] h-[106px] relative object-cover hidden"
                      alt=""
                      src="/k-35-1@2x.png"
                    />
                    <div className="w-[68px] h-[15px] rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[11px] box-border z-[1]">
                      <div className="mt-[-2px] flex-1 relative leading-[21px]">
                        50NGN
                      </div>
                    </div>
                  </div>
                  <div className="w-[139px] rounded-[11px] flex flex-col items-start justify-start pt-[8px] pb-[3px] pl-[33px] pr-[32px] box-border gap-[92px] bg-[url('/public/frame-427319922@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <div className="w-[68px] flex flex-row items-start justify-start py-[0px] pl-[7px] pr-[8px] box-border">
                      <div className="h-[15px] flex-1 rounded-[3px] bg-[#097586] flex flex-row items-start justify-start py-[0px] px-[3px] box-border whitespace-nowrap">
                        <div className="mt-[-2px] flex-1 relative leading-[21px]">
                          x 480
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[84px] h-[86px] relative object-cover hidden"
                      alt=""
                      src="/k-35-11@2x.png"
                    />
                    <img
                      className="w-[84px] h-[86px] relative object-cover hidden"
                      alt=""
                      src="/k-35-11@2x.png"
                    />
                    <div className="w-[68px] h-[15px] rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[11px] box-border z-[2]">
                      <div className="mt-[-2px] flex-1 relative leading-[21px]">
                        50NGN
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq394:flex-wrap">
                  <img
                    className="h-[141px] w-[139px] relative object-cover min-h-[141px]"
                    loading="lazy"
                    alt=""
                    src="/frame-427319930@2x.png"
                  />
                  <div className="w-[139px] rounded-[11px] flex flex-col items-start justify-start pt-[8px] pb-[3px] pl-[33px] pr-[32px] box-border gap-[92px] bg-[url('/public/frame-427319922@3x.png')] bg-cover bg-no-repeat bg-[top]">
                    <div className="w-[68px] flex flex-row items-start justify-start py-[0px] pl-[3px] pr-[4px] box-border">
                      <div className="h-[15px] flex-1 rounded-[3px] bg-[#097586] flex flex-row items-start justify-start py-[0px] px-[3px] box-border whitespace-nowrap">
                        <div className="mt-[-2px] flex-1 relative leading-[21px]">
                          x 60000
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[67px] h-[68px] relative object-cover hidden"
                      alt=""
                      src="/k-35-12@2x.png"
                    />
                    <img
                      className="w-[67px] h-[68px] relative object-cover hidden"
                      alt=""
                      src="/k-35-12@2x.png"
                    />
                    <img
                      className="w-[67px] h-[68px] relative object-cover hidden"
                      alt=""
                      src="/k-35-12@2x.png"
                    />
                    <img
                      className="w-[67px] h-[68px] relative object-cover hidden"
                      alt=""
                      src="/k-35-12@2x.png"
                    />
                    <div className="w-[68px] h-[15px] rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[11px] box-border">
                      <div className="mt-[-2px] flex-1 relative leading-[21px]">
                        50NGN
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[236px] flex flex-row items-start justify-end">
                  <img
                    className="h-[141px] w-[139px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/frame-427319929@2x.png"
                  />
                </div>
              </div>
            </section>
            <img
              className="absolute top-[19px] left-[3px] rounded-[4px] w-[430px] h-[72px] overflow-hidden z-[3]"
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
              icons8Leaderboard501="/icons8leaderboard50-1@2x.png"
              onIcons8LeaderboardClick={onIcons8LeaderboardClick}
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
          <div className="!m-[0] absolute top-[20px] right-[32px] rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] z-[4]">
            <div className="h-[41px] w-[102px] relative rounded-[7px] bg-[#fff] hidden" />
            <img
              className="h-[28px] w-[89px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
          <div
            className="w-[28px] h-[14px] absolute !m-[0] top-[41px] left-[36px] cursor-pointer z-[4]"
            onClick={openSlideMenu}
          >
            <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
          </div>
        </div>
        <div className="h-[404px] w-[139px] flex flex-col items-start justify-start shrink-0">
          <div className="self-stretch h-[47px] shadow-[0px_-4px_6.4px_rgba(0,_0,_0,_0.25)_inset] rounded-[26px] bg-[#e34033] flex flex-row items-start justify-start py-[5px] px-[29px] box-border shrink-0 whitespace-nowrap">
            <div className="self-stretch flex-1 relative leading-[37px]">
              Reset time
            </div>
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

export default BuyCoins;
