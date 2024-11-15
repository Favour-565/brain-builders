import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component2 from "./Component2";
import PropTypes from "prop-types";

const Component1 = ({
  className = "",
  component255Flex,
  component255AlignSelf,
  line1,
  line2,
  logo2,
  frameDivColor,
  propBorder,
  propColor,
}) => {
  const component255Style = useMemo(() => {
    return {
      flex: component255Flex,
      alignSelf: component255AlignSelf,
    };
  }, [component255Flex, component255AlignSelf]);

  const navigate = useNavigate();

  const onPlayGamesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='macBookAir1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLeaderboardTextClick = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <header
      className={`h-[64px] flex-1 relative max-w-full z-[4] text-center text-[16px] text-[#000] font-[Nexa] ${className}`}
      style={component255Style}
    >
      <div className="absolute top-[-10px] left-[-10px] w-[1300px] flex flex-row items-start justify-start p-[10px] box-border">
        <Component2
          logo2={logo2}
          frameDivColor={frameDivColor}
          onPlayGamesTextClick={onPlayGamesTextClick}
          onLeaderboardTextClick={onLeaderboardTextClick}
          onGroupButtonClick={onGroupButtonClick}
          onGroupContainerClick={onGroupContainerClick}
          propBorder={propBorder}
          propColor={propColor}
        />
      </div>
      <div className="absolute top-[30px] left-[848px] w-[17px] h-[6px] z-[1]">
        <img
          className="absolute top-[0px] left-[0px] w-[8.5px] h-[6px] object-contain"
          
          alt=""
          src='/Line 1.png'
        />
        <img
          className="absolute top-[0px] left-[8.5px] w-[8.5px] h-[6px] object-contain"
          alt=""
          src='/Line 2.png'
        />
      </div>
    </header>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  logo2: PropTypes.string,
  frameDivColor: PropTypes.string,
  propBorder: PropTypes.string,
  propColor: PropTypes.string,

  /** Style props */
  component255Flex: PropTypes.any,
  component255AlignSelf: PropTypes.any,
};

export default Component1;
