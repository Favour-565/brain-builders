import { useState, useCallback } from "react";
import SlideMenu from "./SlideMenu";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TopContent = ({ className = "" }) => {
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
      <section
        className={`self-stretch flex flex-row items-start justify-between py-[0px] pl-[0px] pr-[14px] gap-[20px] text-left text-[20px] text-[#002724] font-['Satoshi_Variable'] mq353:flex-wrap ${className}`}
      >
        <div className="flex flex-col items-start justify-start pt-[20px] px-[0px] pb-[0px] box-border min-w-[98px] mq353:flex-1">
          <div className="flex flex-col items-start justify-start gap-[52px]">
            <div className="flex flex-row items-start justify-start py-[0px] px-[17px]">
              <div
                className="h-[14px] w-[28px] relative cursor-pointer z-[1]"
                onClick={openSlideMenu}
              >
                <div className="absolute top-[5.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                <div className="absolute top-[-1.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
                <div className="absolute top-[12.5px] left-[-1.5px] border-[#0b2167] border-t-[3px] border-solid box-border w-[31px] h-[3px]" />
              </div>
            </div>
            <a className="[text-decoration:none] h-[27px] relative tracking-[0.01em] font-black text-[inherit] inline-block min-w-[98px]">
              Questions
            </a>
          </div>
        </div>
        <div className="w-[191px] flex flex-col items-end justify-start gap-[45px] min-w-[191px] text-center text-[24px] text-[#fff] font-[Abel] mq353:flex-1">
          <div className="flex flex-row items-start justify-end py-[0px] px-[7px]">
            <div
              className="rounded-[7px] bg-[#fff] flex flex-row items-start justify-start pt-[7px] pb-[6px] pl-[7px] pr-[6px] cursor-pointer z-[1] mq353:flex-1"
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
          <div className="self-stretch flex flex-col items-end justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start gap-[7px]">
              <div className="w-[82px] rounded-[25px] bg-[#32a350] flex flex-row items-start justify-start py-[2.5px] px-[11px] box-border gap-[3px]">
                <div className="flex flex-col items-start justify-start pt-[3px] px-[0px] pb-[0px]">
                  <img
                    className="w-[19px] h-[19px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/k-25-1@2x.png"
                  />
                </div>
                <div className="w-[25px] flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[9px] box-border gap-[14px] [transform:_rotate(-90deg)]">
                  <h1 className="m-[0px] self-stretch relative text-inherit leading-[1px] font-normal font-[inherit] inline-block min-w-[10px]">
                    .
                  </h1>
                  <h1 className="m-[0px] self-stretch relative text-inherit leading-[1px] font-normal font-[inherit] inline-block min-w-[10px]">
                    .
                  </h1>
                </div>
                <a className="[text-decoration:none] w-[21px] relative text-[11px] leading-[25px] text-[inherit] inline-block shrink-0">
                  12
                </a>
              </div>
              <div className="rounded-[25px] border-[#00336f] border-[1px] border-solid flex flex-row items-start justify-start pt-[1px] px-[7px] pb-[2px] gap-[9px] text-[11px] text-[#0f3556]">
                <div className="flex flex-col items-start justify-start pt-[5px] px-[0px] pb-[0px]">
                  <img
                    className="w-[14px] h-[14px] relative"
                    loading="lazy"
                    alt=""
                    src="/frame-4273199151.svg"
                  />
                </div>
                <div className="w-[12px] flex flex-col items-start justify-start pt-[6px] px-[0px] pb-[0px] box-border">
                  <a className="[text-decoration:none] self-stretch relative leading-[14px] text-[inherit] inline-block min-w-[12px]">
                    5
                  </a>
                </div>
                <div className="h-[23px] w-[24px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-0 h-[23px] object-contain"
                    loading="lazy"
                    alt=""
                    src="/line-3.svg"
                  />
                  <img
                    className="absolute top-[5px] left-[10px] w-[14px] h-[14px]"
                    loading="lazy"
                    alt=""
                    src="/frame-427319916.svg"
                  />
                </div>
                <div className="w-[9px] flex flex-col items-start justify-start pt-[7px] px-[0px] pb-[0px] box-border">
                  <a className="[text-decoration:none] self-stretch relative leading-[13px] text-[inherit] inline-block min-w-[9px]">
                    0
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[56px] flex flex-row items-start justify-end py-[0px] px-[13px] box-border text-[13px]">
              <div className="flex-1 relative leading-[28px] z-[1]">3/5</div>
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

TopContent.propTypes = {
  className: PropTypes.string,
};

export default TopContent;
