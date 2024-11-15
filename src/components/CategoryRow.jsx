import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

const CategoryRow = ({ className = "" }) => {
  const navigate = useNavigate();

  const onInnerItemContentClick = useCallback(() => {
    navigate("/sub-category");
  }, [navigate]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[10px] px-[40px] pb-[91px] box-border relative gap-[50px] max-w-full z-[2] text-center text-[10px] text-[#fff] font-[Abel] ${className}`}
    >
      <div className="!m-[0] absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-center justify-start p-[10px] box-border max-w-full">
        <img
          className="h-[554px] flex-1 relative rounded-[29px] max-w-full overflow-hidden object-cover"
          alt=""
          src="/rectangle-71@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0px] px-[80px] mq409:pl-[20px] mq409:pr-[20px] mq409:box-border">
        <Button
          className="h-[31px] flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#118e96",
            fontSize: "16",
            background: "#fff",
            borderRadius: "6px",
            "&:hover": { background: "#fff" },
            height: 31,
          }}
        >
          Select a Category
        </Button>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[28px] z-[1]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq389:flex-wrap">
          <div className="flex flex-col items-end justify-start gap-[7px]">
            <img
              className="w-[85px] h-[85px] relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="/ellipse-7@2x.png"
            />
            <div className="flex flex-row items-start justify-end py-[0px] pl-[8px] pr-[5px]">
              <div
                className="rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[17px] cursor-pointer"
                onClick={onInnerItemContentClick}
              >
                <a className="[text-decoration:none] w-[37px] relative leading-[20px] text-[inherit] inline-block min-w-[37px]">
                  Science
                </a>
              </div>
            </div>
          </div>
          <ListItem ellipse7="/ellipse-7-1@2x.png" sports="Sports" />
          <div className="flex flex-col items-end justify-start gap-[7px]">
            <img
              className="w-[85px] h-[85px] relative rounded-[50%] object-cover"
              alt=""
              src="/ellipse-7-2@2x.png"
            />
            <div className="flex flex-row items-start justify-end py-[0px] pl-[8px] pr-[5px]">
              <div
                className="rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[9px] cursor-pointer"
                onClick={onInnerItemContentClick}
              >
                <a className="[text-decoration:none] w-[53px] relative leading-[20px] text-[inherit] inline-block min-w-[53px]">
                  Technology
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq389:flex-wrap">
          <div className="flex flex-col items-end justify-start gap-[7px]">
            <img
              className="w-[85px] h-[85px] relative rounded-[50%] object-cover"
              alt=""
              src="/ellipse-7-3@2x.png"
            />
            <div className="flex flex-row items-start justify-end py-[0px] pl-[8px] pr-[5px]">
              <div
                className="rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[23px] cursor-pointer"
                onClick={onInnerItemContentClick}
              >
                <div className="w-[26px] relative leading-[20px] inline-block min-w-[26px]">
                  Facts
                </div>
              </div>
            </div>
          </div>
          <ListItem
            ellipse7="/ellipse-7-4@2x.png"
            sports="Africa"
            propTextDecoration="unset"
          />
          <ListItem
            ellipse7="/ellipse-7-5@2x.png"
            sports="Movies"
            propTextDecoration="none"
          />
        </div>
        <div className="w-[272px] flex flex-row items-start justify-end">
          <div className="w-[210px] flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-end justify-start gap-[7px]">
              <img
                className="w-[85px] h-[85px] relative rounded-[50%] object-cover"
                alt=""
                src="/ellipse-7-6@2x.png"
              />
              <div className="flex flex-row items-start justify-end py-[0px] pl-[7px] pr-[6px]">
                <div
                  className="rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[25px] cursor-pointer"
                  onClick={onInnerItemContentClick}
                >
                  <a className="[text-decoration:none] w-[22px] relative leading-[20px] text-[inherit] inline-block min-w-[22px]">
                    Arts
                  </a>
                </div>
              </div>
            </div>
            <ListItem
              ellipse7="/ellipse-7-7@2x.png"
              sports="Histrory"
              propTextDecoration="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryRow.propTypes = {
  className: PropTypes.string,
};

export default CategoryRow;
