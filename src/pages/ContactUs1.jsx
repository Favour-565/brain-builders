import { useState, useCallback } from "react";
import DropMenu from "../components/DropMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";

const ContactUs1 = () => {
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
      <div className="w-full relative bg-[#fafafa] overflow-hidden flex flex-col items-start justify-start gap-[415.7px] leading-[normal] tracking-[normal] mq361:gap-[104px] mq370:gap-[208px]">
        <img
          className="w-full h-[1318px] absolute !m-[0] right-[0px] bottom-[-438px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain"
          
          alt=""
        />
        <div className="w-full h-[677.9px] absolute !m-[0] top-[74px] right-[0px] left-[0px]">
          <img
            className="absolute top-[0px] left-[-41px] w-[1362px] h-[677.9px] object-cover z-[1]"
            src="\HOME PAGE 8 1.png"
            alt=""
          />
          <img
            className="absolute top-[100.2px] left-[142.3px] w-[255.8px] h-[213.5px] object-cover z-[2]"
            loading="lazy"
            src="\CONTACT US 1.png"
            alt=""
          />
          <img
            className="absolute top-[336.5px] left-[142.3px] rounded-[7px] w-[111.6px] h-[35px] object-cover z-[2]"
            loading="lazy"
            src="\image-1-2@2x.png"
            alt=""
          />
          <img
            className="absolute top-[338.1px] left-[271.9px] rounded-[7px] w-[111.6px] h-[33.4px] object-cover z-[2]"
            loading="lazy"
            src="\image-21@2x.png"
            alt=""
          />
        </div>
        <header className="self-stretch h-[64px] relative text-center text-[16px] text-[#000] font-[Nexa]">
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
        <footer className="w-[1203px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full text-left text-[14px] text-[#fff] font-[Abel]">
          <div className="h-[655.3px] w-[918.7px] flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[570.5px] box-border gap-[253.5px] max-w-full mq361:h-auto mq361:gap-[63px] mq370:pb-[241px] mq370:box-border mq400:gap-[127px] mq407:pb-[371px] mq407:box-border">
            <div className="w-[478.2px] flex flex-row items-start justify-start flex-wrap content-start gap-[17.9px] shrink-0 max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3.3px] min-w-[112px]">
                <div className="self-stretch h-[32.6px] relative leading-[145%] inline-block shrink-0 z-[2]">{`A Product of Martad Education 
& Skills Development Ltd.`}</div>
                <div className="self-stretch h-[48.9px] relative leading-[145%] inline-block shrink-0 z-[2]">
                  <p className="m-[0px]">3b, Alegbe Close</p>
                  <p className="m-[0px]">{`Mende, Maryland `}</p>
                  <p className="m-[0px]">Lagos, Nigeria.</p>
                </div>
              </div>
              <div className="h-[79.8px] w-[134.4px] relative leading-[145%] inline-block shrink-0 max-h-[79.8px] [word-break:break-word] z-[2]">
                <p className="m-[0px]">Contact Us</p>
                <p className="m-[0px]">&nbsp;</p>
                <p className="m-[0px]">{`+234 704 330 3000


+234 809 293 3330


info@examsprimed.com `}</p>
              </div>
              <div className="h-[79.8px] w-[134.4px] relative leading-[145%] inline-block shrink-0 z-[2]">
                <p className="m-[0px]">Policy</p>
                <p className="m-[0px]">Instructions</p>
                <p className="m-[0px]">{`Terms & Conditions`}</p>
                <p className="m-[0px]">Company</p>
                <p className="m-[0px]">About Us</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <FrameComponent7
                propWidth="856px"
                propFlex="unset"
                propMinHeight="unset"
                propHeight="56px"
                propMinHeight1="unset"
                propHeight1="56px"
              />
            </div>
          </div>
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

export default ContactUs1;
