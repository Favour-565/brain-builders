import { useState, useCallback } from "react";
import SlideMenu from "./SlideMenu";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const MainContainer = ({ className = "" }) => {
  const [isSlideMenuOpen, setSlideMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openSlideMenu = useCallback(() => {
    setSlideMenuOpen(true);
  }, []);

  const closeSlideMenu = useCallback(() => {
    setSlideMenuOpen(false);
  }, []);

  const onGetStartedContainerClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <>
      <section
        className={`w-[430px] flex flex-row items-start justify-start py-[0px] pl-[26px] pr-[32px] box-border max-w-full text-left text-[44px] text-[#0b2167] font-[Abel] ${className}`}
      >
        <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[59px] max-w-full mq372:gap-[29px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-[0px] pb-[0px] box-border min-w-[137px]">
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <h1 className="!m-[0] h-[97px] w-[372px] absolute top-[94px] right-[-161px] text-inherit leading-[56px] font-normal font-[inherit] inline-block z-[1]">
                Catch Fun while Learning!
              </h1>
              <div className="flex-1 flex flex-col items-start justify-start gap-[186px] text-[16px] text-[#000]">
                <div className="flex flex-row items-start justify-start py-[0px] px-[10px]">
                  <div
                    className="h-[14px] w-[28px] relative cursor-pointer z-[1]"
                    onClick={openSlideMenu}
                  >
                    <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                    <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                    <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                    <div className="self-stretch flex flex-row items-start justify-start relative">
                      <img
                        className="h-[932px] w-[438px] absolute !m-[0] right-[-197px] bottom-[-670px]"
                        alt=""
                        src="/bg.svg"
                      />
                      <h1 className="m-[0px] flex-1 relative text-inherit font-normal font-[inherit] whitespace-pre-wrap z-[1]">
                        Test your skills | Win Big
                      </h1>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0px] px-[4px] text-[#fff] font-[Poppins]">
                      <div
                        className="shadow-[1px_-2px_4px_rgba(0,_0,_0,_0.15)_inset,_0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[16px] bg-[#fe8601] flex flex-row items-start justify-start pt-[1px] px-[21px] pb-[2px] whitespace-nowrap cursor-pointer z-[1]"
                        onClick={onGetStartedContainerClick}
                      >
                        <div className="h-[26px] w-[135px] relative shadow-[1px_-2px_4px_rgba(0,_0,_0,_0.15)_inset,_0px_2px_4px_rgba(0,_0,_0,_0.25)] rounded-[16px] bg-[#fe8601] hidden" />
                        <h1 className="m-[0px] relative text-inherit font-normal font-[inherit] inline-block min-w-[93px] z-[1]">
                          Get Started
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-[0px] px-[4px]">
                    <div className="flex flex-row items-end justify-start gap-[14px] z-[1]">
                      <img
                        className="self-stretch w-[74px] relative rounded-[4px] max-h-full object-cover min-h-[23px]"
                        loading="lazy"
                        alt=""
                        src="/image-1@2x.png"
                      />
                      <img
                        className="h-[22px] w-[74px] relative rounded-[4px] object-cover"
                        loading="lazy"
                        alt=""
                        src="/image-21@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] z-[1]">
            <div className="h-[41px] w-[102px] relative rounded-[7px] bg-[#fff] hidden" />
            <img
              className="h-[28px] w-[89px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
        </div>
      </section>
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

MainContainer.propTypes = {
  className: PropTypes.string,
};

export default MainContainer;
