import { useState, useCallback } from "react";
import SlideMenu from "./SlideMenu";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent14 = ({ className = "" }) => {
  const [isSlideMenuOpen, setSlideMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openSlideMenu = useCallback(() => {
    setSlideMenuOpen(true);
  }, []);

  const closeSlideMenu = useCallback(() => {
    setSlideMenuOpen(false);
  }, []);

  const onUserNameContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <>
      <section
        className={`self-stretch flex flex-row items-start justify-end py-[0px] pl-[36px] pr-[32px] box-border max-w-full text-center text-[32px] text-[#0b2239] font-[Nexa] ${className}`}
      >
        <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[50px] max-w-full mq362:gap-[25px]">
          <div className="flex flex-col items-start justify-start pt-[21px] px-[0px] pb-[0px]">
            <div
              className="w-[28px] h-[14px] relative cursor-pointer z-[2]"
              onClick={openSlideMenu}
            >
              <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
              <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
              <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start relative min-w-[185px]">
            <img
              className="h-[147.5px] w-[147.5px] absolute !m-[0] bottom-[64.5px] left-[27px] rounded-[50%] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/ellipse-5@2x.png"
            />
            <div className="flex-1 flex flex-col items-end justify-start gap-[270px] mq284:gap-[135px]">
              <div
                className="rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] cursor-pointer z-[2]"
                onClick={onUserNameContainerClick}
              >
                <div className="h-[41px] w-[102px] relative rounded-[7px] bg-[#fff] hidden" />
                <img
                  className="h-[28px] w-[89px] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/logo-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="w-[202px] flex flex-col items-end justify-start gap-[4px]">
                  <h1 className="m-[0px] self-stretch relative text-inherit leading-[32px] font-normal font-[inherit]">
                    Abdul Rauf
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[7px] pr-[6px] text-[15px]">
                    <h2 className="m-[0px] flex-1 relative text-inherit font-normal font-[inherit] whitespace-nowrap">
                      abdulrauf344@gmail.com
                    </h2>
                  </div>
                </div>
              </div>
            </div>
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

FrameComponent14.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent14;
