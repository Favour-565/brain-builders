import { useState, useCallback } from "react";
import DropMenu from "./DropMenu";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TopNavigation = ({ className = "" }) => {
  const [isDropMenuOpen, setDropMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openDropMenu = useCallback(() => {
    setDropMenuOpen(true);
  }, []);

  const closeDropMenu = useCallback(() => {
    setDropMenuOpen(false);
  }, []);

  const navigateTo = (path) => navigate(path);

  return (
    <>
      <header
        className={`w-full bg-white shadow-md py-4 px-6 flex items-center justify-between ${className}`}
      >
        {/* Logo Section */}
        <img
          className="h-10 object-cover cursor-pointer"
          src="/logo-2@2x.png"
          alt="Logo"
          onClick={() => navigateTo("/landing-page")}
        />

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a
            className="cursor-pointer hover:text-[#128e96]"
            onClick={() => navigateTo("/landing-page")}
          >
            Home
          </a>
          <a
            className="cursor-pointer hover:text-[#128e96]"
            onClick={() => navigateTo("/invite-friends")}
          >
            Invite Friends
          </a>
          <a
            className="cursor-pointer hover:text-[#128e96]"
            onClick={() => navigateTo("/leaderboard")}
          >
            Leaderboard
          </a>
          <a
            className="cursor-pointer hover:text-[#128e96]"
            onClick={() => navigateTo("/pricing")}
          >
            Pricing
          </a>
          <button
            className="cursor-pointer text-[#128e96] hover:underline"
            onClick={openDropMenu}
          >
            More
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={openDropMenu}
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Account Button */}
        <button
          className="hidden md:block bg-[#128e96] text-white py-2 px-4 rounded-md font-semibold"
          onClick={() => navigateTo("/profile1")}
        >
          My Account
        </button>
      </header>

      {/* Drop Menu (Mobile or "More" Dropdown) */}
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

TopNavigation.propTypes = {
  className: PropTypes.string,
};

export default TopNavigation;
