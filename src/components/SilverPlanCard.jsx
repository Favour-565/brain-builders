import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SilverPlanRow from "./SilverPlanRow";
import PropTypes from "prop-types";

const SilverPlanCard = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSilverPlanButtonClick = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <section
      className={`h-[503px] flex flex-row items-start justify-start pt-[0px] px-[19px] pb-[82px] box-border text-left text-[9px] text-[#fff] font-['Satoshi_Variable'] ${className}`}
    >
      <div className="self-stretch w-[320px] flex flex-row items-start justify-start flex-wrap content-start gap-x-[13px] gap-y-[16px]">
        <SilverPlanRow onSilverPlanButtonClick={onSilverPlanButtonClick} />
        <SilverPlanRow onSilverPlanButtonClick={onSilverPlanButtonClick} />
        <SilverPlanRow onSilverPlanButtonClick={onSilverPlanButtonClick} />
        <div className="w-[150px] rounded-[10px] bg-[#0f3556] flex flex-col items-start justify-start pt-[3px] px-[17px] pb-[15px] box-border gap-[24px]">
          <div className="w-[113px] flex flex-row items-start justify-start">
            <div className="h-[139px] flex-1 relative leading-[140%] inline-block">
              <p className="m-[0px]">
                <span className="text-[10px] whitespace-pre-wrap">
                  <span className="font-black font-['Satoshi_Variable']">{`SILVER PLAN
`}</span>
                </span>
                <span className="font-medium whitespace-pre-wrap">
                  <span className="text-[10px] whitespace-pre-wrap">
                    &nbsp;
                  </span>
                  <span className="whitespace-pre-wrap">
                    • ONE DAY FREE TRIAL
                  </span>
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
          <Button
            className="self-stretch h-[23px]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "10",
              background: "#31bf51",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#31bf51" },
              height: 23,
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

SilverPlanCard.propTypes = {
  className: PropTypes.string,
};

export default SilverPlanCard;
