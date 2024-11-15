import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import DropMenu from "../components/DropMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";

const Questions = () => {
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
      <div className="w-full h-[1325px] relative bg-[#fafafa] overflow-hidden flex flex-col items-end justify-start pt-[0px] px-[0px] pb-[600px] box-border gap-[256px] leading-[normal] tracking-[normal] text-center text-[24px] text-[#000] font-[Nexa] mq361:gap-[64px] mq370:h-auto mq400:gap-[128px]">
        <img
          className="w-full h-full absolute !m-[0] right-[0px] bottom-[-248px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain"
          alt=""
          src="/rectangle-44@2x.png"
        />
        <img
          className="w-[1605px] h-[798px] absolute !m-[0] top-[64px] right-[-169px] object-cover z-[1]"
          alt=""
          src="/home-page-9-1@2x.png"
        />
        <div className="self-stretch flex flex-col items-end justify-start gap-[86px] shrink-0 max-w-full mq361:gap-[21px] mq400:gap-[43px]">
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
          <div className="w-[806px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
            <div className="w-[644px] flex flex-col items-end justify-start gap-[61px] max-w-full mq361:gap-[15px] mq400:gap-[30px]">
              <div className="self-stretch flex flex-col items-end justify-start gap-[15px] max-w-full">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <div className="w-[91px] rounded-[25px] bg-[#fff] flex flex-row items-center justify-center flex-wrap content-center py-[8px] px-[15px] box-border gap-x-[5px] gap-y-[2px] z-[2]">
                    <img
                      className="h-[19px] w-[19px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/k-25-11@2x.png"
                    />
                    <div className="w-[25px] flex flex-col items-start justify-start gap-[5px] [transform:_rotate(-90deg)]">
                      <h3 className="m-[0px] self-stretch h-[10px] relative text-inherit leading-[1px] font-normal font-[inherit] inline-block shrink-0 min-w-[10px] mq361:text-[19px]">
                        .
                      </h3>
                      <h3 className="m-[0px] self-stretch h-[10px] relative text-inherit leading-[1px] font-normal font-[inherit] inline-block shrink-0 min-w-[10px] mq361:text-[19px]">
                        .
                      </h3>
                    </div>
                    <div className="w-[21px] relative text-[14px] leading-[28px] inline-block shrink-0">
                      12
                    </div>
                  </div>
                  <div className="rounded-[25px] border-[#fff] border-[1px] border-solid flex flex-row items-start justify-start py-[7px] px-[16px] relative gap-[9.8px] z-[2] text-[14px] text-[#fff]">
                    <img
                      className="h-[23px] w-[24px] relative"
                      loading="lazy"
                      alt=""
                      src="/frame-427319906.svg"
                    />
                    <div className="w-[15px] flex flex-col items-start justify-start pt-[5.5px] px-[0px] pb-[0px] box-border">
                      <div className="self-stretch relative leading-[14px] inline-block min-w-[15px]">
                        12
                      </div>
                    </div>
                    <div className="h-[24px] w-[1px] relative border-[#fff] border-r-[1px] border-solid box-border" />
                    <div className="h-[24px] w-[24px] relative rounded-[50%] border-[#e34033] border-[0px] border-solid box-border" />
                    <h3 className="!m-[0] w-[13px] absolute top-[14px] right-[41.5px] text-[24px] leading-[12px] font-normal font-[inherit] text-[#e34033] inline-block min-w-[13px] z-[1] mq361:text-[19px] mq361:leading-[10px]">
                      x
                    </h3>
                    <div className="w-[9px] flex flex-col items-start justify-start pt-[6.5px] px-[0px] pb-[0px] box-border">
                      <div className="self-stretch relative leading-[13px] inline-block min-w-[9px]">
                        0
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-[13px] px-[0px] pb-[18px] box-border relative max-w-full text-[20px] text-[#fff]">
                  <div className="self-stretch rounded-[12px] bg-[#003645] border-[#fff] border-[10px] border-solid box-border flex flex-col items-start justify-start pt-[36px] px-[46px] pb-[54px] gap-[30px] max-w-full z-[2] text-[24px] text-[#000] mq361:pt-[23px] mq361:pb-[35px] mq361:box-border mq370:gap-[15px] mq370:pl-[23px] mq370:pr-[23px] mq370:box-border">
                    <div className="w-[644px] h-[380px] relative rounded-[12px] bg-[#003645] border-[#fff] border-[10px] border-solid box-border hidden max-w-full" />
                    <div className="w-[532px] rounded-[5px] bg-[#fff] flex flex-row items-start justify-start pt-[39px] px-[27px] pb-[40px] box-border max-w-full z-[3]">
                      <div className="h-[107px] w-[532px] relative rounded-[5px] bg-[#fff] hidden max-w-full" />
                      <h3 className="m-[0px] flex-1 relative text-inherit leading-[28px] font-normal font-[inherit] inline-block max-w-full z-[1] mq361:text-[19px] mq361:leading-[22px]">
                        Which of these is the strongest bone ?
                      </h3>
                    </div>
                    <div className="w-[532px] flex flex-col items-start justify-start gap-[13px] max-w-full text-[#fff]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq370:flex-wrap mq370:justify-center">
                        <div className="w-[222px] rounded-[5px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] px-[6px] pb-[8px] box-border gap-[19px] z-[3]">
                          <div className="h-[59px] w-[222px] relative rounded-[5px] bg-[#fff] hidden" />
                          <div className="w-[45px] shadow-[1px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-[#0071c0] flex flex-row items-start justify-start pt-[9px] px-[5px] pb-[7px] box-border z-[1]">
                            <div className="h-[44px] w-[45px] relative shadow-[1px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-[#0071c0] hidden" />
                            <h3 className="m-[0px] w-[34px] relative text-inherit leading-[28px] font-normal font-[inherit] inline-block shrink-0 z-[2] mq361:text-[19px] mq361:leading-[22px]">
                              A
                            </h3>
                          </div>
                          <div className="w-[107px] flex flex-col items-start justify-start pt-[8px] px-[0px] pb-[0px] box-border text-[#000]">
                            <h3 className="m-[0px] self-stretch relative text-inherit leading-[28px] font-normal font-[inherit] z-[1] mq361:text-[19px] mq361:leading-[22px]">
                              Scapula
                            </h3>
                          </div>
                        </div>
                        <div className="w-[222px] rounded-[5px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] px-[6px] pb-[8px] box-border gap-[16px] z-[3]">
                          <div className="h-[59px] w-[222px] relative rounded-[5px] bg-[#fff] hidden" />
                          <div className="w-[45px] shadow-[1px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-[#f88907] flex flex-row items-start justify-start pt-[9px] px-[5px] pb-[7px] box-border z-[1]">
                            <div className="h-[44px] w-[45px] relative shadow-[1px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-[#f88907] hidden" />
                            <h3 className="m-[0px] w-[34px] relative text-inherit leading-[28px] font-normal font-[inherit] inline-block shrink-0 z-[2] mq361:text-[19px] mq361:leading-[22px]">
                              B
                            </h3>
                          </div>
                          <div className="w-[107px] flex flex-col items-start justify-start pt-[8px] px-[0px] pb-[0px] box-border text-[#000]">
                            <h3 className="m-[0px] self-stretch relative text-inherit leading-[28px] font-normal font-[inherit] z-[1] mq361:text-[19px] mq361:leading-[22px]">
                              Teeth
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq370:flex-wrap">
                        <div className="w-[222px] rounded-[5px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] px-[6px] pb-[8px] box-border gap-[19px] z-[3]">
                          <div className="h-[59px] w-[222px] relative rounded-[5px] bg-[#fff] hidden" />
                          <div className="w-[45px] shadow-[1px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-[#04a61d] flex flex-row items-start justify-start pt-[9px] px-[5px] pb-[7px] box-border z-[1]">
                            <div className="h-[44px] w-[45px] relative shadow-[1px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-[#04a61d] hidden" />
                            <h3 className="m-[0px] w-[34px] relative text-inherit leading-[28px] font-normal font-[inherit] inline-block shrink-0 z-[2] mq361:text-[19px] mq361:leading-[22px]">
                              C
                            </h3>
                          </div>
                          <div className="w-[107px] flex flex-col items-start justify-start pt-[8px] px-[0px] pb-[0px] box-border text-[#000]">
                            <h3 className="m-[0px] self-stretch relative text-inherit leading-[28px] font-normal font-[inherit] z-[1] mq361:text-[19px] mq361:leading-[22px]">
                              Skull
                            </h3>
                          </div>
                        </div>
                        <div className="w-[222px] rounded-[5px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] px-[6px] pb-[8px] box-border gap-[9px] z-[3]">
                          <div className="h-[59px] w-[222px] relative rounded-[5px] bg-[#fff] hidden" />
                          <div className="w-[45px] shadow-[1px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-[#0f3556] flex flex-row items-start justify-start pt-[9px] px-[5px] pb-[7px] box-border z-[1]">
                            <div className="h-[44px] w-[45px] relative shadow-[1px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-[#0f3556] hidden" />
                            <h3 className="m-[0px] w-[34px] relative text-inherit leading-[28px] font-normal font-[inherit] inline-block shrink-0 z-[2] mq361:text-[19px] mq361:leading-[22px]">
                              D
                            </h3>
                          </div>
                          <div className="w-[141px] flex flex-col items-start justify-start pt-[8px] px-[0px] pb-[0px] box-border text-[#000]">
                            <h3 className="m-[0px] self-stretch relative text-inherit leading-[28px] font-normal font-[inherit] z-[1] mq361:text-[19px] mq361:leading-[22px]">
                              Spinal Cord
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[148px] !m-[0] absolute top-[0px] left-[28px] shadow-[-1px_-4px_6.2px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-[7px] bg-[#37b954] flex flex-row items-start justify-start pt-[5px] px-[9px] pb-[10px] box-border whitespace-nowrap z-[3] text-[18px]">
                    <div className="h-[36px] w-[148px] relative shadow-[-1px_-4px_6.2px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-[7px] bg-[#37b954] hidden" />
                    <div className="w-[126px] relative leading-[21px] whitespace-pre-wrap inline-block shrink-0 z-[4]">
                      Question 3/4
                    </div>
                  </div>
                  <div className="w-[116px] !m-[0] absolute right-[18px] bottom-[0px] shadow-[-1px_-4px_6.2px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-[16px] bg-[#37b954] flex flex-row items-start justify-start pt-[5px] px-[0px] pb-[10px] box-border z-[3]">
                    <div className="h-[36px] w-[116px] relative shadow-[-1px_-4px_6.2px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-[16px] bg-[#37b954] hidden" />
                    <div className="flex-1 relative leading-[21px] z-[4] mq361:text-[16px] mq361:leading-[22px]">
                      Next
                    </div>
                  </div>
                  <div className="w-[116px] !m-[0] absolute right-[163px] bottom-[0px] shadow-[-1px_-4px_6.2px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-[16px] bg-[#f17700] flex flex-row items-start justify-start pt-[5px] px-[0px] pb-[10px] box-border z-[3]">
                    <div className="h-[36px] w-[116px] relative shadow-[-1px_-4px_6.2px_2px_rgba(0,_0,_0,_0.25)_inset] rounded-[16px] bg-[#f17700] hidden" />
                    <div className="flex-1 relative leading-[21px] z-[4] mq361:text-[16px] mq361:leading-[22px]">
                      Prev
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[14.5px] mq370:flex-wrap">
                <div className="w-[137.5px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[10px] box-border">
                  <Button
                    className="self-stretch h-[47px] shadow-[0px_-4px_6.4px_rgba(0,_0,_0,_0.25)_inset] z-[2]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#f17700",
                      borderRadius: "25px",
                      "&:hover": { background: "#f17700" },
                      height: 47,
                    }}
                  >
                    50 / 50
                  </Button>
                </div>
                <Button
                  className="h-[47px] flex-[0.6474] shadow-[0px_-4px_6.4px_rgba(0,_0,_0,_0.25)_inset] min-w-[103px] z-[2] mq370:flex-1"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#002724",
                    borderRadius: "26px",
                    "&:hover": { background: "#002724" },
                    height: 47,
                  }}
                >
                  Audience poll
                </Button>
                <div className="flex-1 flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[3px] box-border min-w-[106px] mq370:flex-1">
                  <Button
                    className="self-stretch h-[47px] shadow-[0px_-4px_6.4px_rgba(0,_0,_0,_0.25)_inset] z-[2]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#128e96",
                      borderRadius: "26px",
                      "&:hover": { background: "#128e96" },
                      height: 47,
                    }}
                  >
                    Skip question
                  </Button>
                </div>
                <Button
                  className="h-[47px] w-[139px] shadow-[0px_-4px_6.4px_rgba(0,_0,_0,_0.25)_inset] z-[2]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#e34033",
                    borderRadius: "26px",
                    "&:hover": { background: "#e34033" },
                    width: 139,
                    height: 47,
                  }}
                >
                  Reset time
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-[1234px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
          <FrameComponent7
            propWidth="856px"
            propFlex="unset"
            propMinHeight="56px"
            propHeight="unset"
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

export default Questions;
