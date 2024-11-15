import { useState, useCallback } from "react";
import DropMenu from "../components/DropMenu";
import PortalPopup from "../components/PortalPopup";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent7 from "../components/FrameComponent7";
import { useNavigate } from "react-router-dom";

const Subcategory1 = () => {
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
      <div className="w-full relative bg-[#fafafa] overflow-hidden flex flex-col items-end justify-start pt-[3px] px-[0px] pb-[135px] box-border gap-[43px] leading-[normal] tracking-[normal] text-center text-[46px] text-[#0b2239] font-[Nexa] mq370:gap-[21px]">
        <img
          className="w-full h-[1318px] absolute !m-[0] right-[0px] bottom-[27px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain"
          alt=""
          src="/rectangle-4@2x.png"
        />
        <div className="self-stretch [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] flex flex-col items-end justify-start pt-[187px] px-[103px] pb-[304px] box-border gap-[35px] max-w-full z-[2] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border mq370:gap-[17px] mq370:pt-[79px] mq370:px-[51px] mq370:pb-[129px] mq370:box-border mq400:pt-[122px] mq400:pb-[198px] mq400:box-border">
          <div className="w-[1280px] h-[983px] relative [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] hidden max-w-full" />
          <div className="w-[1061px] flex flex-row items-start justify-center max-w-full">
            <div className="w-[243px] rounded-[15px] flex flex-row items-start justify-start py-[0px] px-[47px] box-border z-[3]">
              <h1 className="m-[0px] flex-1 relative text-inherit leading-[58px] font-normal font-[inherit] mq361:text-[28px] mq361:leading-[37px] mq400:text-[37px] mq400:leading-[50px]">
                Sports
              </h1>
            </div>
          </div>
          <FrameComponent4 />
        </div>
        <img
          className="w-[1290px] h-[939px] absolute !m-[0] top-[47px] right-[-12px] object-contain z-[1]"
          alt=""
          src="/progress@2x.png"
        />
        <footer className="w-[1234px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
          <FrameComponent7
            propWidth="856px"
            propFlex="unset"
            propMinHeight="56px"
            propHeight="unset"
            propMinHeight1="56px"
            propHeight1="unset"
          />
        </footer>
        <header className="w-full h-[64px] absolute !m-[0] top-[0px] right-[0px] left-[0px] z-[3] text-center text-[16px] text-[#000] font-[Nexa]">
          <div className="absolute top-[-10px] left-[-10px] w-[1300px] flex flex-row items-start justify-start p-[10px] box-border gap-[10px]">
            <div className="flex-1 bg-[#fff] flex flex-row items-start justify-start pt-[11px] px-[65px] pb-[9px] box-border gap-[99px] max-w-full">
              <img
                className="h-[44px] w-[144px] relative object-cover"
                loading="lazy"
                alt=""
                src="/logo-2@2x.png"
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
                <nav className="m-[0px] self-stretch flex flex-row items-start justify-start gap-[20px] text-center text-[16px] text-[#128e96] font-[Abel]">
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

export default Subcategory1;
