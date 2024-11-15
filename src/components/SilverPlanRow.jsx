import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SilverPlanRow = ({ className = "", onSilverPlanButtonClick }) => {
  const navigate = useNavigate();

  const onSilverPlanButtonClick1 = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <div
      className={`w-[150px] rounded-[10px] bg-[#0f3556] flex flex-col items-start justify-start py-[15.5px] px-[17px] box-border relative gap-[11px] text-left text-[9px] text-[#fff] font-['Satoshi_Variable'] ${className}`}
    >
      <div className="w-[113px] flex flex-row items-start justify-start">
        <div className="h-[139px] flex-1 relative leading-[140%] inline-block">
          <p className="m-[0px]">
            <span className="text-[10px] whitespace-pre-wrap">
              <span className="font-black font-['Satoshi_Variable']">{`SILVER PLAN
`}</span>
            </span>
            <span className="font-medium whitespace-pre-wrap">
              <span className="text-[10px] whitespace-pre-wrap">&nbsp;</span>
              <span className="whitespace-pre-wrap">• ONE DAY FREE TRIAL</span>
            </span>
          </p>
          <p className="m-[0px]">
            <span className="font-medium whitespace-pre-wrap">
              <span className="whitespace-pre-wrap">• N100 / DAY</span>
            </span>
          </p>
          <p className="m-[0px]">
            <span className="font-medium whitespace-pre-wrap">
              <span className="whitespace-pre-wrap">• 24 HOURS ACCESS</span>
            </span>
          </p>
          <p className="m-[0px]">
            <span className="font-medium whitespace-pre-wrap">
              <span className="whitespace-pre-wrap">
                • FULL ACCESS TO ALL FEATURES
              </span>
            </span>
          </p>
          <p className="m-[0px]">
            <span className="font-medium whitespace-pre-wrap">
              <span className="whitespace-pre-wrap">• 70 BONUS COINS</span>
            </span>
          </p>
          <p className="m-[0px]">
            <span className="font-medium whitespace-pre-wrap">
              <span className="whitespace-pre-wrap">{`•  ELIGIBILITY TO WIN `}</span>
            </span>
          </p>
          <p className="m-[0px]">
            <span className="font-medium whitespace-pre-wrap">
              <span className="whitespace-pre-wrap">• CASH PRIZES</span>
            </span>
          </p>
        </div>
      </div>
      <div
        className="self-stretch h-[23px] relative rounded-[7px] bg-[#31bf51] cursor-pointer"
        onClick={onSilverPlanButtonClick}
      />
      <div
        className="absolute !m-[0] bottom-[20px] left-[calc(50%_-_26px)] text-[10px] leading-[140%] font-medium inline-block min-w-[52px] whitespace-nowrap z-[1]"
        onClick={onSilverPlanButtonClick}
      >
        Get Started
      </div>
    </div>
  );
};

SilverPlanRow.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onSilverPlanButtonClick: PropTypes.func,
};

export default SilverPlanRow;
