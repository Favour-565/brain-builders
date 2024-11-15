import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SlideMenu = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBuyCoinTextClick = useCallback(() => {
    navigate("/buy-coins");
  }, [navigate]);

  const onPricingTextClick = useCallback(() => {
    navigate("/subscribe");
  }, [navigate]);

  const onResultsTextClick = useCallback(() => {
    navigate("/levels");
  }, [navigate]);

  const onInstructionTextClick = useCallback(() => {
    navigate("/instruction");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onPolicyTextClick = useCallback(() => {
    navigate("/policy");
  }, [navigate]);

  const onTermsConditionsClick = useCallback(() => {
    navigate("/terms-and-conditions");
  }, [navigate]);

  const onFAQTextClick = useCallback(() => {
    navigate("/faqs");
  }, [navigate]);

  return (
    <div
      className={`w-[314px] relative rounded-[12px] bg-[#fafafa] overflow-hidden flex flex-col items-start justify-start pt-[96px] pb-[259px] pl-[17px] pr-[15px] box-border gap-[30px] leading-[normal] tracking-[normal] max-w-full max-h-full text-center text-[16px] text-[#000] font-['Satoshi_Variable'] ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start gap-[17px] text-center text-[16px] text-[#000] font-['Satoshi_Variable']">
        <div
          className="self-stretch rounded-[10px] bg-[#fff] flex flex-row items-start justify-start pt-[19px] pb-[7px] pl-[84px] pr-[37px] relative cursor-pointer"
          onClick={onProfileContainerClick}
        >
          <div className="h-[70px] w-[282px] relative rounded-[10px] bg-[#fff] hidden z-[1]" />
          <img
            className="h-[59.9px] w-[59.9px] absolute !m-[0] bottom-[1.9px] left-[14.6px] rounded-[50%] object-contain z-[1]"
            loading="lazy"
            src="/ellipse-6@2x.png"
            alt=""
            
          />
          <div className="w-[91px] relative font-medium flex items-center justify-center shrink-0 z-[1]">
            Abdul Rauf
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-[0px] pb-[0px] ml-[-91px] text-[13px] text-[#4a4e4f] font-[Abel]">
            <div className="self-stretch h-[22px] relative flex items-center justify-center shrink-0 whitespace-nowrap z-[1]">
              abdulrauf344@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-[0px] px-[7px] pb-[13px]">
          <a
            className="[text-decoration:none] h-[22px] w-[44px] relative font-medium text-[inherit] flex items-center justify-center min-w-[44px] cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </a>
        </div>
        <div className="flex flex-row items-start justify-start pt-[0px] px-[7px] pb-[13px]">
          <div
            className="w-[63px] relative font-medium flex items-center justify-center min-w-[63px] cursor-pointer"
            onClick={onBuyCoinTextClick}
          >
            Buy coin
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-[0px] px-[7px] pb-[13px]">
          <a
            className="[text-decoration:none] w-[51px] relative font-medium text-[inherit] flex items-center justify-center min-w-[51px] cursor-pointer"
            onClick={onPricingTextClick}
          >
            Pricing
          </a>
        </div>
        <div className="flex flex-row items-start justify-start pt-[0px] px-[7px] pb-[13px]">
          <div
            className="w-[51px] relative font-medium flex items-center justify-center min-w-[51px] cursor-pointer"
            onClick={onResultsTextClick}
          >
            Results
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-[0px] px-[7px] pb-[13px]">
          <a
            className="[text-decoration:none] h-[22px] w-[77px] relative font-medium text-[inherit] flex items-center justify-center min-w-[77px] cursor-pointer"
            onClick={onInstructionTextClick}
          >
            Instruction
          </a>
        </div>
        <div className="flex flex-row items-start justify-start pt-[0px] px-[7px] pb-[13px]">
          <a
            className="[text-decoration:none] w-[64px] relative font-medium text-[inherit] flex items-center justify-center min-w-[64px] cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About us
          </a>
        </div>
        <div className="flex flex-row items-start justify-start pt-[0px] px-[7px] pb-[13px]">
          <div
            className="w-[79px] relative font-medium flex items-center justify-center min-w-[79px] cursor-pointer"
            onClick={onContactUsTextClick}
          >
            Contact us
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-[0px] px-[7px] pb-[13px]">
          <a
            className="[text-decoration:none] w-[43px] relative font-medium text-[inherit] flex items-center justify-center min-w-[43px] cursor-pointer"
            onClick={onPolicyTextClick}
          >
            Policy
          </a>
        </div>
        <div className="flex flex-row items-start justify-start py-[0px] px-[7px]">
          <a
            className="[text-decoration:none] w-[141px] relative font-medium text-[inherit] flex items-center justify-center cursor-pointer"
            onClick={onTermsConditionsClick}
          >{`Terms & Conditions`}</a>
        </div>
      </section>
      <div className="flex flex-row items-start justify-start py-[0px] px-[7px]">
        <a
          className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[31px] cursor-pointer"
          onClick={onFAQTextClick}
        >
          FAQ
        </a>
      </div>
    </div>
  );
};

SlideMenu.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SlideMenu;
