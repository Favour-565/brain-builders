import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import DropMenu from "../components/DropMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";

const Profile1 = () => {
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

  const onUserAccountContainerClick = useCallback(() => {
    navigate("/profile1");
  }, [navigate]);

  const onLogoutButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-[#f9f4fa] overflow-hidden flex flex-col items-end justify-start pt-[10px] px-[0px] pb-[29px] box-border gap-[78px] leading-[normal] tracking-[normal] mq361:gap-[19px] mq370:gap-[39px]">
        <img
          className="w-[1280px] h-[711px] absolute !m-[0] top-[74px] right-[-10px] object-contain"
          src="\Rectangle 64.png"
          alt=""
        />
        <div className="self-stretch h-[64px] relative z-[1] mq400:h-auto mq400:min-h-[64]">
          <header className="absolute top-[-10px] left-[-10px] w-[1300px] flex flex-row items-start justify-start p-[10px] box-border gap-[10px] text-center text-[16px] text-[#000] font-[Nexa]">
            <div className="flex-1 bg-[#fff] flex flex-row items-start justify-start pt-[11px] px-[65px] pb-[9px] box-border gap-[99px] max-w-full mq400:flex-wrap">
              <img
                className="h-[44px] w-[144px] relative object-cover"
                src="\logo-2@2x.png"
                loading="lazy"
                alt=""
              />
              <div className="h-[42px] w-[262px] hidden flex-row items-center justify-start mq361:h-auto">
                <div className="flex-1 flex flex-row items-center justify-between gap-[8px] mq361:flex-wrap">
                  <div className="h-[44px] w-[84px] relative">
                    <div className="absolute top-[0px] right-[0px] rounded-[20px] border-[#bbc42f] border-[0.5px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-[19px] w-full h-full">
                      <div className="h-[24px] relative font-extrabold flex items-center justify-center">
                        Login
                      </div>
                    </div>
                  </div>
                  <div className="h-[44px] w-[170px] relative">
                    <div className="absolute top-[0px] right-[0px] rounded-[20px] border-[#bbc42f] border-[0.5px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-[19px] w-full h-full">
                      <div className="h-[24px] flex-1 relative font-extrabold flex items-center justify-center">
                        Sign-up for Free
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="m-[0px] w-[534px] flex flex-col items-start justify-start pt-[13px] px-[0px] pb-[0px] box-border max-w-full">
                <nav className="m-[0px] self-stretch flex flex-row items-start justify-start gap-[20px] whitespace-nowrap text-center text-[16px] text-[#128e96] font-[Nexa] mq370:flex-wrap">
                  <a
                    className="[text-decoration:none] w-[45px] relative text-[inherit] flex items-center justify-center min-w-[45px] cursor-pointer"
                    onClick={onHomeTextClick}
                  >
                    Home
                  </a>
                  <a
                    className="[text-decoration:none] w-[90px] relative text-[inherit] flex items-center justify-center cursor-pointer"
                    onClick={onHomeTextClick}
                  >
                    Play Games
                  </a>
                  <a
                    className="[text-decoration:none] flex-1 relative text-[inherit] inline-block min-w-[66px] cursor-pointer"
                    onClick={onInviteFriendsTextClick}
                  >
                    Invite Friends
                  </a>
                  <a
                    className="[text-decoration:none] flex-1 relative text-[inherit] inline-block min-w-[66px] cursor-pointer"
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
              onClick={onUserAccountContainerClick}
            >
              <div className="absolute top-[-4px] left-[0px] rounded-[6px] bg-[#f17700] w-full h-full" />
              <a className="[text-decoration:none] absolute top-[8px] left-[26px] font-extrabold text-[inherit] flex items-center justify-center w-[122px] h-[20px]">
                My Account
              </a>
            </div>
          </header>
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
        </div>
        <main className="w-[1261px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
          <section className="w-[995px] flex flex-col items-start justify-start gap-[92px] max-w-full text-left text-[20px] text-[#0b2239] font-[Nexa] mq370:gap-[23px] mq407:gap-[46px]">
            <div className="self-stretch flex flex-row items-end justify-start gap-[4px] max-w-full mq400:flex-wrap">
              <div className="w-[269px] flex flex-col items-start justify-start gap-[28.7px] min-w-[269px] mq400:flex-1">
                <img
                  className="w-[207px] h-[210px] relative rounded-[32px] object-cover z-[1]"
                  loading="lazy"
                  src="\Rectangle 63.png"
                  alt=""
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  <div className="self-stretch relative z-[1] mq361:text-[16px]">
                    Personal Information
                  </div>
                  <div className="self-stretch relative text-[16px] leading-[26px] text-[#4a4e4f] z-[1]">
                    <p className="m-[0px]">Name: Abdul Rauf</p>
                    <p className="m-[0px]">Email: abdulrauf344@gmail.com</p>
                    <p className="m-[0px]">D.O.B: 18 - 94 - 2004</p>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch relative z-[1] mq361:text-[16px]">
                    Privacy Settings
                  </div>
                  <div className="w-[204px] relative text-[16px] leading-[26px] text-[#4a4e4f] flex items-end z-[1]">
                    <span className="w-full">
                      <p className="m-[0px]">Change your password</p>
                      <p className="m-[0px]">Verify your Email</p>
                    </span>
                  </div>
                </div>
                <div className="w-[240px] flex flex-col items-start justify-start gap-[6px]">
                  <div className="self-stretch relative z-[1] mq361:text-[16px]">
                    Payment settings
                  </div>
                  <div className="relative text-[16px] leading-[26px] text-[#4a4e4f] z-[1]">
                    <p className="m-[0px]">Change payment details</p>
                    <p className="m-[0px]">Verify your Email</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[9px] box-border min-w-[469px] max-w-full text-center text-[#4a4e4f] mq370:min-w-full">
                <div className="self-stretch flex flex-col items-end justify-start gap-[10px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-[16px]">
                    <div className="w-[471px] flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <h1 className="m-[0px] w-[232px] h-[32px] relative text-[32px] font-normal font-[inherit] text-[#0b2239] flex items-center z-[1] mq361:text-[19px] mq400:text-[26px]">
                        Abdul Rauf
                      </h1>
                      <div className="w-[236px] relative flex items-center whitespace-nowrap z-[1]">
                        abdulrauf344@gmail.com
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                        <div className="w-[86px] flex flex-row items-start justify-start">
                          <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-[0px] pb-[0px]">
                            <div className="self-stretch relative z-[1]">
                              Level:
                            </div>
                          </div>
                          <img
                            className="h-[31px] w-[31px] relative object-cover z-[1]"
                            loading="lazy"
                            src="\public\PRO 1 1.png"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[33px] text-center text-[24px] text-[#fff] mq361:flex-wrap mq370:gap-[16px]"
                        onClick={onPricingTextClick}
                        >
                          <div className="flex-1 rounded-[7px] bg-[#f17700] flex flex-row items-start justify-start py-[15px] px-[61px] box-border min-w-[142px] whitespace-nowrap z-[1]">
                            <div className="h-[24px] w-[97px] relative flex items-center min-w-[97px]">
                              <span className="w-full">
                                <span>{`13 `}</span>
                                <span className="text-[16px]">coins left</span>
                              </span>
                            </div>
                          </div>
                          <Button
                            className="h-[54px] flex-[0.732] min-w-[142px] z-[1] mq361:flex-1"
                            disableElevation
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              color: "#fff",
                              fontSize: "16",
                              background: "#32a350",
                              borderRadius: "7px",
                              "&:hover": { background: "#32a350" },
                              height: 54,
                            }}
                          >
                            Buy coins
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[7px] box-border gap-[35px] max-w-full mq370:gap-[17px] mq370:flex-wrap">
                    
                    <div className="flex-1 shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.15)] rounded-[9px] bg-[#fff] flex flex-row items-start justify-center py-[14.5px] px-[20px] box-border min-w-[220px] whitespace-nowrap max-w-full z-[1]"
                    onClick={onUserAccountContainerClick}
                    >
                      
                      <div className="w-[104px] relative flex items-center justify-center min-w-[104px]">
                        Edit Profile
                      </div>
                      
                    </div>
                
                    <div className="flex-1 shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.15)] rounded-[9px] bg-[#fff] flex flex-row items-start justify-center py-[14.5px] px-[20px] box-border min-w-[220px] whitespace-nowrap max-w-full z-[1]"
                    onClick={onUserAccountContainerClick}
                    >
                      
                      <div className="w-[115px] relative flex items-center justify-center min-w-[115px]">
                        Coin History
                      </div>
                      
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[7px] box-border gap-[35px] max-w-full mq370:gap-[17px] mq370:flex-wrap">
                    {/* <div className="flex-1 shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.15)] rounded-[9px] bg-[#fff] flex flex-row items-start justify-center py-[14px] px-[20px] box-border min-w-[220px] whitespace-nowrap max-w-full z-[1]">
                      <div className="w-[115px] relative flex items-center justify-center min-w-[115px]">
                        Coin History
                      </div>
                    </div> */}
                    <div
                      className="flex-1 shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.15)] rounded-[9px] bg-[#fff] flex flex-row items-start justify-center py-[14px] px-[20px] box-border min-w-[220px] whitespace-nowrap max-w-full cursor-pointer z-[1]"
                      onClick={onInviteFriendsTextClick}
                    >
                      <div className="w-[123px] relative flex items-center justify-center">
                        Invite friends
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[7px] box-border gap-[35px] max-w-full mq370:gap-[17px] mq370:flex-wrap">
                    <div className="flex-1 shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.15)] rounded-[9px] bg-[#fff] flex flex-row items-start justify-center py-[14.5px] px-[20px] box-border min-w-[220px] max-w-full z-[1]"
                    onClick={onUserAccountContainerClick}
                    >
                      <div className="w-[71px] relative flex items-center justify-center min-w-[71px] mq361:text-[16px]">
                        Badges
                      </div>
                    </div>
                    {/* <div className="flex-1 shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.15)] rounded-[9px] bg-[#fff] flex flex-row items-start justify-center py-[14.5px] px-[20px] box-border min-w-[220px] max-w-full z-[1]">
                      <div className="w-[118px] relative flex items-center justify-center mq361:text-[16px]"
                      onClick={onInviteFriendsTextClick}
                      >
                        Notifications
                      </div>
                    </div> */}
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[7px] box-border gap-[35px] max-w-full mq370:gap-[17px] mq370:flex-wrap">
                    <div
                      className="flex-1 shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.15)] rounded-[9px] bg-[#fff] flex flex-row items-start justify-center py-[14px] px-[20px] box-border min-w-[220px] max-w-full cursor-pointer z-[1]"
                      onClick={onLeaderboardTextClick}
                    >
                      <div className="w-[126px] relative flex items-center justify-center mq361:text-[16px]">
                        Leaderboard
                      </div>
                    </div>
                    {/* <Button
                      className="h-[48px] flex-[0.2642] shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.15)] min-w-[220px] max-w-full z-[1] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border mq361:flex-1"
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#4a4e4f",
                        fontSize: "20",
                        background: "#fff",
                        borderRadius: "9px",
                        "&:hover": { background: "#fff" },
                        height: 48,
                      }}
                    >
                      Settings
                    </Button> */}
                  </div>
                  <Button
                    className="self-stretch h-[64px] shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.15)] cursor-pointer z-[1] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "20",
                      background: "#e34033",
                      borderRadius: "9px",
                      "&:hover": { background: "#e34033" },
                      height: 64,
                    }}
                    onClick={onLogoutButtonClick}
                  >
                    Log out
                  </Button>
                </div>
              </div>
            </div>
            <footer className="w-[982px] flex flex-row items-start justify-start py-[0px] px-[63px] box-border max-w-full mq407:pl-[31px] mq407:pr-[31px] mq407:box-border">
              <FrameComponent7
                propWidth="unset"
                propFlex="1"
                propMinHeight="56px"
                propHeight="unset"
                propMinHeight1="56px"
                propHeight1="unset"
              />
            </footer>
          </section>
        </main>
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

export default Profile1;
