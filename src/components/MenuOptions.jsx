import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const MenuOptions = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMenuListClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div
      className={`self-stretch h-[360px] flex flex-col items-start justify-start gap-[20px] shrink-0 text-left text-[16px] text-[#4a4e4f] font-[Abel] ${className}`}
    >
      <div className="self-stretch flex-1 shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.12)] rounded-[9px] bg-[#fff]" />
      <div className="self-stretch flex-1 shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.12)] rounded-[9px] bg-[#fff]" />
      <div className="self-stretch flex-1 shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.12)] rounded-[9px] bg-[#fff]" />
      <div className="self-stretch shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.12)] rounded-[9px] bg-[#fff] flex flex-row items-start justify-center pt-[22px] px-[20px] pb-[18px] relative">
        <h1 className="!m-[0] flex-1 absolute top-[-206px] left-[123px] text-inherit font-normal font-[inherit] text-center">
          Profile settings
        </h1>
        <h1 className="!m-[0] flex-1 absolute top-[-130.01px] left-[123px] text-inherit font-normal font-[inherit]">
          Invite friends
        </h1>
        <h1 className="!m-[0] flex-1 absolute top-[-54.02px] left-[123px] text-inherit font-normal font-[inherit]">
          Notifications
        </h1>
        <h1 className="m-[0px] w-[113px] relative text-inherit leading-[16px] font-normal font-[inherit] flex items-center shrink-0">
          Leaderboard
        </h1>
      </div>
      <Button
        className="self-stretch h-[56px] shadow-[0px_2px_2.8px_rgba(0,_0,_0,_0.12)] cursor-pointer"
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#e34033",
          borderRadius: "9px",
          "&:hover": { background: "#e34033" },
          width: 360,
          height: 56,
        }}
        onClick={onMenuListClick}
      >
        Log out
      </Button>
    </div>
  );
};

MenuOptions.propTypes = {
  className: PropTypes.string,
};

export default MenuOptions;
