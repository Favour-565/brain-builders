import { useCallback, useState } from "react"; 
import {
  TextField,
   InputAdornment,
  Icon,
   IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import FrameComponent18 from "./FrameComponent18";

const isPascalCase = (str) => /^[A-Z][a-z]+([A-Z][a-z]+)*$/.test(str);




const FrameComponent5 = ({ className = "" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  
  const navigate = useNavigate();

   // Validation function to check form inputs
   const validateForm = () => {
    const errors = {};
    // const phoneRegex = /^[0-9]{11}$/; // Only numbers, exactly 11 digits
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@_]).{8,}$/; // At least one lowercase, one uppercase, one special character (!@_), minimum 8 characters
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    


    if (!name.trim()) {
      errors.name = "Name is required.";
    } else if (name.length < 5 || name.length > 16) {
      errors.name = "Name must be between 5 and 16 characters.";
    } else if (!isPascalCase(name)) {
      errors.name = "Name must be in PascalCase format.";
    }

    // Email validation
    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
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


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (validateForm()) {
      // If form is valid, navigate to the landing page
      navigate("/landing-page");
    }
  };

  const onSignInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <form
    onSubmit={handleSubmit}
      className={`!m-[0] w-[563px] absolute top-[91px] left-[404px] shadow-[2px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-[#fff] flex flex-col items-end justify-start pt-[16px] pb-[33px] pl-[36px] pr-[42px] box-border gap-[23px] max-w-full z-[2] ${className}`}
    >
      <div className="w-[563px] h-[641px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[10px] bg-[#fff] hidden max-w-full" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-[0px] px-[68px] box-border max-w-full">
          <h1 className="m-[0px] w-[334px] relative text-[32px] tracking-[0.01em] font-extrabold font-[Nexa] text-[#002724] text-left inline-block min-h-[49px] max-w-full z-[3] mq361:text-[19px] mq370:text-[26px]">
            Create your account!
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[3px] pr-[0px] box-border max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[59px] flex-1 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.15)] font-[Nexa] text-[14px] text-[rgba(28,28,28,0.6)] max-w-full z-[3]"
              placeholder="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "59px",
                  backgroundColor: "#fafafa",
                  borderRadius: "6px",
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": { color: "rgba(28, 28, 28, 0.6)" },
              }}
            />
          </div>
          <TextField
            className="[border:none] bg-[transparent] pb[5px] self-stretch h-[59px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.15)] font-[Nexa] text-[14px] text-[rgba(28,28,28,0.6)] z-[3]"
            placeholder="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "59px",
                backgroundColor: "#fafafa",
                borderRadius: "6px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "rgba(28, 28, 28, 0.6)" },
            }}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-[0px] pb-[5px] pl-[0px] pr-[6px] box-border max-w-full">
        <TextField
          className="[border:none] bg-[transparent] h-[59px] flex-1 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.15)] font-[Nexa] text-[14px] text-[rgba(28,28,28,0.6)] max-w-full z-[4]"
          placeholder="Password"
          type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "59px",
              backgroundColor: "#fafafa",
              borderRadius: "6px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "rgba(28, 28, 28, 0.6)" },
          }}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-[15px] pb-[10.3px] pl-[3px] pr-[2px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[8.3px] max-w-full z-[3]">
          <input
            className="m-[0px] h-[16.7px] w-[16.7px] relative min-h-[17px]"
            type="checkbox"
          />
          <div className="w-[364px] flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px] box-border max-w-[calc(100%_-_25px)]">
            <div className="self-stretch relative text-[14px] font-[Nexa] text-[#002724] text-left">
              {`I accept Samwell `}
              <span className="[text-decoration:underline]">Terms,</span>
              {` `}
              <span className="[text-decoration:underline]">Privacy</span>
              {` and `}
              <span className="[text-decoration:underline]">Refund Policy</span>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[30.3px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[8.3px] max-w-full z-[3]">
          <input
            className="m-[0px] h-[16.7px] w-[16.7px] relative min-h-[17px]"
            type="checkbox"
          />
          <div className="w-[359px] flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px] box-border max-w-[calc(100%_-_25px)]">
            <div className="self-stretch relative text-[14px] font-[Abel] text-[#002724] text-left">{`Send me the occasional news & updates (optional)`}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[2px] pr-[0px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full">
            <FrameComponent18
              frame18="Sign Up"
              propFlex="unset"
              propAlignSelf="stretch"
              frameButtonHeight="48px"
              validateForm={validateForm}
            />
            <Button
              className="self-stretch h-[48px] z-[3]"
              startIcon={<img width="17px" height="17px" src="/_Ã Ã°_1.png" />}
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#002724",
                fontSize: "16",
                borderColor: "#04c323",
                borderRadius: "6px",
                "&:hover": { borderColor: "#04c323" },
                height: 48,
              }}
            >
              Sign Up with Gmail
            </Button>
            <div className="w-[464px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
              <div className="w-[230px] flex flex-row items-start justify-start">
                <div className="flex-1 relative text-[14px] font-extrabold font-[Nexa] text-[#002724] text-left z-[3]">{`Already have an account? `}</div>
                <div
                  className="relative text-[14px] [text-decoration:underline] font-extrabold font-[Nexa] text-[#002724] text-left inline-block min-w-[47px] cursor-pointer z-[4] ml-[-46px]"
                  onClick={onSignInTextClick}
                >
                  Sign In
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0px] pl-[21px] pr-[20px]">
              <div className="w-[189px] flex flex-row items-start justify-start gap-[12px]">
                <div className="flex-1 relative text-[14px] font-extrabold font-[Nexa] text-[#002724] text-left z-[5]">
                  Having trouble?
                </div>
                <div className="relative text-[14px] [text-decoration:underline] font-extrabold font-[Nexa] text-[#002724] text-left[20px] inline-block min-w-[66px] z-[5]">
                <a href="#" className="w-[133px] text-[14px] font-[Nexa] text-[#002724] text-right hover:underline">
                Chat Now
              </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
