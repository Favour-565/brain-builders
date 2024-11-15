import PropTypes from "prop-types";

const PlanOptions = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-[0px] px-[61px] pb-[28px] text-center text-[12px] text-[#0b2239] font-['Satoshi_Variable'] mq358:pl-[20px] mq358:pr-[20px] mq358:box-border ${className}`}
    >
      <div className="flex-1 rounded-[19px] bg-[rgba(235,235,235,0.4)] flex flex-row items-start justify-start py-[3px] px-[8px]">
        <div className="rounded-[14px] bg-[#fff] border-[#eee] border-[0.7px] border-solid overflow-hidden flex flex-row items-start justify-start flex-wrap content-start py-[8px] px-[18px]">
          <h3 className="m-[0px] relative text-inherit leading-[15px] font-medium font-[inherit] inline-block min-w-[27px]">
            Daily
          </h3>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-[0px] pb-[0px] ml-[-5px]">
          <div className="rounded-[20.55px] flex flex-row items-start justify-start py-[7.5px] px-[21px] box-border min-w-[82.19px] z-[1]">
            <h3 className="m-[0px] w-[40px] relative text-inherit leading-[15px] font-medium font-[inherit] flex items-center justify-center min-w-[40px]">
              Weekly
            </h3>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-[0px] pb-[0px] ml-[-5px]">
          <div className="rounded-[20.55px] flex flex-row items-start justify-start py-[7.5px] px-[19px] box-border min-w-[82.19px] z-[2]">
            <h3 className="m-[0px] w-[44px] relative text-inherit leading-[15px] font-medium font-[inherit] flex items-center justify-center min-w-[44px]">
              Monthly
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

PlanOptions.propTypes = {
  className: PropTypes.string,
};

export default PlanOptions;
