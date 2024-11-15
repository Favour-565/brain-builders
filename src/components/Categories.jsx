import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/subcategory");
  }, [navigate]);

  return (
    <div
      className={`absolute top-[18px] left-[35px] [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] w-[1275px] flex flex-row items-start justify-center pt-[120px] pb-[95px] pl-[25px] pr-[20px] box-border max-w-full z-[1] ${className}`}
    >
      <div className="h-[922px] w-[1280px] relative [background:linear-gradient(180deg,_rgba(48,_116,_159,_0.1),_#1d89c4)] hidden max-w-full" />
      <div className="h-[707px] w-[1074px] rounded-[29px] flex flex-col items-start justify-start relative gap-[10px] bg-[url('/public/rectangle-713@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[2]">
        <img
          className="self-stretch relative rounded-[29px] max-w-full overflow-hidden max-h-full object-cover hidden z-[0]"
          alt=""
          src="/rectangle-713@2x.png"
        />
        <Button
          className="!m-[0] absolute w-[250px] text-[18px] p-2 top-[0px] font-[Nexa] left-[440px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]"
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
          Select a Category
        </Button>
        <div className="w-[1012px] h-[537px] absolute !m-[0] top-[104px] left-[31px] z-[2]">
          <div className="absolute top-[0px] left-[0px] w-[202px] h-[258px]">
            <img
              className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
              loading="lazy"
              alt=""
              src="/ellipse-71@2x.png"
            />
            <Button
              className="absolute top-[198px] font-[Nexa] left-[21px] cursor-pointer"
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
              onClick={onFrameButtonClick}
            >
              Science
            </Button>
          </div>
          <div className="absolute top-[0px] left-[269px] w-[202px] h-[258px]">
            <img
              className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
              alt=""
              src="/ellipse-7-11@2x.png"
            />
            <Button
              className="absolute top-[198px] font-[Nexa] left-[21px] cursor-pointer"
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
              onClick={onFrameButtonClick}
            >
              Sports
            </Button>
          </div>
          <div className="absolute top-[0px] font-[Nexa] left-[538px] w-[202px] h-[258px]">
            <img
              className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
              alt=""
              src="/ellipse-7-21@2x.png"
            />
            <Button
              className="absolute top-[198px] left-[21px]"
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
            >
              Technology
            </Button>
          </div>
          <div className="absolute top-[0px] font-[Nexa] left-[807px] w-[202px] h-[258px]">
            <img
              className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
              alt=""
              src="/ellipse-7-31@2x.png"
            />
            <Button
              className="absolute top-[198px] font-[Nexa]  left-[21px] cursor-pointer"
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
              onClick={onFrameButtonClick}
            >
              Movies
            </Button>
          </div>
          <div className="absolute top-[297px] font-[Nexa] left-[0px] w-[202px] h-[258px]">
            <img
              className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
              alt=""
              src="/ellipse-7-41@2x.png"
            />
            <Button
              className="absolute top-[198px] font-[Nexa] left-[21px] cursor-pointer"
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
              onClick={onFrameButtonClick}
            >
              Facts
            </Button>
          </div>
          <div className="absolute top-[297px] font-[Nexa] left-[269px] w-[202px] h-[258px]">
            <img
              className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
              alt=""
              src="/ellipse-7-51@2x.png"
            />
            <Button
              className="absolute top-[198px] font-[Nexa] left-[21px] cursor-pointer"
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
              onClick={onFrameButtonClick}
            >
              Africa
            </Button>
          </div>
          <div className="absolute top-[297px] font-[Nexa] left-[538px] w-[202px] h-[258px]">
            <img
              className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
              alt=""
              src="/ellipse-7-61@2x.png"
            />
            <Button
              className="absolute top-[198px] font-[Nexa] left-[21px] cursor-pointer"
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
              onClick={onFrameButtonClick}
            >
              Arts
            </Button>
          </div>
          <div className="absolute top-[297px]font-[Nexa] left-[807px] w-[202px] h-[258px]">
            <img
              className="absolute w-[calc(100%_-_20.2px)] top-[0px] right-[10.1px] left-[10.1px] rounded-[50%] max-w-full overflow-hidden h-[180px] object-cover"
              alt=""
              src="/ellipse-7-71@2x.png"
            />
            <Button
              className="absolute top-[198px] font-[Nexa] left-[21px] cursor-pointer"
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
              onClick={onFrameButtonClick}
            >
              Histrory
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  className: PropTypes.string,
};

export default Categories;
