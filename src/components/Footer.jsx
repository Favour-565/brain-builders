import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[16px] ${className}`}
    >
      <div className="h-[29px] flex flex-row items-end justify-start pt-[0px] px-[0px] pb-[0px] box-border gap-[24px] z-[1]">
        <img
          className="h-[30px] w-[98px] relative rounded-[4px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <img
          className="self-stretch w-[98px] relative rounded-[4px] max-h-full object-cover min-h-[29px]"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <footer className="self-stretch flex flex-row items-start justify-start flex-wrap content-start [row-gap:20px] text-left text-[10px] text-[#fff] font-['Satoshi_Variable']">
        <div className="h-[79px] flex-1 relative inline-block min-w-[101px] z-[1]">
          <p className="m-[0px]">
            <span className="font-medium font-['Satoshi_Variable']">{`A Product of `}</span>
            <b className="font-[Abel] whitespace-pre-wrap">
              Martad Education and Skills Development Ltd
            </b>
            <span className="font-medium">.</span>
          </p>
          <p className="m-[0px] font-medium">&nbsp;</p>
          <p className="m-[0px] font-medium">
            3b Alegbe Close, Mende, Maryland, Lagos, Nigeria
          </p>
        </div>
        <div className="w-[124px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[14px] box-border font-[Abel]">
          <div className="self-stretch h-[79px] relative inline-block shrink-0 z-[1]">
            <p className="m-[0px]">
              <b>Contact us</b>
            </p>
            <p className="m-[0px] font-medium font-['Satoshi_Variable']">
              &nbsp;
            </p>
            <p className="m-[0px]">
              <b>+234 704 330 3000</b>
            </p>
            <p className="m-[0px]">
              <b>_234 809 293 3000</b>
            </p>
            <p className="m-[0px] font-medium font-['Satoshi_Variable']">
              info@examprimed.com
            </p>
          </div>
        </div>
        <div className="h-[79px] w-[110px] relative font-medium inline-block shrink-0 z-[1]">
          <p className="m-[0px]">Policy</p>
          <p className="m-[0px]">Instruction</p>
          <p className="m-[0px]">Terms and Conditions</p>
          <p className="m-[0px]">Comapany</p>
          <p className="m-[0px]">About us</p>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
