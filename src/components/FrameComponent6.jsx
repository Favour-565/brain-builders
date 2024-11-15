import { Button } from "@mui/material";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1074px]  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  rounded-[16px] border border-white flex flex-col items-center justify-center  box-border gap-[35px]  bg-[url('/rectangle-72@2x.png')]  bg-cover bg-no-repeat bg-[top] max-w-full z-[2] text-center text-[12px]   font-[Abel] mq361:gap-[17px] ${className}`}
    >
      <div className="w-[825px]  flex flex-row items-center justify-center  box-border max-w-full">
        <Button
          className="h-[62px]  w-[210px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#118e96",
            fontSize: "30",
            background: "#fff",
            borderRadius: "10px",
            "&:hover": { background: "#fff" },
            width: 210,
            height: 62,
          }}
        >
          Buy coin
        </Button>
      </div>

      {/* Grid Layout for the Image Frames */}
      <div className="w-[825px]  grid grid-cols-3 gap-[70px] right-[5px]">
        {/* First Row */}
        <div className="flex flex-col items-center justify-start">
          <img
            className="h-[141px] w-[200px] object-fit"
            alt=""
            src="/frame-427319930@2x.png"
          />
          
        </div>

        <div className="flex flex-col items-center justify-start">
          <img
            className="h-[141px] w-[200px] object-fit"
            alt=""
            src="/frame-427319929@2x.png"
          />
          
        </div>

        <div className="flex flex-col items-center justify-start">
          <img
            className="h-[141px] w-[200px] object-fit"
            alt=""
            src="/frame-427319930@2x.png"
          />
          
        </div>

        {/* Second Row */}
        <div className="flex flex-col items-center justify-start">
          <img
            className="h-[141px] w-[200px] object-fit"
            alt=""
            src="/frame-427319930@2x.png"
          />
          
        </div>

        <div className="flex flex-col items-center justify-start">
          <img
            className="h-[141px] w-[200px] object-fit"
            alt=""
            src="/frame-427319929@2x.png"
          />
          
        </div>

        <div className="flex flex-col items-center justify-start">
          <img
            className="h-[141px] w-[200px] object-fit"
            alt=""
            src="/frame-427319930@2x.png"
          />
          
        </div>

        {/* Third Row */}
        <div className="flex flex-col items-center justify-start">
          
          
        </div>

        <div className="flex flex-col  items-center justify-start">
          <img
            className="h-[141px] w-[200px] object-fit"
            alt=""
            src="/frame-427319929@2x.png"
          />
          
        </div>

        <div className="flex flex-col items-center justify-start">
          
          
        </div>
        

        
        

        

        
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
