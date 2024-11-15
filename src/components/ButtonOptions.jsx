import { Button } from "@mui/material";
import FrameComponent8 from "./FrameComponent8";
import PropTypes from "prop-types";

const ButtonOptions = ({ className = "" }) => {
  return (
    <form
      className={`m-[0px] self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-[0px] pb-[7px] pl-[1px] pr-[9px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[25px] max-w-full mq352:flex-wrap">
          <div className="h-[27px] w-[54px] shadow-[0px_-4px_6.4px_rgba(0,_0,_0,_0.25)_inset] rounded-[25px] bg-[#f17700] flex flex-row items-start justify-start py-[9px] px-[6px] box-border relative whitespace-nowrap">
            <div className="w-[80px] absolute !m-[0] top-[calc(50%_-_12px)] left-[-13.5px] text-[11px] leading-[24px] font-[Abel] text-[#fff] text-center inline-block">
              50 / 50
            </div>
          </div>
          <div className="h-[27px] flex-[0.9231] shadow-[0px_-4px_6.4px_rgba(0,_0,_0,_0.25)_inset] rounded-[26px] bg-[#002724] flex flex-row items-start justify-start py-[0px] px-[11px] box-border min-w-[61px] whitespace-nowrap mq352:flex-1">
            <div className="mt-[-5px] w-[70px] relative text-[11px] leading-[37px] font-[Abel] text-[#fff] text-center inline-block">
              Audience poll
            </div>
          </div>
          <div className="h-[27px] flex-1 shadow-[0px_-4px_6.4px_rgba(0,_0,_0,_0.25)_inset] rounded-[26px] bg-[#128e96] flex flex-row items-start justify-start py-[0px] px-[8px] box-border min-w-[57px] whitespace-nowrap mq352:flex-1">
            <a className="mt-[-5px] [text-decoration:none] w-[70px] relative text-[11px] leading-[37px] font-[Abel] text-[#fff] text-center inline-block">
              Skip question
            </a>
          </div>
          <div className="h-[27px] shadow-[0px_-4px_6.4px_rgba(0,_0,_0,_0.25)_inset] rounded-[26px] bg-[#e34033] flex flex-row items-start justify-start py-[0px] px-[11px] box-border whitespace-nowrap">
            <div className="mt-[-5px] w-[56px] relative text-[11px] leading-[37px] font-[Abel] text-[#fff] text-center inline-block min-w-[56px]">
              Reset time
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[9px]">
        <div className="self-stretch flex flex-col items-start justify-center gap-[12px]">
          <div className="self-stretch rounded-[8px] bg-[#fff] overflow-hidden flex flex-row items-center justify-start py-[19.5px] pl-[16px] pr-[305px] gap-[13px] mq391:pr-[20px] mq391:box-border">
            <img
              className="h-[16.7px] w-[16.7px] relative"
              alt=""
              src="/radiobutton.svg"
            />
            <div className="relative text-[16px] leading-[150%] font-medium font-['Satoshi_Variable'] text-[#002724] text-left inline-block min-w-[40px]">
              Teeth
            </div>
          </div>
          <div className="self-stretch rounded-[8px] bg-[#fff] overflow-hidden flex flex-row items-center justify-start py-[19.5px] pl-[16px] pr-[287px] gap-[13px] mq391:pr-[20px] mq391:box-border">
            <img
              className="h-[16.7px] w-[16.7px] relative"
              alt=""
              src="/radiobutton.svg"
            />
            <div className="relative text-[16px] leading-[150%] font-medium font-['Satoshi_Variable'] text-[#002724] text-left inline-block min-w-[58px]">
              Scapula
            </div>
          </div>
          <div className="self-stretch rounded-[8px] bg-[#fff] overflow-hidden flex flex-row items-center justify-start py-[19.5px] pl-[16px] pr-[308px] gap-[13px] mq391:pr-[20px] mq391:box-border">
            <img
              className="h-[16.7px] w-[16.7px] relative"
              alt=""
              src="/radiobutton.svg"
            />
            <div className="relative text-[16px] leading-[150%] font-medium font-['Satoshi_Variable'] text-[#002724] text-left inline-block min-w-[37px]">
              Cord
            </div>
          </div>
          <div className="self-stretch rounded-[8px] bg-[#fff] overflow-hidden flex flex-row items-center justify-start py-[19.5px] pl-[16px] pr-[263px] gap-[13px] whitespace-nowrap mq391:pr-[20px] mq391:box-border">
            <img
              className="h-[16.7px] w-[16.7px] relative"
              alt=""
              src="/radiobutton.svg"
            />
            <div className="relative text-[16px] leading-[150%] font-medium font-['Satoshi_Variable'] text-[#002724] text-left inline-block min-w-[82px]">
              Spinal cord
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end">
        <div className="w-[263px] flex flex-row items-start justify-start py-[0px] pl-[20px] pr-[0px] box-border gap-[19px]">
          <Button
            className="h-[38px] flex-1"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#002724",
              fontSize: "16",
              borderColor: "#04c323",
              borderRadius: "6px",
              "&:hover": { borderColor: "#04c323" },
              height: 38,
            }}
          >
            Previous
          </Button>
          <FrameComponent8
            frame8="Next"
            propFlex="0.6"
            propAlignSelf="unset"
            frameButtonHeight="38px"
          />
        </div>
      </div>
    </form>
  );
};

ButtonOptions.propTypes = {
  className: PropTypes.string,
};

export default ButtonOptions;
