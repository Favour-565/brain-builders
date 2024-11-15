import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Game = ({
  className = "",
  propTop,
  propBackgroundImage,
  propLeft,
  image4,
  challengeYourself1,
  vector4,
  propWidth,
}) => {
  const game4Style = useMemo(() => {
    return {
      top: propTop,
      backgroundImage: propBackgroundImage,
      left: propLeft,
    };
  }, [propTop, propBackgroundImage, propLeft]);

  const pLAYNOWStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const navigate = useNavigate();

  const onGame4ContainerClick = useCallback(() => {
    navigate("/category");
  }, [navigate]);

  return (
    <div
      className={`absolute top-[190px] left-[196px] w-[164px] h-[150.5px] bg-[url('/public/image-4@2x.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer text-center text-[13px] text-[#fff] font-[Abel] ${className}`}
      onClick={onGame4ContainerClick}
      style={game4Style}
    >
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
        alt=""
        src={image4}
      />
      <img
        className="absolute top-[24.1px] left-[29px] w-[105.2px] h-[52.9px] object-cover z-[1]"
        loading="lazy"
        alt=""
        src={challengeYourself1}
      />
      <div className="absolute top-[96.4px] left-[35px] w-[94.7px] h-[30.3px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
          loading="lazy"
          alt=""
          src={vector4}
        />
        <h2
          className="m-[0px] absolute top-[2.6px] left-[12px] text-inherit leading-[122.2%] font-normal font-[inherit] inline-block w-[71px] h-[15px] z-[2]"
          style={pLAYNOWStyle}
        >
          PLAY NOW
        </h2>
      </div>
    </div>
  );
};

Game.propTypes = {
  className: PropTypes.string,
  image4: PropTypes.string,
  challengeYourself1: PropTypes.string,
  vector4: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Game;
