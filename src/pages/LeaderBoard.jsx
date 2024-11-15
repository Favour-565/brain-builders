import { useState, useCallback } from "react";
import SlideMenu from "../components/SlideMenu";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent13 from "../components/FrameComponent13";

const LeaderBoard = () => {
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
      <div className="w-full relative rounded-[20px] bg-[#fafafa] overflow-hidden flex flex-row items-start justify-start pt-[20px] px-[0px] pb-[0.3px] box-border leading-[normal] tracking-[normal]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[46px] px-[0px] pb-[0px] box-border max-w-full mq364:pt-[30px] mq364:box-border">
          {/* <img
            className="self-stretch relative rounded-t-[0px] rounded-b-[20px] max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
           
             
            alt=""
           
            
          /> */}
        </div>
        <div className="w-[430px] flex flex-col items-end justify-start py-[0px] px-[32px] box-border gap-[373px] max-w-full ml-[-430px]">
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[7px]">
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
              {/* <img
                className="h-[28px] w-[89px] relative object-cover z-[1]"
                loading="lazy"
                src="\Brain Builders 16.png"
                alt=""
                 
                
              /> */}
            </div>
          </div>
          <main className="mr-[-34px] w-[433px] flex flex-col items-start justify-start gap-[55px] max-w-[119%] shrink-0">
            <FrameComponent12 />
            <FrameComponent13 />
          </main>
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

export default LeaderBoard;
