import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ListItem = ({ className = "", ellipse7, sports, propTextDecoration }) => {
  const sportsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const navigate = useNavigate();

  const onInnerItemContentClick = useCallback(() => {
    navigate("/sub-category");
  }, [navigate]);

  return (
    <div
      className={`w-[85px] flex flex-col items-end justify-start gap-[7px] text-center text-[10px] text-[#fff] font-[Abel] ${className}`}
    >
      <img
        className="w-[85px] h-[85px] relative rounded-[50%] object-cover"
        alt=""
        src={ellipse7}
      />
      <div className="self-stretch flex flex-row items-start justify-end py-[0px] pl-[8px] pr-[5px]">
        <div
          className="flex-1 rounded-[3px] bg-[#0b2239] flex flex-row items-start justify-start py-[0px] px-[19px] cursor-pointer"
          onClick={onInnerItemContentClick}
        >
          <a
            className="[text-decoration:none] flex-1 relative leading-[20px] text-[inherit]"
            style={sportsStyle}
          >
            {sports}
          </a>
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  ellipse7: PropTypes.string,
  sports: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default ListItem;
