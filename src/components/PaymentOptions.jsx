import { Button } from "@mui/material";
import PropTypes from "prop-types";

const PaymentOptions = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-[8px] bg-[#0b2239] border-[#fff] border-[6px] border-solid box-border flex flex-col items-start justify-start pt-[45px] px-[46px] pb-[54px] gap-[58px] max-w-full z-[1] text-left text-[18px] text-[#000] font-[Abel] mq370:gap-[29px] mq370:pt-[29px] mq370:px-[23px] mq370:pb-[35px] mq370:box-border ${className}`}
    >
      <div className="w-[597px] h-[554px] relative rounded-[8px] bg-[#0b2239] border-[#fff] border-[6px] border-solid box-border hidden max-w-full" />
      <div className="w-[480px] flex flex-col items-start justify-start gap-[44px] max-w-full mq370:gap-[22px]">
        <Button
          className="self-stretch h-[71px] z-[2]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "18",
            background: "#fbe341",
            borderRadius: "6px",
            "&:hover": { background: "#fbe341" },
            height: 71,
          }}
        >
          Pay with Airtime (MTN Users only)
        </Button>
        <div className="self-stretch rounded-[6px] bg-[#fff] flex flex-row items-start justify-between py-[23px] px-[24px] box-border max-w-full gap-[20px] z-[2]">
          <div className="h-[71px] w-[480px] relative rounded-[6px] bg-[#fff] hidden max-w-full" />
          <div className="w-[325px] flex flex-col items-start justify-start pt-[5px] px-[0px] pb-[0px] box-border max-w-[calc(100%_-_45px)]">
            <div className="self-stretch h-[15px] relative tracking-[0.01em] inline-block shrink-0 z-[1]">
              Pay with Credit/Debit card
            </div>
          </div>
          <div className="h-[25px] w-[25px] relative rounded-[50%] border-[#000] border-[0px] border-solid box-border z-[1]" />
        </div>
        <Button
          className="self-stretch h-[71px] z-[2]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "18",
            background: "#fbe341",
            borderRadius: "6px",
            "&:hover": { background: "#fbe341" },
            height: 71,
          }}
        >
          Pay with MOMO (MTN Users only)
        </Button>
      </div>
      <div className="w-[481px] flex flex-row items-start justify-start py-[0px] pl-[43px] pr-[44px] box-border max-w-full mq370:pl-[21px] mq370:pr-[22px] mq370:box-border">
        <Button
          className="h-[70px] flex-1 max-w-full z-[2]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "24",
            background: "#04c323",
            borderRadius: "6px",
            "&:hover": { background: "#04c323" },
            height: 70,
          }}
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

PaymentOptions.propTypes = {
  className: PropTypes.string,
};

export default PaymentOptions;
