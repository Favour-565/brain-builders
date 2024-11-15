import { useState, useCallback } from "react";
import SlideMenu from "./SlideMenu";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent15 = ({ className = "" }) => {
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
      <div
        className={`ml-[-1px] self-stretch h-[392px] flex flex-row items-start justify-start relative max-w-full ${className}`}
      >
        <img
          className="h-[392px] flex-1 relative rounded-[44px] max-w-full overflow-hidden object-cover"
          alt=""
          src="/rectangle-59@2x.png"
        />
        <div className="w-[362px] !m-[0] absolute top-[28px] right-[31px] flex flex-row items-start justify-between gap-[20px]">
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

FrameComponent15.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent15;
