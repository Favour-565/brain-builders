import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GetStarted = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGetStartedContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div
      className={`h-[30px] flex-1 shadow-[0px_3px_4px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-[#fe8601] overflow-hidden flex flex-row items-start justify-start pt-[2px] px-[17px] pb-[0px] box-border whitespace-nowrap cursor-pointer z-[4] text-left text-[20px] text-[#002724] font-[Nexa] ${className}`}
      onClick={onGetStartedContainerClick}
    >
      <div className="flex-1 relative leading-[150%]">Get Started</div>
    </div>
  );
};

GetStarted.propTypes = {
  className: PropTypes.string,
};

export default GetStarted;
