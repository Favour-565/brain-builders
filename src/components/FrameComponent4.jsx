import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIconLabelsClick = useCallback(() => {
    navigate("/levels1");
  }, [navigate]);

  return (
    <div
      className={`self-stretch h-[399px] rounded-[29px] flex flex-col items-start justify-start relative gap-[10px] bg-[url('/public/rectangle-714@2x.png')] bg-cover bg-no-repeat bg-[top] z-[3] text-center text-[22px] text-[#fff] font-[Nexa] ${className}`}
    >
      <img
        className="self-stretch relative rounded-[29px] max-w-full overflow-hidden max-h-full object-cover hidden z-[0]"
        alt=""
        src="/rectangle-714@2x.png"
      />
      <Button
        className="!m-[0] absolute p-2 w-[270px] text-[16px] font-[Nexa] top-[0px] left-[390px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]"
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#118e96",
          fontSize: "30",
          background: "#fff",
          borderRadius: "10px",
          "&:hover": { background: "#fff" },
        }}
      >
        Select Sub Category
      </Button>
      <div className="w-[1012px] h-[240px] absolute !m-[0] top-[104px] left-[31px] z-[2]">
        <div className="absolute top-[0px] left-[0px] w-[202px] h-[258px]">
          <img
            className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-71@2x.png"
          />
          <Button
            className="absolute top-[198px] left-[21px] cursor-pointer"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "22",
              background: "#0b2239",
              borderRadius: "5px",
              "&:hover": { background: "#0b2239" },
              width: 160,
            }}
            onClick={onIconLabelsClick}
          >
            Football
          </Button>
        </div>
        <div className="absolute top-[0px] left-[269px] w-[202px] h-[258px]">
  <img
    className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
    alt=""
    src="/ellipse-7-11@2x.png"
  />
  <div
    className="absolute top-[198px] left-[21px] rounded-[5px] bg-[#0b2239] w-[160px] flex flex-row items-center justify-center py-[11px] px-[25px] box-border cursor-pointer"
    onClick={onIconLabelsClick}
  >
    <h6 className="m-[0px] flex-1 relative text-xs leading-[16px] font-normal font-[inherit]">
      Basketball
    </h6>
  </div>
</div>
        <div className="absolute top-[0px] left-[538px] w-[202px] h-[258px]">
          <img
            className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
            alt=""
            src="/ellipse-7-21@2x.png"
          />
          <Button
            className="absolute top-[198px] left-[21px] cursor-pointer"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "22",
              background: "#0b2239",
              borderRadius: "5px",
              "&:hover": { background: "#0b2239" },
              width: 160,
            }}
            onClick={onIconLabelsClick}
          >
            Tennis
          </Button>
        </div>
        <div className="absolute top-[0px] left-[807px] w-[202px] h-[258px]">
          <img
            className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
            alt=""
            src="/ellipse-7-31@2x.png"
          />
          <Button
            className="absolute top-[198px] left-[21px] cursor-pointer"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "22",
              background: "#0b2239",
              borderRadius: "5px",
              "&:hover": { background: "#0b2239" },
              width: 160,
            }}
            onClick={onIconLabelsClick}
          >
            Rugby
          </Button>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
