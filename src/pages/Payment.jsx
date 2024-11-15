import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent8 from "../components/FrameComponent8";

const Payment = () => {
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

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onProfileOptionContainerClick = useCallback(() => {
    navigate("/levels");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative rounded-[20px] bg-[#fafafa] overflow-hidden flex flex-row items-start justify-start pt-[18px] px-[0px] pb-[0.3px] box-border leading-[normal] tracking-[normal]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[52px] px-[0px] pb-[0px] box-border max-w-full mq370:pt-[34px] mq370:box-border">
          <img
            className="self-stretch relative rounded-t-[0px] rounded-b-[20px] max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/brain-builders-landing-page-0701-1@2x.png"
          />
        </div>
        <main className="w-[430px] flex flex-col items-end justify-start py-[0px] px-[32px] box-border gap-[368px] max-w-full ml-[-430px]">
          <header className="self-stretch flex flex-row items-end justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[5px]">
              <div
                className="w-[28px] h-[14px] relative cursor-pointer"
                onClick={openSlideMenu}
              >
                <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
              </div>
            </div>
            <div
              className="rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <div className="h-[41px] w-[102px] relative rounded-[7px] bg-[#fff] hidden" />
              <img
                className="h-[28px] w-[89px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/logo-1@2x.png"
              />
            </div>
          </header>
          <section className="mr-[-34px] w-[433px] flex flex-col items-start justify-start gap-[18px] max-w-[119%] shrink-0 text-left text-[24px] text-[#002724] font-['Satoshi_Variable']">
            <div className="w-[242px] flex flex-row items-start justify-start py-[0px] px-[33px] box-border">
              <h1 className="m-[0px] flex-1 relative text-inherit tracking-[0.01em] font-black font-[inherit]">
                Payment Mode
              </h1>
            </div>
            <div className="self-stretch h-[60px] flex flex-row items-start justify-start py-[0px] pl-[33px] pr-[35px] box-border max-w-full">
              <Button
                className="self-stretch flex-1 max-w-full"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "13",
                  background: "#f2b605",
                  borderRadius: "7px",
                  "&:hover": { background: "#f2b605" },
                }}
              >
                Pay with airtime (MTN users only)
              </Button>
            </div>
            <div className="self-stretch h-[60px] flex flex-row items-start justify-start py-[0px] pl-[33px] pr-[35px] box-border max-w-full">
              <Button
                className="self-stretch flex-1 max-w-full"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "13",
                  background: "#1dc9a0",
                  borderRadius: "7px",
                  "&:hover": { background: "#1dc9a0" },
                }}
              >
                Pay with debit/credit card
              </Button>
            </div>
            <div className="self-stretch h-[100px] flex flex-row items-start justify-start pt-[0px] pb-[40px] pl-[33px] pr-[35px] box-border max-w-full">
              <Button
                className="self-stretch flex-1 max-w-full"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "13",
                  background: "#f2b605",
                  borderRadius: "7px",
                  "&:hover": { background: "#f2b605" },
                }}
              >
                Pay with airtime (MTN users only)
              </Button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[0px] pb-[17px] pl-[21px] pr-[23px] box-border max-w-full">
              <FrameComponent8
                frame8="Proceed"
                propFlex="1"
                propAlignSelf="unset"
                frameButtonHeight="48px"
              />
            </div>
            <footer className="self-stretch shadow-[0px_0px_12px_rgba(0,_0,_0,_0.25)] rounded-t-[20px] rounded-b-[0px] bg-[#fff] flex flex-row items-start justify-start p-[25px] relative gap-[41px] text-center text-[8px] text-[#097586] font-[Poppins] mq361:gap-[20px] mq407:flex-wrap">
              <div className="w-[33px] flex flex-col items-start justify-start pt-[3.8px] px-[0px] pb-[0px] box-border">
                <div
                  className="self-stretch flex flex-col items-start justify-start gap-[1px] cursor-pointer"
                  onClick={onFrameContainerClick}
                >
                  <div className="flex flex-row items-start justify-start py-[0px] px-[2px]">
                    <img
                      className="h-[28px] w-[29px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/mask-group@2x.png"
                    />
                  </div>
                  <div className="self-stretch relative">Home</div>
                </div>
              </div>
              <div className="h-[47.7px] w-[50px] relative text-[#fe8601]">
                <div className="absolute top-[36.7px] left-[0px] inline-block w-[50px] h-[11px]">
                  Subscribe
                </div>
                <img
                  className="absolute top-[0px] left-[3.7px] w-[42.7px] h-[42.7px] object-cover z-[1]"
                  alt=""
                  src="/mask-group-1@2x.png"
                />
              </div>
              <div className="w-[50px] flex flex-col items-start justify-start pt-[4.3px] px-[0px] pb-[0px] box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                  <div className="flex flex-row items-start justify-start py-[0px] px-[6px]">
                    <img
                      className="h-[27px] w-[37.8px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/icons8games50@2x.png"
                    />
                  </div>
                  <div className="self-stretch relative inline-block min-w-[50px]">
                    Play Games
                  </div>
                </div>
              </div>
              <div className="w-[55px] flex flex-col items-start justify-start pt-[5.1px] px-[0px] pb-[0px] box-border">
                <div
                  className="self-stretch flex flex-col items-start justify-start gap-[0.5px] cursor-pointer"
                  onClick={onFrameContainerClick1}
                >
                  <div className="flex flex-row items-start justify-start py-[0px] pl-[7px] pr-[8px]">
                    <img
                      className="h-[26px] w-[40px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/icons8leaderboard50-1@2x.png"
                    />
                  </div>
                  <div className="self-stretch relative inline-block min-w-[55px]">
                    Leader Board
                  </div>
                </div>
              </div>
              <div
                className="w-[31px] !m-[0] absolute top-[28.8px] right-[25px] flex flex-col items-start justify-end pt-[29px] px-[0px] pb-[0px] box-border cursor-pointer"
                onClick={onProfileOptionContainerClick}
              >
                <div className="self-stretch flex flex-row items-start justify-start relative">
                  <img
                    className="h-[29px] w-[27px] absolute !m-[0] top-[-28.5px] left-[calc(50%_-_13.5px)] object-cover"
                    loading="lazy"
                    alt=""
                    src="/layer-24-1@2x.png"
                  />
                  <div className="flex-1 relative">Me</div>
                </div>
              </div>
            </footer>
          </section>
        </main>
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

export default Payment;
