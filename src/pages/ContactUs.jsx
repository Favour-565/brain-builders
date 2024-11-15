import { useState, useCallback } from "react";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [isSlideMenuOpen, setSlideMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openSlideMenu = useCallback(() => {
    setSlideMenuOpen(true);
  }, []);

  const closeSlideMenu = useCallback(() => {
    setSlideMenuOpen(false);
  }, []);

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative rounded-[20px] bg-[#fff] overflow-hidden flex flex-col items-end justify-start py-[28px] pl-[19px] pr-[22px] box-border gap-[711px] leading-[normal] tracking-[normal]">
        <main className="w-full h-[860px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute top-[0px] left-[-23px] w-[476px] h-[932px] object-cover"
            alt=""
            src="/home-page-mobile-7-1@2x.png"
          />
          <img
            className="absolute top-[37px] left-[187px] w-[231px] h-[192px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/contact-us-1@2x.png"
          />
        </main>
        <img
          className="w-full h-[72px] absolute !m-[0] top-[0px] right-[0px] left-[0px] rounded-[4px] max-w-full overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/frame-427319836.svg"
        />
        <header className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[17px] pr-[10px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-[13px] px-[0px] pb-[0px]">
              <div
                className="w-[28px] h-[14px] relative cursor-pointer z-[2]"
                onClick={openSlideMenu}
              >
                <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
              </div>
            </div>
            <div
              className="rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] cursor-pointer z-[2]"
              onClick={onLogoContainerClick}
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
        </header>
        <Footer />
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

export default ContactUs;
