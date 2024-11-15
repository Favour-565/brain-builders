import { useState, useCallback } from "react";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const Instruction = () => {
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

  return (
    <>
      <div className="w-full relative rounded-[20px] bg-[#fafafa] overflow-hidden flex flex-col items-end justify-start pt-[27px] px-[23px] pb-[41px] box-border gap-[418px] leading-[normal] tracking-[normal]">
        <img
          className="w-full h-[72px] absolute !m-[0] top-[-1px] right-[0px] left-[0px] rounded-[4px] max-w-full overflow-hidden shrink-0"
          alt=""
          src="/frame-427319836.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[13px] pr-[9px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-[13px] px-[0px] pb-[0px]">
              <div
                className="w-[28px] h-[14px] relative cursor-pointer z-[1]"
                onClick={openSlideMenu}
              >
                <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
              </div>
            </div>
            <div
              className="rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] cursor-pointer z-[1]"
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
          </div>
        </div>
        <footer className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full text-left text-[32px] text-[#fe8601] font-[Nexa]">
          <div className="w-[188px] flex flex-row items-start justify-start py-[0px] px-[3px] box-border">
            <h1 className="m-[0px] flex-1 relative text-inherit tracking-[0.01em] font-normal font-[inherit] z-[1]">
              Instructions
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-justify text-[14px] text-[#fff]">
            <img
              className="h-[867px] w-[451px] absolute !m-[0] top-[-462px] right-[-36px] object-cover"
              loading="lazy"
              alt=""
              src="/home-page-mobile-5-1@2x.png"
            />
            <div className="flex-1 relative leading-[150%] inline-block max-w-full z-[1]">
              <p className="m-[0px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco `}</p>
              <p className="m-[0px]">&nbsp;</p>
              <p className="m-[0px] whitespace-pre-wrap">
                laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
              <p className="m-[0px]">&nbsp;</p>
              <p className="m-[0px]">{` exercitation ullamco laboris nisi ut aliquip.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut `}</p>
              <p className="m-[0px]">&nbsp;</p>
              <p className="m-[0px]">
                aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip.
              </p>
            </div>
          </div>
        </footer>
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

export default Instruction;
