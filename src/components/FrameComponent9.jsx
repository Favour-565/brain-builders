import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent9 = ({
  className = "",
  silverPlan,
  vuesaxlineartickCircle,
}) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/payment-mode");
  }, [navigate]);

  return (
    <div
      className={`flex-1 rounded-[12px] bg-[#0f3556] overflow-hidden flex flex-col items-start justify-start pt-[30px] px-[16px] pb-[56px] box-border gap-[50px] min-w-[227px] max-w-[247px] text-left text-[20px] text-[#fff] font-[Abel] mq361:pt-[20px] mq361:pb-[36px] mq361:box-border ${className}`}
    >
      <div className="w-[206px] flex flex-col items-start justify-start gap-[36px]">
        <div className="w-[154px] flex flex-row items-start justify-start py-[0px] px-[4px] box-border">
          <div className="flex-1 flex flex-row items-start justify-start">
            <h3 className="m-[0px] flex-1 relative text-inherit leading-[140%] font-normal font-[inherit] mq361:text-[16px] mq361:leading-[22px]">
              {silverPlan}
            </h3>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px] text-[14px]">
          <div className="w-[144px] flex flex-row items-start justify-start gap-[8px]">
            <input
              className="cursor-pointer m-[0px] h-[20px] w-[20px] relative min-h-[20px]"
              type="radio"
            />
            <div className="flex-1 relative leading-[20px]">
              One day free trial
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <input
              className="cursor-pointer m-[0px] h-[20px] w-[20px] relative min-h-[20px]"
              type="radio"
            />
            <div className="relative leading-[20px] inline-block min-w-[71px]">
              #100/ Day
            </div>
          </div>
          <div className="w-[134px] flex flex-row items-start justify-start gap-[8px]">
            <input
              className="cursor-pointer m-[0px] h-[20px] w-[20px] relative min-h-[20px]"
              type="radio"
            />
            <div className="flex-1 relative leading-[20px]">
              24 hours access
            </div>
          </div>
          <div className="w-[201px] flex flex-row items-start justify-start gap-[8px]">
            <input
              className="cursor-pointer m-[0px] h-[20px] w-[20px] relative min-h-[20px]"
              type="radio"
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
            <div className="flex-1 relative leading-[20px]">70 bonus coins</div>
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
            <img
              className="h-[20px] w-[20px] relative"
              alt=""
              src={vuesaxlineartickCircle}
            />
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
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
  silverPlan: PropTypes.string,
  vuesaxlineartickCircle: PropTypes.string,
};

export default FrameComponent9;
