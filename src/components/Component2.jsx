import { useState, useMemo, useCallback } from "react";
import { Button } from "@mui/material";
import DropMenu from "./DropMenu";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Component2 = ({
  className = "",
  logo2,
  frameDivColor,
  onPlayGamesTextClick,
  onLeaderboardTextClick,
  onPricingTextClick,
  onGroupButtonClick,
  onGroupContainerClick,
  propBorder,
  propColor,
}) => {
  const [isDropMenuOpen, setDropMenuOpen] = useState(false);
  const home1Style = useMemo(() => {
    return {
      color: frameDivColor,
    };
  }, [frameDivColor]);

  const frameDiv7Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const signUpForFreeStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const navigate = useNavigate();

  const openDropMenu = useCallback(() => {
    setDropMenuOpen(true);
  }, []);

  const closeDropMenu = useCallback(() => {
    setDropMenuOpen(false);
  }, []);

  const onHomeTextClick = useCallback(() => {
    navigate("/landing-page");
  }, [navigate]);

  const onPlayGamesTextClick1 = useCallback(() => {
    navigate("/sub-category");
    const anchor = document.querySelector("[data-scroll-to='macBookAir1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [navigate]);

  const onInviteFriendsTextClick = useCallback(() => {
    navigate("/invite-friends");
  }, [navigate]);

  const onLeaderboardTextClick1 = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onGroupButtonClick1 = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <>
      <div
        className={`flex-1 bg-[#fff] flex flex-row items-start justify-start pt-[11px] px-[65px] pb-[9px] box-border gap-[76px] max-w-full text-center text-[16px] text-[#000] font-[Nexa] ${className}`}
      >
        <div className="w-[167px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[23px] box-border">
          <img
            className="self-stretch h-[44px] relative max-w-full overflow-hidden shrink-0 object-cover"
            
            alt=""
            src={logo2}
          />
        </div>
        <nav className="m-[0px] w-[534px] flex flex-col items-start justify-start pt-[13px] px-[0px] pb-[0px] box-border max-w-full">
          <nav className="m-[0px] self-stretch flex flex-row items-start justify-start gap-[20px] text-center text-[16px] text-[#128e96] font-[Nexa]">
            <a
              className="[text-decoration:none] w-[45px] relative text-[#f17700] flex items-center justify-center min-w-[45px] cursor-pointer"
              onClick={onHomeTextClick}
              style={home1Style}
            >
              Home
            </a>
            <a
              className="[text-decoration:none] w-[90px] relative text-[inherit] flex items-center justify-center whitespace-nowrap cursor-pointer"
              onClick={onPlayGamesTextClick}
            >
              Play Games
            </a>
            <a
              className="[text-decoration:none] flex-1 relative text-[inherit] inline-block min-w-[102px] whitespace-nowrap cursor-pointer"
              onClick={onInviteFriendsTextClick}
            >
              Invite Friends
            </a>
            <a
              className="[text-decoration:none] flex-1 relative text-[inherit] cursor-pointer"
              onClick={onLeaderboardTextClick}
            >
              Leaderboard
            </a>
            <div className="w-[56px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[5px] box-border">
              <a
                className="[text-decoration:none] self-stretch relative text-[inherit] inline-block min-w-[51px]"
                onClick={onPricingTextClick}
              >
                Pricing
              </a>
            </div>
            <a
              className="[text-decoration:none] w-[40px] relative text-[inherit] flex items-center justify-center min-w-[40px] cursor-pointer"
              onClick={openDropMenu}
            >
              More
            </a>
            
          </nav>
        </nav>
        <div className="h-[42px] w-[262px] flex flex-row items-start justify-start">
          <div className="mt-[-1px] h-[44px] flex-1 flex flex-row items-start  justify-start gap-[8px]">
            <Button
              className="self-stretch w-[84px] cursor-pointer font-bold text-[inherit]"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                
                fontSize: "16",
                borderColor: "#bbc42f",
                borderRadius: "20px",
                "&:hover": { borderColor: "#bbc42f" },
                width: 84,
              }}
              onClick={onGroupButtonClick}
            >
              Login
            </Button>
            <div
              className="flex-1 flex flex-row items-start justify-start cursor-pointer"
              onClick={onGroupContainerClick}
            >
              <div
                className="flex-1 rounded-[20px] border-[#bbc42f] border-[0.5px] border-solid flex flex-row items-start justify-start py-[9px] px-[19px]"
                style={frameDiv7Style}
              >
                <a
                  className="[text-decoration:none] flex-1 relative font-extrabold text-[inherit] whitespace-nowrap"
                  style={signUpForFreeStyle}
                >
                  Sign-up for Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDropMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDropMenu}
        >
          <DropMenu onClose={closeDropMenu} />
        </PortalPopup>
      )}
    </>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
  logo2: PropTypes.string,

  /** Style props */
  frameDivColor: PropTypes.any,
  propBorder: PropTypes.any,
  propColor: PropTypes.any,

  /** Action props */
  onPlayGamesTextClick: PropTypes.func,
  onLeaderboardTextClick: PropTypes.func,
  onPricingTextClick: PropTypes.func,
  onGroupButtonClick: PropTypes.func,
  onGroupContainerClick: PropTypes.func,
};

export default Component2;
