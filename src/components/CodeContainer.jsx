import { Button } from "@mui/material";
import PropTypes from "prop-types";

const CodeContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-[#0b2239] flex flex-col items-start justify-start py-[24px] px-[119px] box-border gap-[8px] max-w-full z-[2] text-left text-[16px] text-[#fff] font-[Nexa] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border mq370:pl-[59px] mq370:pr-[59px] mq370:box-border ${className}`}
    >
      <div className="w-[1280px] h-[114px] relative bg-[#0b2239] hidden max-w-full" />
      <div className="relative tracking-[0.01em] z-[1]">Your REFERRAL CODE</div>
      <div className="w-[392px] flex flex-row items-end justify-start flex-wrap content-end gap-[21px] max-w-full">
        <div className="h-[42px] flex-1 relative rounded-[3px] bg-[#fff] min-w-[168px] z-[1]" />
        <div className="w-[113px] flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[5px] box-border">
          <Button
            className="self-stretch h-[31px] z-[1]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#f17700",
              borderRadius: "3px",
              "&:hover": { background: "#f17700" },
              height: 31,
            }}
          >
            Copy code
          </Button>
        </div>
      </div>
    </div>
  );
};

CodeContainer.propTypes = {
  className: PropTypes.string,
};

export default CodeContainer;
