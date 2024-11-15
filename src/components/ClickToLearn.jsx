import { useCallback } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ClickToLearn = ({ className = "" }) => {
  const navigate = useNavigate();

  const onPLAYNOWTextClick = useCallback(() => {
    navigate("/category1");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-[61.7px] pb-[256.2px] pl-[23px] pr-[18px] box-border relative gap-[78.4px] max-w-full z-[2] text-center text-[16px] text-[#fff] font-[Nexa] mq361:gap-[20px] mq361:pt-[26px] mq361:pb-[109px] mq361:box-border mq370:pt-[40px] mq370:pb-[167px] mq370:box-border mq400:gap-[39px] ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/macbook-air--1@2x.png"
        data-scroll-to="macBookAir1"
      />
      <div className="w-[1228px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
        <Link to="/category1">
        <Button
          className="h-[59.6px] w-[296px] font-[Nexa] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.2)] z-[1]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#128e96",
            fontSize: "32",
            background: "#fff",
            borderRadius: "40px",
            "&:hover": { background: "#fff" },
            width: 296,
            height: 59.6,
          }}
        >
          Click to Learn
        </Button>
        </Link>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[85.8px] max-w-full mq361:gap-[21px] mq400:gap-[43px]">
        <div className="self-stretch grid flex-row items-end justify-start gap-[13px] shrink-0 grid-cols-[repeat(4,_minmax(226px,_1fr))] mq361:grid-cols-[minmax(226px,_1fr)] mq370:justify-center mq370:grid-cols-[repeat(2,_minmax(226px,_393px))]">
          <div className="h-[267.7px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5px] box-border">
            <div className="self-stretch flex-1 flex flex-col items-end justify-start pt-[42.9px] pb-[42.3px] pl-[57px] pr-[60px] gap-[35.5px] bg-[url('/public/image-12@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1] mq361:gap-[18px] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border"> 
              <img
                className="w-[295px] h-[267.7px] relative object-cover hidden"
                alt=""
                src="/image-12@2x.png"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/play-and-learn1@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[9px] pr-[8px]">
                <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] h-[53.9px] flex-1 relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                    alt=""
                    src="/play-icon.svg"
                  />
                  <div
                    className="absolute top-[13.6px] left-[27px] text-[16px] leading-[122.2%] font-[Nexa] text-[#fff] text-center inline-block w-[107px] h-[27.2px] cursor-pointer z-[2]"
                    onClick={onPLAYNOWTextClick}
                  >
                    PLAY NOW
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="h-[262.4px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[6px] box-border">
            <div className="self-stretch flex-1 flex flex-col items-end justify-start pt-[37.6px] pb-[42.3px] pl-[58px] pr-[60px] gap-[34.5px] bg-[url('/public/image-23@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1] mq361:gap-[17px] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border">
              <img
                className="w-[296px] h-[262.4px] relative object-cover hidden"
                alt=""
                src="/image-23@2x.png"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/brain-tutor-11@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[9px] pr-[8px]">
                <div className="h-[53.9px] flex-1 relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector-21.svg"
                  />
                  <div
                    className="absolute top-[13.6px] left-[27px] font-[Nexa] leading-[122.2%] inline-block w-[107px] h-[27.2px] cursor-pointer z-[2]"
                    onClick={onPLAYNOWTextClick}
                  >
                    PLAY NOW
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[267.4px] flex flex-col items-start justify-start pt-[42.6px] px-[58px] pb-[42.3px] box-border gap-[34.5px] bg-[url('/public/image-31@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1] mq361:gap-[17px] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border">
            <img
              className="w-[296px] h-[267.4px] relative object-cover hidden"
              alt=""
              src="/image-31@2x.png"
            />
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/take-exams1@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[8px] pr-[11px]">
              <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] h-[53.9px] flex-1 relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  alt=""
                  src="/play-icon1.svg"
                />
                <div
                  className="absolute top-[13.6px] left-[28px] text-[16px] leading-[122.2%] font-[Nexa] text-[#fff] text-center inline-block w-[107px] h-[27.2px] cursor-pointer z-[2]"
                  onClick={onPLAYNOWTextClick}
                >
                  PLAY NOW
                </div>
              </button>
            </div>
          </div>
          <div className="h-[267.7px] flex flex-col items-start justify-start pt-[42.9px] pb-[42.3px] pl-[62px] pr-[61px] box-border gap-[34.5px] bg-[url('/public/image-41@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1] mq361:gap-[17px] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border">
            <img
              className="w-[302px] h-[267.7px] relative object-cover hidden"
              alt=""
              src="/image-41@2x.png"
            />
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/challenge-yourself-11@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-[0px] px-[9px]">
              <div className="h-[53.9px] flex-1 relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  alt=""
                  src="/play-icon2.svg"
                />
                <div
                  className="absolute top-[13.6px] left-[28px] leading-[122.2%] font-[Nexa] inline-block w-[107px] h-[27.2px] cursor-pointer z-[2]"
                  onClick={onPLAYNOWTextClick}
                >
                  PLAY NOW
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1194px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full shrink-0">
          <div className="flex flex-row items-end justify-start pt-[13.6px] px-[0px] pb-[0px] box-border gap-[24px] max-w-full z-[1] mq361:flex-wrap">
            <img
              className="self-stretch w-[150px] relative rounded-[7px] max-h-full object-cover min-h-[47px]"
              alt=""
              src="/image-1-2@2x.png"
            />
            <img
              className="h-[45px] w-[150px] relative rounded-[7px] object-cover"
              alt=""
              src="/image-2-2@2x.png"
            />
          </div>
        </div>
       </div>
     </div>
   );
};

ClickToLearn.propTypes = {
  className: PropTypes.string,
};

export default ClickToLearn;
