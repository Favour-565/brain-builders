import { Button } from "@mui/material";
import FrameComponent8 from "./FrameComponent8";
import PropTypes from "prop-types";

const RightContent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0px] pb-[12px] pl-[20px] pr-[18px] box-border max-w-full shrink-0 ${className}`}
    >
      <form className="m-[0px] flex-1 flex flex-col items-start justify-start gap-[77.6px] shrink-0 max-w-full mq392:gap-[39px]">
        <div className="self-stretch flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[3px] box-border gap-[20px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4.9px]">
            <div className="w-[241px] flex flex-row items-start justify-start">
              <h1 className="m-[0px] w-[241px] relative text-[24px] tracking-[0.01em] font-black font-['Satoshi_Variable'] text-[#002724] text-left inline-block">
                Create your account
              </h1>
              <div className="w-[93px] flex flex-col items-start justify-start pt-[9.9px] px-[0px] pb-[0px] box-border ml-[-241px]">
                <a className="[text-decoration:none] self-stretch relative text-[14px] font-medium font-['Satoshi_Variable'] text-[#002724] text-left z-[1]">
                  Name
                </a>
              </div>
            </div>
            <div className="self-stretch h-[48px] rounded-[8px] bg-[#fff] overflow-hidden shrink-0" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative text-[14px] font-medium font-['Satoshi_Variable'] text-[#002724] text-left inline-block min-w-[93px]">
              Email Address
            </div>
            <input
              className="[border:none] [outline:none] bg-[#fff] self-stretch h-[48px] rounded-[8px] overflow-hidden shrink-0 min-w-[232px]"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="w-[93px] relative text-[14px] font-medium font-['Satoshi_Variable'] text-[#002724] text-left inline-block">
              Password
            </div>
            <input
              className="[border:none] [outline:none] bg-[#fff] self-stretch h-[48px] rounded-[8px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0px] pl-[338px] pr-[16px] box-border min-w-[233px]"
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12.1px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-[0px] pl-[0px] pr-[39px] box-border gap-[8.3px] max-w-full">
              <div className="flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px]">
                <input
                  className="m-[0px] w-[16.7px] h-[16.7px] relative"
                  type="checkbox"
                />
              </div>
              <h3 className="m-[0px] flex-1 relative text-[12px] text-[#002724] text-left inline-block min-w-[211px] max-w-full">
                <span className="font-[Abel]">{`I accept Samwell `}</span>
                <span className="[text-decoration:underline] font-medium font-['Satoshi_Variable']">
                  Terms,
                </span>
                <span className="font-[Abel]">{` `}</span>
                <span className="[text-decoration:underline] font-medium font-['Satoshi_Variable']">
                  Privacy
                </span>
                <span className="font-[Abel]">{` and `}</span>
                <span className="[text-decoration:underline] font-medium font-['Satoshi_Variable']">
                  Refund Policy
                </span>
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-[0px] pl-[0px] pr-[39px] box-border gap-[8.3px] max-w-full">
              <div className="flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px]">
                <input
                  className="m-[0px] w-[16.7px] h-[16.7px] relative"
                  type="checkbox"
                />
              </div>
              <h3 className="m-[0px] flex-1 relative text-[12px] font-medium font-['Satoshi_Variable'] text-[#002724] text-left inline-block min-w-[211px] max-w-full">{`Send me the occasional news & updates (optional)`}</h3>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <FrameComponent8
            frame8="Sign Up"
            propFlex="unset"
            propAlignSelf="stretch"
            frameButtonHeight="48px"
          />
          <Button
            className="self-stretch h-[48px] mq400:pl-[20px] mq400:pr-[20px] mq400:box-border"
            startIcon={<img width="17px" height="17px" src="/--1.svg" />}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#002724",
              fontSize: "16",
              borderColor: "#04c323",
              borderRadius: "12px",
              "&:hover": { borderColor: "#04c323" },
              height: 48,
            }}
          >
            Sign Up with Gmail
          </Button>
        </div>
      </form>
    </section>
  );
};

RightContent.propTypes = {
  className: PropTypes.string,
};

export default RightContent;
