import { useState, useCallback } from "react";
import DropMenu from "../components/DropMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";

const Results = () => {
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
      <div className="w-full h-[1135px] relative bg-[#fafafa] overflow-hidden flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[380px] box-border gap-[63px] leading-[normal] tracking-[normal] text-left text-[52px] text-[#0b2167] font-[Nexa] mq361:h-auto mq361:gap-[16px] mq370:gap-[31px]">
        <img
          className="w-full h-[1318px] absolute !m-[0] right-[0px] bottom-[-438px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain"
          
          alt=""
        />
        <div className="self-stretch h-[755px] relative shrink-0 max-w-full mq361:h-auto mq361:min-h-[755]">
          <div className="absolute top-[7px] left-[0px] w-full flex flex-col items-start justify-start pt-[115px] px-[89px] pb-[31.3px] box-border gap-[39.1px] max-w-full h-full z-[1] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border mq370:gap-[20px] mq370:pl-[44px] mq370:pr-[44px] mq370:box-border">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              src="\MacBook Air - 2.png"
              alt=""
            />
            <h1 className="m-[0px] w-[188px] relative text-inherit leading-[150%] capitalize font-extrabold font-[inherit] inline-block z-[1] mq361:text-[31px] mq361:leading-[47px] mq400:text-[42px] mq400:leading-[62px]">
              Results
            </h1>
            <div className="w-[466.9px] flex flex-col items-end justify-start gap-[24px] max-w-full text-[24px] font-[Nexa]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32.2px] max-w-full mq370:gap-[16px]">
                <div className="w-[306.9px] flex flex-col items-start justify-start gap-[6.8px]">
                  <h1 className="m-[0px] relative text-[36px] leading-[150%] capitalize font-extrabold font-[Nexa] text-[#e34033] z-[1] mq361:text-[22px] mq361:leading-[32px] mq400:text-[29px] mq400:leading-[43px]">
                    HURRAY!
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[2px] pr-[1px]">
                    <h3 className="m-[0px] flex-1 relative text-inherit leading-[150%] capitalize font-normal font-[inherit] z-[1] mq361:text-[19px] mq361:leading-[29px]">
                      Congratulations lola Aisha
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[2px] pr-[0px]">
                    <h3 className="m-[0px] flex-1 relative text-inherit leading-[150%] capitalize font-normal font-[inherit] z-[1] mq361:text-[19px] mq361:leading-[29px]">
                      You Performed Excellently!
                    </h3>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[2px] pr-[0px] box-border max-w-full text-[28.7px] text-[#31bf51] font-[Nexa]">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[48px] max-w-full mq361:gap-[24px] mq361:flex-wrap">
                    <div className="flex-1 shadow-[0px_0px_6.7px_rgba(0,_0,_0,_0.15)] rounded-[6px] bg-[#fff] overflow-hidden flex flex-row items-start justify-start pt-[14.7px] pb-[14.3px] pl-[18px] pr-[12px] box-border gap-[8px] min-w-[135px] z-[1] mq361:flex-1">
                      <div className="relative leading-[150%] capitalize font-extrabold inline-block min-w-[62px] mq361:text-[23px] mq361:leading-[34px]">
                        87%
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[16px] px-[0px] pb-[0px] text-[14px] text-[#002724]">
                        <div className="self-stretch relative leading-[150%] capitalize font-extrabold">
                          Score Accuracy
                        </div>
                      </div>
                    </div>
                    <div className="flex-[0.9663] shadow-[0px_0px_6.7px_rgba(0,_0,_0,_0.15)] rounded-[6px] bg-[#fff] overflow-hidden flex flex-row items-start justify-start pt-[14.7px] px-[18px] pb-[14.3px] box-border gap-[5px] min-w-[135px] z-[1] text-[#3e91e6] mq361:flex-1">
                      <div className="w-[41px] relative leading-[150%] capitalize font-extrabold inline-block mq361:text-[23px] mq361:leading-[34px]">
                        09
                      </div>
                      <div className="w-[108px] flex flex-col items-start justify-start pt-[16px] px-[0px] pb-[0px] box-border text-[14px] text-[#002724]">
                        <div className="self-stretch relative leading-[150%] capitalize font-extrabold">
                          Total Questions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[41.9px] text-[28.7px] text-[#3e91e6] font-[Nexa] mq361:gap-[21px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[41.9px] min-w-[139px]">
                  <div className="w-[208px] shadow-[0px_0px_6.7px_rgba(0,_0,_0,_0.15)] rounded-[6px] bg-[#fff] overflow-hidden flex flex-row items-start justify-start pt-[14px] px-[18px] pb-[15px] box-border gap-[11.8px] z-[1]">
                    <div className="w-[38px] relative leading-[150%] capitalize font-extrabold inline-block mq361:text-[23px] mq361:leading-[34px]">
                      07
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[16px] px-[0px] pb-[0px] text-[14px] text-[#002724]">
                      <div className="relative leading-[150%] capitalize font-extrabold inline-block min-w-[53px]">
                        Correct
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[18px] text-[14px] text-[#f7f7f7]">
                    <div className="w-[204px] flex flex-row items-start justify-between gap-[20px]">
                      <img
                        className="h-[64px] w-[65px] relative rounded-[8px] overflow-hidden shrink-0 min-h-[64px] z-[1]"
                        loading="lazy"
                         src="\Frame 19.png"
                        alt=""
                      />
                      <img
                        className="h-[64px] w-[64px] relative rounded-[8px] overflow-hidden shrink-0 min-h-[64px] z-[1]"
                        loading="lazy"
                        src="\Frame 20.png"
                        alt=""
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="relative leading-[150%] capitalize font-extrabold inline-block min-w-[34px] z-[1]">
                        Back
                      </div>
                      <div className="relative leading-[150%] capitalize font-extrabold inline-block min-w-[105px] z-[1]">
                        Review Answer
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[41.9px] min-w-[135px] text-[#f04f23]">
                  <div className="self-stretch shadow-[0px_0px_6.7px_rgba(0,_0,_0,_0.15)] rounded-[6px] bg-[#fff] overflow-hidden flex flex-row items-start justify-start pt-[14px] px-[18px] pb-[15px] gap-[5px] z-[1]">
                    <div className="w-[41px] relative leading-[150%] capitalize font-extrabold inline-block mq361:text-[23px] mq361:leading-[34px]">
                      02
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[16px] px-[0px] pb-[0px] text-[14px] text-[#002724]">
                      <div className="relative leading-[150%] capitalize font-extrabold inline-block min-w-[47px]">
                        Wrong
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0px] px-[15px] text-[14px] text-[#f7f7f7]">
                    <div className="flex flex-col items-start justify-start gap-[17.7px]">
                      <div className="flex flex-row items-start justify-start py-[0px] pl-[8px] pr-[11px]">
                        <img
                          className="h-[64px] w-[65px] relative rounded-[8px] overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          src="\Frame 21.png"
                          alt=""
                        />
                      </div>
                      <div className="relative leading-[150%] capitalize font-extrabold inline-block min-w-[84px] z-[1]">
                        Share Score
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="absolute top-[0px] left-[0px] w-full h-[64px] z-[2] text-center text-[16px] text-[#000] font-[Nexa]">
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
        </div>
        <footer className="w-[1266px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
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

export default Results;
