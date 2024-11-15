import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent9 from "./FrameComponent9";
import PropTypes from "prop-types";

const PricingContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/payment-mode");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[27.3px] shrink-0 max-w-full text-center text-[32px] text-[#002724] font-[Nexa] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
        <div className="w-[554px] flex flex-col items-start justify-start gap-[7px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-[0px] pl-[20px] pr-[22px]">
            <h1 className="m-[0px] h-[98px] w-[384px] relative text-inherit tracking-[1px] leading-[47px] flex items-center z-[2] font-[inherit] mq361:text-[19px] mq361:leading-[28px] mq400:text-[26px] mq400:leading-[38px]">
              <span className="w-full">
                <p className="m-[0px]">
                  <span className="font-[Abel] text-[#0f3556]">
                    CHOOSE A PLAN
                  </span>
                  <span>
                    <span className="font-extrabold">{` `}</span>
                  </span>
                </p>
                <p className="m-[0px] font-[Abel]">
                  <span>
                    <span>THAT’S RIGHT FOR YOU</span>
                  </span>
                </p>
              </span>
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full text-left text-[16px] font-[Abel]">
            <div className="self-stretch relative leading-[28px] z-[2]">
              Choose the billing package that suits you the best. You can switch
              anytime.
            </div>
            <div className="w-[529.3px] flex flex-row items-start justify-start py-[0px] px-[3px] box-border max-w-full text-center text-[20px] text-[#0b2239] font-['Satoshi_Variable']">
              <div className="flex-1 rounded-[55px] bg-[rgba(235,235,235,0.4)] border-[#0b2239] border-[0.5px] border-solid box-border flex flex-row items-start justify-start py-[8px] pl-[25px] pr-[24px] gap-[27.4px] max-w-full z-[2] mq370:flex-wrap">
                <div className="rounded-[22px] bg-[#fff] border-[#eee] border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-[12px] px-[22px] min-w-[82.19px]">
                  <h3 className="m-[0px] relative text-inherit leading-[15px] font-medium font-[inherit] inline-block min-w-[45px] mq361:text-[16px] mq361:leading-[12px]">
                    Daily
                  </h3>
                </div>
                <div className="flex-1 rounded-[20.55px] flex flex-row items-start justify-start pt-[13.1px] px-[17px] pb-[13px] box-border min-w-[82px] mq370:flex-1">
                  <h3 className="m-[0px] w-[66px] relative text-inherit leading-[15px] font-medium font-[inherit] flex items-center justify-center min-w-[66px] mq361:text-[16px] mq361:leading-[12px]">
                    Weekly
                  </h3>
                </div>
                <div className="flex-1 rounded-[20.55px] flex flex-row items-start justify-start pt-[13.1px] px-[17px] pb-[13px] box-border min-w-[82px] mq370:flex-1">
                  <h3 className="m-[0px] w-[73px] relative text-inherit leading-[15px] font-medium font-[inherit] flex items-center justify-center min-w-[73px] mq361:text-[16px] mq361:leading-[12px]">
                    Monthly
                  </h3>
                </div>
                <div className="w-[89.8px] rounded-[20.55px] flex flex-row items-start justify-start pt-[13.1px] px-[17px] pb-[13px] box-border min-w-[82.19px]">
                  <h3 className="m-[0px] w-[54px] relative text-inherit leading-[15px] font-medium font-[inherit] flex items-center justify-center min-w-[54px] mq361:text-[16px] mq361:leading-[12px]">
                    Yearly
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[24px] z-[2] text-left text-[20px] text-[#fff] font-[Abel]">
        <div className="flex-1 rounded-[12px] bg-[#0f3556] overflow-hidden flex flex-col items-start justify-start pt-[30px] px-[16px] pb-[56px] box-border gap-[50px] min-w-[227px] max-w-[247px] mq361:pt-[20px] mq361:pb-[36px] mq361:box-border">
          <div className="w-[206px] flex flex-col items-start justify-start gap-[36px]">
            <div className="w-[154px] flex flex-row items-start justify-start py-[0px] px-[4px] box-border">
              <div className="flex-1 flex flex-row items-start justify-start">
                <h3 className="m-[0px] flex-1 relative text-inherit leading-[140%] font-normal font-[inherit] mq361:text-[16px] mq361:leading-[22px]">
                  Silver Plan
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px] text-[14px]">
              <div className="w-[144px] flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[20px] w-[20px] relative min-h-[20px]"
                  loading="lazy"
                  alt=""
                />
                <div className="flex-1 relative leading-[20px]">
                  One day free trial
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[20px] w-[20px] relative min-h-[20px]"
                  alt=""
                />
                <div className="relative leading-[20px] inline-block min-w-[71px]">
                  #100/ Day
                </div>
              </div>
              <div className="w-[134px] flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[20px] w-[20px] relative min-h-[20px]"
                  alt=""
                />
                <div className="flex-1 relative leading-[20px]">
                  24 hours access
                </div>
              </div>
              <div className="w-[201px] flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[20px] w-[20px] relative min-h-[20px]"
                  alt=""
                />
                <div className="flex-1 relative leading-[20px]">
                  Full access to all feautures
                </div>
              </div>
              <div className="w-[125px] flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[20px] w-[20px] relative min-h-[20px]"
                  alt=""
                />
                <div className="flex-1 relative leading-[20px]">
                  70 bonus coins
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[20px] w-[20px] relative min-h-[20px]"
                  alt=""
                />
                <div className="flex-1 relative leading-[20px]">
                  Eligibility to win cash prizes
                </div>
              </div>
              <div className="w-[78px] hidden flex-row items-start justify-start gap-[8px] text-[#2e4d00] font-[Nexa]">
                <img className="h-[20px] w-[20px] relative" alt="" />
                <div className="flex-1 relative leading-[140%] font-extrabold shrink-0">
                  Support
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[1px] pr-[2px]">
            <Button
              className="h-[41px] flex-1 shadow-[-3px_-3px_3.7px_rgba(0,_0,_0,_0.25)_inset,_0px_2px_8.7px_rgba(0,_0,_0,_0.24)] cursor-pointer"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#30749f",
                border: "rgba(0, 0, 0, 0.2) solid 0.5px",
                borderRadius: "33px",
                "&:hover": { background: "#30749f" },
                height: 41,
              }}
              onClick={onFrameButtonClick}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="flex-1 rounded-[12px] bg-[#0f3556] overflow-hidden flex flex-col items-start justify-start pt-[30px] px-[16px] pb-[56px] box-border gap-[50px] min-w-[227px] max-w-[247px] mq361:pt-[20px] mq361:pb-[36px] mq361:box-border">
          <div className="w-[206px] flex flex-col items-start justify-start gap-[36px]">
            <div className="w-[154px] flex flex-row items-start justify-start py-[0px] px-[4px] box-border">
              <div className="flex-1 flex flex-row items-start justify-start">
                <h3 className="m-[0px] flex-1 relative text-inherit leading-[140%] font-normal font-[inherit] mq361:text-[16px] mq361:leading-[22px]">
                  Gold Plan
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px] text-[14px]">
              <div className="w-[144px] flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[20px] w-[20px] relative min-h-[20px]"
                  alt=""
                />
                <div className="flex-1 relative leading-[20px]">
                  One day free trial
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[20px] w-[20px] relative min-h-[20px]"
                  alt=""
                />
                <div className="relative leading-[20px] inline-block min-w-[71px]">
                  #100/ Day
                </div>
              </div>
              <div className="w-[134px] flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[20px] w-[20px] relative min-h-[20px]"
                  alt=""
                />
                <div className="flex-1 relative leading-[20px]">
                  24 hours access
                </div>
              </div>
              <div className="w-[201px] flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-[20px] w-[20px] relative min-h-[20px]"
                  alt=""
                />
                <div className="flex-1 relative leading-[20px]">
                  Full access to all feautures
                </div>
              </div>
              <div className="w-[125px] flex flex-row items-start justify-start gap-[8px]">
                <input
                  className="cursor-pointer m-[0px] h-[20px] w-[20px] relative min-h-[20px]"
                  type="radio"
                />
                <div className="flex-1 relative leading-[20px]">
                  70 bonus coins
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                <input
                  className="cursor-pointer m-[0px] h-[20px] w-[20px] relative min-h-[20px]"
                  type="radio"
                />
                <div className="flex-1 relative leading-[20px]">
                  Eligibility to win cash prizes
                </div>
              </div>
              <div className="w-[78px] hidden flex-row items-start justify-start gap-[8px] text-[#2e4d00] font-[Nexa]">
                <img className="h-[20px] w-[20px] relative" alt="" />
                <div className="flex-1 relative leading-[140%] font-extrabold shrink-0">
                  Support
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[1px] pr-[2px]">
            <Button
              className="h-[41px] flex-1 shadow-[-3px_-3px_3.7px_rgba(0,_0,_0,_0.25)_inset,_0px_2px_8.7px_rgba(0,_0,_0,_0.24)] cursor-pointer"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#30749f",
                border: "rgba(0, 0, 0, 0.2) solid 0.5px",
                borderRadius: "33px",
                "&:hover": { background: "#30749f" },
                height: 41,
              }}
              onClick={onFrameButtonClick}
            >
              Get Started
            </Button>
          </div>
        </div>
        <FrameComponent9
          silverPlan="Platinum Plan"
          vuesaxlineartickCircle="pending_I2006:985;15:485"
        />
        <FrameComponent9
          silverPlan="Diamond Plan"
          vuesaxlineartickCircle="pending_I2006:1040;15:485"
        />
      </div>
    </div>
  );
};

PricingContent.propTypes = {
  className: PropTypes.string,
};

export default PricingContent;
