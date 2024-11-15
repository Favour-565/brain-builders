import { useMemo, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent18 = ({
  className = "",
  frame18,
  propFlex,
  propAlignSelf,
  frameButtonHeight,
  validateForm,  // Pass the validation function as a prop
}) => {
  const frameButtonStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      height: frameButtonHeight,
    };
  }, [propFlex, propAlignSelf, frameButtonHeight]);

  const navigate = useNavigate();


  return (
    <Button
      className={`h-[48px] flex-1 max-w-full cursor-pointer z-[1] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border ${className}`}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "16",
        background: "#04c323",
        borderRadius: "6px",
        "&:hover": { background: "#04c323" },
        height: 48,
      }}
      onClick={useCallback(() => {
        if (validateForm()) { // Call validateForm before navigating
          navigate("/landing-page");
        }
      }, [navigate, validateForm])}
      style={frameButtonStyle}
    >
      {frame18}
    </Button>
  );
};

FrameComponent18.propTypes = {
  className: PropTypes.string,
  frame8: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  frameButtonHeight: PropTypes.any,

  // Add the validateForm prop type
  validateForm: PropTypes.func.isRequired,
};

export default FrameComponent18;
