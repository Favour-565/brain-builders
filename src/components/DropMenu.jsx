import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DropMenu = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onBuyCoinTextClick = useCallback(() => {
    navigate("/buy-coin");
  }, [navigate]);

  const onResultsTextClick = useCallback(() => {
    navigate("/results");
  }, [navigate]);

  const onInstructionTextClick = useCallback(() => {
    navigate("/instructions");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us1");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us1");
  }, [navigate]);

  const onPolicyTextClick = useCallback(() => {
    navigate("/policy1");
  }, [navigate]);

  const onTermsConditionsClick = useCallback(() => {
    navigate("/terms-and-conditions1");
  }, [navigate]);

  const onFAQTextClick = useCallback(() => {
    navigate("/faqs1");
  }, [navigate]);

  return (
    <div
      className={`w-[250px] h-[415px] relative rounded-[12px] bg-[#fafafa] overflow-hidden flex flex-col items-start justify-start pt-[14px] px-[26px] pb-[15px] box-border gap-[30px] leading-[normal] tracking-[normal] max-w-full max-h-full text-center text-[16px] text-[#000] font-['Satoshi_Variable'] ${className}`}
    >
      <a
        className="[text-decoration:none] w-[63px] relative font-medium text-[inherit] flex items-center justify-center min-w-[63px] cursor-pointer"
        onClick={onBuyCoinTextClick}
      >
        Buy coin
      </a>
      <a
        className="[text-decoration:none] w-[51px] relative font-medium text-[inherit] flex items-center justify-center min-w-[51px] cursor-pointer"
        onClick={onResultsTextClick}
      >
        Results
      </a>
      <a
        className="[text-decoration:none] w-[77px] h-[22px] relative font-medium text-[inherit] flex items-center justify-center min-w-[77px] cursor-pointer"
        onClick={onInstructionTextClick}
      >
        Instruction
      </a>
      <a
        className="[text-decoration:none] w-[64px] relative font-medium text-[inherit] flex items-center justify-center min-w-[64px] cursor-pointer"
        onClick={onAboutUsTextClick}
      >
        About us
      </a>
      <a
        className="[text-decoration:none] w-[79px] relative font-medium text-[inherit] flex items-center justify-center min-w-[79px] cursor-pointer"
        onClick={onContactUsTextClick}
      >
        Contact us
      </a>
      <a
        className="[text-decoration:none] w-[43px] relative font-medium text-[inherit] flex items-center justify-center min-w-[43px] cursor-pointer"
        onClick={onPolicyTextClick}
      >
        Policy
      </a>
      <div
        className="w-[141px] relative font-medium flex items-center justify-center cursor-pointer"
        onClick={onTermsConditionsClick}
      >{`Terms & Conditions`}</div>
      <a
        className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[31px] cursor-pointer"
        onClick={onFAQTextClick}
      >
        FAQ
      </a>
    </div>
  );
};

DropMenu.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default DropMenu;
