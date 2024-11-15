import { useState, useCallback } from "react";
import DropMenu from "../components/DropMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";

const Instructions = () => {
  const [isDropMenuOpen, setDropMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openDropMenu = useCallback(() => {
    setDropMenuOpen(true);
  }, []);

  const closeDropMenu = useCallback(() => {
    setDropMenuOpen(false);
  }, []);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onInviteFriendsTextClick = useCallback(() => {
    navigate("/invite-friends");
  }, [navigate]);

  const onLeaderboardTextClick = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onPricingTextClick = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/profile1");
  }, [navigate]);

  return (
    <>
      <div className="w-full h-[1135px] relative bg-[#fafafa] overflow-hidden flex flex-col items-end justify-start pt-[0px] px-[0px] pb-[456px] box-border gap-[84px] leading-[normal] tracking-[normal] text-left text-[48px] text-[#fff] font-[Nexa] mq361:gap-[21px] mq370:h-auto mq370:gap-[42px]">
        {/* <img
          className="w-full h-[1318px] absolute !m-[0] right-[0px] bottom-[-438px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain z-[1]"
          
          alt=""
        /> */}
        <header className="self-stretch h-[64px] relative shrink-0 text-center text-[16px] text-[#000] font-[Nexa]">
          <div className="absolute top-[-10px] left-[-10px] w-[1300px] flex flex-row items-start justify-start p-[10px] box-border gap-[10px]">
            <div className="flex-1 bg-[#fff] flex flex-row items-start justify-start pt-[11px] px-[65px] pb-[9px] box-border gap-[99px] max-w-full">
              <img
                className="h-[44px] w-[144px] relative object-cover"
                loading="lazy"
                src="\logo-2@2x.png"
                alt=""
              />
              <div className="h-[42px] w-[262px] hidden flex-row items-center justify-start">
                <div className="flex-1 flex flex-row items-center justify-between gap-[8px]">
                  <div className="h-[44px] w-[84px] relative">
                    <div className="absolute top-[0px] right-[0px] rounded-[20px] border-[#bbc42f] border-[0.5px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-[19px] w-full h-full">
                      <div className="h-[24px] relative font-extrabold flex items-center justify-center">
                        Login
                      </div>
                    </div>
                  </div>
                  <div className="h-[44px] w-[170px] relative">
                    <div className="absolute top-[0px] right-[0px] rounded-[20px] border-[#bbc42f] border-[0.5px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-[19px] w-full h-full">
                      <div className="h-[24px] flex-1 relative font-extrabold flex items-center justify-center whitespace-nowrap">
                        Sign-up for Free
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="m-[0px] w-[534px] flex flex-col items-start justify-start pt-[13px] px-[0px] pb-[0px] box-border max-w-full">
                <nav className="m-[0px] self-stretch flex flex-row items-start justify-start gap-[20px] text-center text-[16px] text-[#128e96] font-[Nexa]">
                  <a
                    className="[text-decoration:none] w-[45px] relative text-[inherit] flex items-center justify-center min-w-[45px] cursor-pointer"
                    onClick={onHomeTextClick}
                  >
                    Home
                  </a>
                  <a
                    className="[text-decoration:none] w-[90px] relative text-[inherit] flex items-center justify-center whitespace-nowrap cursor-pointer"
                    onClick={onHomeTextClick}
                  >
                    Play Games
                  </a>
                  <a
                    className="[text-decoration:none] flex-1 relative text-[inherit] inline-block min-w-[102px] whitespace-nowrap cursor-pointer"
                    onClick={onInviteFriendsTextClick}
                  >
                    Invite Friends
                  </a>
                  <a
                    className="[text-decoration:none] flex-1 relative text-[inherit] cursor-pointer"
                    onClick={onLeaderboardTextClick}
                  >
                    Leaderboard
                  </a>
                  <div className="w-[56px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5px] box-border">
                    <a
                      className="[text-decoration:none] self-stretch relative text-[inherit] inline-block min-w-[51px] cursor-pointer"
                      onClick={onPricingTextClick}
                    >
                      Pricing
                    </a>
                  </div>
                  <a
                    className="[text-decoration:none] w-[40px] relative text-[inherit] flex items-center justify-center min-w-[40px] cursor-pointer"
                    onClick={openDropMenu}
                  >
                    More
                  </a>
                </nav>
              </nav>
            </div>
            <div
              className="h-[38px] w-[175px] absolute !m-[0] right-[142px] bottom-[22px] cursor-pointer z-[1] text-[#fff]"
              onClick={onFrameContainerClick}
            >
              <div className="absolute top-[-4px] left-[0px] rounded-[6px] bg-[#128e96] w-full h-full" />
              <a className="[text-decoration:none] absolute top-[8px] left-[26px] font-extrabold text-[inherit] flex items-center justify-center w-[122px] h-[20px] whitespace-nowrap">
                My Account
              </a>
            </div>
          </div>
          <div className="absolute top-[30px] left-[848px] w-[17px] h-[6px] z-[2]">
            <img
              className="absolute top-[0px] left-[0px] w-[8.5px] h-[6px] object-contain"
              loading="lazy"
              src="/Line 1.png"
              alt=""
            />
            <img
              className="absolute top-[0px] left-[8.5px] w-[8.5px] h-[6px] object-contain"
              loading="lazy"
              src="/Line 2.png"
              alt=""
            />
          </div>
        </header>
        <div className="w-[936px] flex flex-row items-start justify-center pt-[0px] px-[20px] pb-[55px] box-border max-w-full shrink-0 mq370:pb-[36px] mq370:box-border">
          <div className="w-[666px] flex flex-col items-start justify-start gap-[10px] max-w-full">
            <h1 className="m-[0px] w-[288px] relative text-inherit tracking-[0.01em] font-extrabold font-[inherit] inline-block min-h-[73px] z-[1] mq361:text-[29px] mq400:text-[38px]">
              Instructions
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-[16px]">
              <div className="self-stretch relative leading-[150%] font-extrabold whitespace-pre-wrap inline-block min-h-[168px] z-[2]">
                Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor
                sit amet, consectetur adipiscing elit, Ipsum dolor sit amet,
                consectetur adipiscing elit, ipsum dolor sit amet, consectetur
                adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing
                elit, ipsum dolor sit amet, consectetur adipiscing elit, Ipsum
                dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
                amet, consectetur adipiscing elit, Ipsum dolor sit amet,
                consectetur adipiscing elit, ipsum dolor sit amet, consectetur
                adipiscing elit, Ipsum dolor sit amet, consec
              </div>
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-[681.8px] w-[1371px] absolute !m-[0] top-[-343.8px] left-[-569px] object-cover"
                  src="\Brain Builders 15.png"
                  alt=""
                />
                <div className="h-[264px] flex-1 relative leading-[150%] font-extrabold whitespace-pre-wrap inline-block max-w-full z-[2]">{`dipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit `}</div>
              </div>
            </div>
          </div>
        </div>
        <footer className="self-stretch flex flex-row items-start justify-center py-[0px] pl-[20px] pr-[28px] box-border max-w-full">
          <FrameComponent7
            propWidth="856px"
            propFlex="unset"
            propMinHeight="unset"
            propHeight="56px"
            propMinHeight1="unset"
            propHeight1="56px"
          />
        </footer>
      </div>
      {isDropMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropMenu}
        >
          <DropMenu onClose={closeDropMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Instructions;
