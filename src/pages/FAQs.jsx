import { useState, useCallback } from "react";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const FAQs = () => {
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
      <div className="w-full relative rounded-[20px] bg-[#fff] overflow-hidden flex flex-col items-start justify-start pt-[41px] px-[0px] pb-[0px] box-border leading-[normal] tracking-[normal]">
        <img
          className="w-[491px] h-[990px] absolute !m-[0] bottom-[-122px] left-[-31px] object-contain"
          loading="lazy"
          alt=""
          src="/home-page-7-1@2x.png"
        />
        <img
          className="w-full h-[72px] absolute !m-[0] top-[0px] right-[0px] left-[0px] rounded-[4px] max-w-full overflow-hidden shrink-0 z-[2]"
          alt=""
          src="/frame-427319836.svg"
        />
        <div
          className="!m-[0] absolute top-[16px] right-[31px] rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] cursor-pointer z-[3]"
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
        <div className="flex flex-row items-start justify-start py-[0px] px-[36px]">
          <div
            className="h-[14px] w-[28px] relative cursor-pointer z-[3]"
            onClick={openSlideMenu}
          >
            <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
          </div>
        </div>
        <main className="self-stretch [background:linear-gradient(180deg,_rgba(3,_11,_25,_0),_#010918)] flex flex-col items-start justify-start pt-[377px] px-[23px] pb-[93px] box-border max-w-full z-[1] text-left text-[50px] text-[#01b5f9] font-[Nexa]">
          <div className="w-[430px] h-[877px] relative [background:linear-gradient(180deg,_rgba(3,_11,_25,_0),_#010918)] hidden max-w-full" />
          <h1 className="m-[0px] w-[132px] relative text-inherit tracking-[0.01em] leading-[50px] font-normal font-[inherit] inline-block z-[2]">
            FAQs
          </h1>
          <section className="self-stretch relative text-[14px] leading-[150%] font-[Nexa] text-[#fff] text-justify z-[2]">
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
              aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
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

export default FAQs;
