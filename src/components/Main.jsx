import Component1 from "./Component1";
import PropTypes from "prop-types";

const Main = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start font-[Nexa] pt-[0px] px-[0px] pb-[22px] box-border max-w-full ${className}`}
    >
      <Component1
        line1="/Line 1.png"
        line2="/Line 2.png"
        logo2="/logo-2@2x.png"
      />
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
