import { useCallback, useState } from "react"; 
import { Button } from "@mui/material";
import FrameComponent8 from "./FrameComponent8";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // Validation function to check form inputs
  const validateForm = () => {
    const errors = {};
    const phoneRegex = /^[0-9]{11}$/; // Only numbers, exactly 11 digits
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@_]).{8,}$/; // At least one lowercase, one uppercase, one special character (!@_), minimum 8 characters

    // Phone number validation
    if (!phoneRegex.test(phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number (11 digits).";
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      errors.password =
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character (!, @, _), and be at least 8 characters long.";
    }

    setErrors(errors);
    // Return true if no errors
    return Object.keys(errors).length === 0;
  };

  const onGroupFormClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSignUpTextClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <form
      className={`m-[0px] flex absolute top-[111px] left-[604px] shadow-[2px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-[#fff] flex flex-col items-start justify-start pt-[27px] px-[34px] pb-[30px] box-border gap-[37px] max-w-full cursor-pointer z-[2] mq370:gap-[18px] mq370:pt-[20px] mq370:pb-[20px] box-border ${className}`}
      onClick={onGroupFormClick}
    >
      <h1 className="m-[0px] w-full relative text-[32px] tracking-[0.01em] font-extrabold font-[Nexa] text-[#002724] text-center inline-block min-h-[49px] z-[1] mq361:text-[19px] mq400:text-[26px]">
        Welcome Back!
      </h1>
      <div className="w-[480px] flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[10.3px] box-border gap-[20px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <label className="text-[14px] font-[Nexa] text-[#002724]">
            PHONE NO:
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-[480px] relative shadow h-[48px] text-[14px] text-base p-3 border-none rounded outline-none focus:ring-gray-500 focus:border-gray-500 focus:ring-1 overflow-hidden bg-[#fafafa] font-[Nexa] text-[#002724] text-left inline-block z-[1]"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
          )}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <p className="text-[14px] font-[Nexa] text-[#002724] text-left">
            PASSWORD:
          </p>
          <div className="w-[480px] relative text-[14px] font-[Nexa] text-[#002724] text-left inline-block z-[1]">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 m-0 shadow bg-[#fafafa] text-base border-none rounded outline-none focus:ring-gray-500 focus:border-gray-500 focus:ring-1"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq361:flex-wrap">
          <div className="w-[179px] flex flex-row items-start justify-start gap-[8.3px]">
            <div className="flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px]">
              <input
                className="m-[0px] w-[16.7px] h-[16.7px] color-[#00C17D] relative shrink-0"
                type="checkbox"
              />
            </div>
            <div className="flex-1 relative text-[14px] font-[Nexa] text-[#002724] text-left shrink-0">
              Remember Me
            </div>
          </div>
          <div className="w-[133px] flex flex-col items-start justify-start pt-[2.4px] px-[0px] pb-[0px] box-border">
            <div className="self-stretch relative text-[14px] font-[Nexa] text-[#002724] text-left">
            <a href="#" className="w-[133px] text-[14px] font-[Nexa] text-[#002724] text-right hover:underline">
            Forgot Password?
          </a>
              
            </div>
          </div>
        
        
      </div>
      <div className="w-[480px] flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[11px] box-border max-w-full">
        <FrameComponent8
          frame8="Sign In"
          validateForm={validateForm} // Pass validateForm to FrameComponent8
        />
      </div>
      <Button
        className="w-[480px] h-[48px] max-w-full z-[1] mq361:pl-[20px] mq361:pr-[20px] mq361:box-border"
        startIcon={<img width="17px" height="17px" src="\_Ã Ã°_1.png" />}
        disableElevation
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#002724",
          fontSize: "16",
          borderColor: "#04c323",
          borderRadius: "6px",
          "&:hover": { borderColor: "#04c323" },
          width: 480,
          height: 48,
        }}
      >
        Sign In with Gmail
      </Button>
      <div className="w-[362px] flex flex-col items-center justify-center py-0 px-4 box-border max-w-full">
  {/* "Don't have an account?" and "Sign Up" */}
  <div className="w-full flex flex-row items-start ml-[90px] justify-center space-x-6">
    <div className="text-[14px] font-extrabold font-[Nexa] text-[#002724]">
      Don’t have an account?
    </div>
    <div
      className="text-[14px] underline font-extrabold font-[Nexa] text-[#002724] cursor-pointer"
      onClick={onSignUpTextClick}
    >
      Sign Up
    </div>
  </div>

  {/* "Having trouble?" and "Chat now" */}
  <div className="w-full flex flex-row items-start justify-center ml-[90px] space-x-14 mt-4">
    <div className="text-[14px] font-extrabold font-[Nexa] text-[#002724]">
      Having trouble?
    </div>
    <div className="text-[14px] underline font-bold font-[Nexa] text-[#002724] cursor-pointer">
    <a href="/chat" className="w-[133px] text-[14px] font-[Nexa] text-[#002724] text-right hover:underline">
            Chat Now
          </a>
    </div>
  </div>
</div>


    </form>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
