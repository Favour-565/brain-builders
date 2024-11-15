import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Succesful = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  return (
    <div
      className={`w-[358px] relative rounded-[25px] bg-[#fff] overflow-hidden flex flex-col items-end justify-start pt-[98px] pb-[96px] pl-[41px] pr-[42px] box-border gap-[38px] leading-[normal] tracking-[normal] max-w-full max-h-full ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[41px] pr-[39px] text-center text-[24px] text-[#4a4e4f] font-[Abel]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
          <div className="self-stretch flex flex-row items-start justify-start py-[0px] px-[19px]">
            <a className="[text-decoration:none] flex-1 relative leading-[29px] text-[inherit]">
              Success
            </a>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[14px] text-[13px]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[42px] pr-[43px]">
              <img
                className="h-[110px] w-[110px] relative object-cover"
                loading="lazy"
                alt=""
                src="/k-1-1@2x.png"
              />
            </div>
            <div className="self-stretch relative leading-[16px]">
              <p className="m-[0px]">{`Your Subscription has been `}</p>
              <p className="m-[0px]">proccessed successfully</p>
            </div>
          </div>
        </div>
      </section>
      <Button
        className="self-stretch h-[45px] cursor-pointer"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "14",
          background: "#04c323",
          borderRadius: "26px",
          "&:hover": { background: "#04c323" },
          height: 45,
        }}
        onClick={onFrameButtonClick}
      >
        Continue
      </Button>
    </div>
  );
};

Succesful.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Succesful;
