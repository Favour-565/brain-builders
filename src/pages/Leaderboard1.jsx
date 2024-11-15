import { useState, useCallback } from "react";
import DropMenu from "../components/DropMenu";
import PortalPopup from "../components/PortalPopup";
import UserScores from "../components/UserScores";
import FrameComponent7 from "../components/FrameComponent7";
import { useNavigate } from "react-router-dom";

const Leaderboard1 = () => {
  const [isDropMenuOpen, setDropMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openDropMenu = useCallback(() => {
    setDropMenuOpen(true);
  }, []);

  const closeDropMenu = useCallback(() => {
    setDropMenuOpen(false);
  }, []);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile1");
  }, [navigate]);

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

  return (
    <>
      <div className="w-full h-[1423px] relative bg-[#fafafa] overflow-hidden flex flex-col items-end justify-start pt-[28px] pb-[388px] pl-[0px] pr-[102px] box-border gap-[43px] leading-[normal] tracking-[normal] text-left text-[48px] text-[#000] font-[Nexa] lg:pr-[51px] lg:box-border mq370:gap-[21px] mq370:pr-[25px] mq370:box-border mq400:h-auto">
        {/* <img
          className="w-full h-[1318px] absolute !m-[0] right-[0px] bottom-[-150px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain"
          alt=""
        /> */}
        <img
          className="mr-[-103px] w-[1281px] relative max-h-full object-cover shrink-0 max-w-[109%] z-[1]"
          src="/Brain Builders 16.png"
          alt=""
        />
        <div className="w-[1099px] flex flex-col items-start justify-start pt-[0px] pb-[16px] pl-[70px] pr-[0px] box-border gap-[11px] shrink-0 max-w-full">
          <h1 className="m-[0px] w-[302px] relative text-inherit leading-[77px] font-normal font-[inherit] inline-block z-[1] mq361:text-[29px] mq361:leading-[46px] mq400:text-[38px] mq400:leading-[61px]">
            Leaderboard
          </h1>
          <UserScores />
        </div>
        <footer className="w-[1030px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
          <FrameComponent7
            propWidth="856px"
            propFlex="unset"
            propMinHeight="56px"
            propHeight="unset"
            propMinHeight1="unset"
            propHeight1="56px"
          />
        </footer>
        <header className="w-full h-[64px] !m-[0] absolute top-[0px] right-[0px] left-[0px] flex flex-row items-start justify-start max-w-full z-[2] text-center text-[16px] text-[#128e96] font-[Nexa]">
          <div className="mt-[-10px] ml-[-10px] w-[1300px] flex flex-row items-start justify-start p-[10px] box-border relative gap-[10px] shrink-0 max-w-[102%]">
            <div className="flex-1 bg-[#fff] flex flex-row items-start justify-start pt-[11px] px-[65px] pb-[9px] box-border max-w-full mq361:pl-[20px] mq361:pr-[20px] mq361:box-border">
              <div className="w-[45px] relative hidden">Home</div>
              <div className="w-[90px] relative hidden whitespace-nowrap">
                Play Games
              </div>
              <div className="w-[102px] relative hidden whitespace-nowrap">
                Invite Friends
              </div>
              <div className="w-[101px] relative text-[#f17700] hidden">
                Leaderboard
              </div>
              <div className="w-[51px] relative hidden">Pricing</div>
              <div className="w-[40px] relative hidden">More</div>
              <div className="h-[42px] w-[262px] hidden flex-row items-center justify-start text-[#000] font-[Nexa]">
                <div className="w-[262px] hidden flex-row items-center justify-between gap-[8px]">
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
              <img
                className="h-[44px] w-[144px] relative object-cover"
                loading="lazy"
                src="/logo-2@2x.png"
                alt=""
              />
            </div>
            <div
              className="h-[38px] w-[175px] absolute !m-[0] right-[142px] bottom-[21px] cursor-pointer z-[1] text-[#fff] font-[Nexa]"
              onClick={onProfileContainerClick}
            >
              <div className="absolute top-[-4px] left-[0px] rounded-[6px] bg-[#128e96] w-full h-full" />
              <a className="[text-decoration:none] absolute top-[8px] left-[26px] font-extrabold text-[inherit] flex items-center justify-center w-[122px] h-[20px] whitespace-nowrap">
                My Account
              </a>
            </div>
            <a
              className="[text-decoration:none] w-[45px] absolute !m-[0] top-[calc(50%_-_8px)] left-[318px] text-[inherit] inline-block min-w-[45px] cursor-pointer z-[1]"
              onClick={onHomeTextClick}
            >
              Home
            </a>
            <a
              className="[text-decoration:none] w-[90px] absolute !m-[0] top-[calc(50%_-_8px)] left-[383px] text-[inherit] inline-block whitespace-nowrap cursor-pointer z-[1]"
              onClick={onHomeTextClick}
            >
              Play Games
            </a>
            <a
              className="[text-decoration:none] w-[102px] absolute !m-[0] top-[calc(50%_-_8px)] left-[493px] text-[inherit] inline-block min-w-[102px] whitespace-nowrap cursor-pointer z-[1]"
              onClick={onInviteFriendsTextClick}
            >
              Invite Friends
            </a>
            <a
              className="[text-decoration:none] w-[101px] absolute !m-[0] top-[calc(50%_-_8px)] right-[584px] text-[#f17700] inline-block cursor-pointer z-[1]"
              onClick={onLeaderboardTextClick}
            >
              Leaderboard
            </a>
            <a
              className="[text-decoration:none] w-[51px] absolute !m-[0] top-[calc(50%_-_8px)] right-[513px] text-[inherit] inline-block min-w-[51px] cursor-pointer z-[1]"
              onClick={onPricingTextClick}
            >
              Pricing
            </a>
            <a
              className="[text-decoration:none] w-[40px] absolute !m-[0] top-[calc(50%_-_8px)] right-[448px] text-[inherit] inline-block min-w-[40px] cursor-pointer z-[1]"
              onClick={openDropMenu}
            >
              More
            </a>
            <div className="h-[6px] w-[17px] absolute !m-[0] right-[425px] bottom-[38px] z-[1]">
              {/* <img
                className="absolute top-[0px] left-[0px] w-[8.5px] h-[6px] object-contain"
                loading="lazy"
                
                alt=""
              /> */}
              {/* <img
                className="absolute top-[0px] left-[8.5px] w-[8.5px] h-[6px] object-contain"
                loading="lazy"
                src="/BRAIN BUILDERS Landing Page 07-01 1.png"
                alt=""
              /> */}
            </div>
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

export default Leaderboard1;
