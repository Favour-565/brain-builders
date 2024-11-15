import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GameLevels = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLevelTwoContentClick = useCallback(() => {
    navigate("/questions");
  }, [navigate]);

  return (
    <div
      className={`ml-[-5px] w-[1285px] overflow-x-auto flex flex-row items-start justify-between pt-[313px] pb-[244px] pl-[156px] pr-[140px] box-border relative gap-[20px] max-w-full mt-[-18px] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border mq370:pl-[78px] mq370:pr-[70px] mq370:pb-[103px] mq370:box-border mq400:pb-[159px] mq400:box-border ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] right-[-7px] bottom-[0px] shrink-0 object-contain"
        alt=""
        src="/progress@2x.png"
      />
      <div className="w-[181.8px] shrink-0 flex flex-col items-start justify-start gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="h-[180px] flex-1 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_#1ac547,_#076921)] border-[#fafafa] border-[0px] border-solid box-border w-full h-full z-[2]" />
            <img
              className="absolute top-[56px] left-[61.9px] w-[58px] h-[68px] object-cover z-[3]"
              loading="lazy"
              alt=""
              src="/frame-4273199152@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[10px] pr-[11px]">
          <Button
            className="h-[42px] flex-1 cursor-pointer z-[2]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "22",
              background: "#0b2239",
              borderRadius: "5px",
              "&:hover": { background: "#0b2239" },
              height: 42,
            }}
            onClick={onLevelTwoContentClick}
          >
            Level 1
          </Button>
        </div>
      </div>
      <div className="w-[450.9px] shrink-0 flex flex-col items-end justify-start gap-[81px] max-w-full mq361:gap-[40px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq370:flex-wrap">
          <div className="w-[181.8px] flex flex-col items-end justify-start gap-[18px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="h-[180px] flex-1 relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_#30749f,_#0f3556)] border-[#fafafa] border-[0px] border-solid box-border w-full h-full z-[2]" />
                <img
                  className="absolute top-[56px] left-[62px] w-[58px] h-[68px] object-cover z-[3]"
                  alt=""
                  src="/frame-427319915-11@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[11px] pr-[10px]">
              <Button
                className="h-[42px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "22",
                  background: "#0b2239",
                  borderRadius: "5px",
                  "&:hover": { background: "#0b2239" },
                  height: 42,
                }}
              >
                Level 2
              </Button>
            </div>
          </div>
          <div className="w-[181.8px] flex flex-col items-start justify-start gap-[18px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="h-[180px] flex-1 relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_#30749f,_#0f3556)] border-[#fafafa] border-[0px] border-solid box-border w-full h-full z-[2]" />
                <img
                  className="absolute top-[56px] left-[61.9px] w-[58px] h-[68px] object-cover z-[3]"
                  alt=""
                  src="/frame-427319915-11@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[10px] pr-[11px]">
              <Button
                className="h-[42px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "22",
                  background: "#0b2239",
                  borderRadius: "5px",
                  "&:hover": { background: "#0b2239" },
                  height: 42,
                }}
              >
                Level 3
              </Button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0px] pl-[25px] pr-[20px]">
          <Button
            className="h-[62px] w-[179px] z-[1]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "32",
              background: "#0b2239",
              borderRadius: "10px",
              "&:hover": { background: "#0b2239" },
              width: 179,
              height: 62,
            }}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="w-[181.8px] shrink-0 flex flex-col items-start justify-start gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="h-[180px] flex-1 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:linear-gradient(180deg,_#30749f,_#0f3556)] border-[#fafafa] border-[0px] border-solid box-border w-full h-full z-[2]" />
            <img
              className="absolute top-[56px] left-[61.9px] w-[58px] h-[68px] object-cover z-[3]"
              alt=""
              src="/frame-427319915-11@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[10px] pr-[11px]">
          <Button
            className="h-[42px] flex-1 z-[2]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "22",
              background: "#0b2239",
              borderRadius: "5px",
              "&:hover": { background: "#0b2239" },
              height: 42,
            }}
          >
            Level 4
          </Button>
        </div>
      </div>
    </div>
  );
};

GameLevels.propTypes = {
  className: PropTypes.string,
};

export default GameLevels;
