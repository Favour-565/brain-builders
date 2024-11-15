import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import DropMenu from "../components/DropMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import GameLevels from "../components/GameLevels";
import FrameComponent7 from "../components/FrameComponent7";

const Levels1 = () => {
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

  const onAccountContainerClick = useCallback(() => {
    navigate("/profile1");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-[#fafafa] overflow-hidden flex flex-col items-end justify-start pt-[0px] px-[0px] pb-[135px] box-border gap-[43px] leading-[normal] tracking-[normal] mq370:gap-[21px]">
        <section className="self-stretch flex flex-col items-start justify-start max-w-full">
          <header className="self-stretch h-[64px] relative z-[2] text-center text-[16px] text-[#000] font-[Nexa]">
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
                onClick={onAccountContainerClick}
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
          <GameLevels />
        </section>
        <Button
          className="w-[253px] h-[62px] !m-[0] absolute top-[255px] right-[507px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[2]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#118e96",
            fontSize: "30",
            background: "#fff",
            borderRadius: "10px",
            "&:hover": { background: "#fff" },
            width: 253,
            height: 62,
          }}
        >
          Select level
        </Button>
        <section className="w-[1234px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
          <FrameComponent7
            propWidth="856px"
            propFlex="unset"
            propMinHeight="56px"
            propHeight="unset"
            propMinHeight1="56px"
            propHeight1="unset"
          />
        </section>
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

export default Levels1;