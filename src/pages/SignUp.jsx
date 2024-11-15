import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RightContent from "../components/RightContent";
import ButtomNavigation from "../components/ButtomNavigation";

const SignUp = () => {
  const navigate = useNavigate();

  const onHomeButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSubscribeButtonContainerClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onPlayGamesIconContainerClick = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  const onLeaderboardIconContainerClick = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onProfileButtonContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="w-full h-[932px] relative rounded-[20px] bg-[#fafafa] overflow-hidden flex flex-col items-start justify-start pt-[260px] px-[0px] pb-[0.3px] box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-[14px] text-[#002724] font-['Satoshi_Variable'] mq352:h-auto">
      <div className="w-[480px] hidden flex-col items-start justify-start max-w-full text-[#0b2239]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[93px] h-[19px] relative font-medium inline-block">
              Sign in as
            </div>
            <div className="self-stretch h-[48px] relative text-[#013467] font-[Abel]">
              <div className="absolute h-full w-[47.92%] top-[0%] right-[52.08%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[-0.17%] bottom-[0%] left-[0.17%] rounded-[4px] bg-[#f3f5f5] border-[rgba(255,255,255,0.2)] border-[0.4px] border-solid box-border" />
                <div className="absolute top-[31.25%] left-[5.61%] leading-[125.34%]">
                  Individual
                </div>
                <img
                  className="absolute h-[34.79%] w-[7.26%] top-[31.25%] right-[5.78%] bottom-[33.96%] left-[86.96%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/radiobutton1.svg"
                />
              </div>
              <div className="absolute h-full w-[47.92%] top-[0%] right-[0%] bottom-[0%] left-[52.08%]">
                <div className="absolute h-full w-full top-[0%] right-[0.13%] bottom-[0%] left-[-0.13%] rounded-[4px] bg-[#f3f5f5] border-[rgba(255,255,255,0.2)] border-[0.4px] border-solid box-border" />
                <div className="absolute top-[31.25%] left-[5.48%] leading-[125.34%]">
                  Company
                </div>
                <img
                  className="absolute h-[34.79%] w-[7.26%] top-[31.25%] right-[5.78%] bottom-[33.96%] left-[86.96%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/radiobutton1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[162px] relative font-medium hidden">
        Already have an account
      </div>
      <b className="relative [text-decoration:underline] hidden font-[Abel] min-w-[45px]">
        Sign In
      </b>
      <div className="relative font-medium hidden min-w-[100px]">
        Having trouble?
      </div>
      <b className="relative [text-decoration:underline] hidden font-[Abel] min-w-[63px]">
        Chat now
      </b>
      <section className="mt-[-367px] self-stretch h-[343px] flex flex-row items-start justify-start relative max-w-full shrink-0">
        <div className="h-[22.5px] w-[84.7px] !m-[0] absolute top-[129.5px] left-[126px] rounded-[10.72px] border-[#bbc42f] border-[0.3px] border-solid box-border" />
        <img
          className="h-[343px] flex-1 relative rounded-t-[0px] rounded-b-[20px] max-w-full overflow-hidden object-contain shrink-0 z-[1]"
          alt=""
          src="/brain-builders-landing-page-0501-3@2x.png"
        />
      </section>
      <RightContent />
      <ButtomNavigation
        propMarginRight="unset"
        propMarginLeft="-1px"
        propPosition="relative"
        propGap="41px"
        propMarginTop="unset"
        propAlignSelf="stretch"
        propWidth="unset"
        propTop="unset"
        propLeft="unset"
        onHomeButtonContainerClick={onHomeButtonContainerClick}
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
        onPlayGamesButtonContainerClick={onPlayGamesIconContainerClick}
        icons8Games50="/icons8games50@2x.png"
        propMinWidth="50px"
        propHeight2="unset"
        propColor1="#097586"
        onLeaderBoardButtonContainerClick={onLeaderboardIconContainerClick}
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

export default SignUp;
