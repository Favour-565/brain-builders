import PropTypes from "prop-types";

const UserInformation = ({ className = "", profilePicture, chichi, ahmed }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-[14px] min-w-[291px] max-w-full text-left text-[40px] text-[#f17700] font-[Abel] mq361:flex-wrap ${className}`}
    >
      <img
        className="h-[128px] w-[135px] relative rounded-[13px] object-cover z-[2] mq361:flex-1"
        loading="lazy"
        alt=""
        src={profilePicture}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[194px]">
        <h1 className="m-[0px] self-stretch h-[39px] relative text-inherit tracking-[0.01em] inline-block shrink-0 z-[2] font-[inherit] mq361:text-[24px] mq370:text-[32px]">
          <span>{chichi}</span>
          <span className="font-['Nexa_Light'] text-[#002724]">{ahmed}</span>
        </h1>
        <div className="self-stretch h-[92px] relative text-[16px] leading-[28px] text-[#002724] whitespace-pre-wrap inline-block shrink-0 z-[2]">{`atem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione  `}</div>
      </div>
    </div>
  );
};

UserInformation.propTypes = {
  className: PropTypes.string,
  profilePicture: PropTypes.string,
  chichi: PropTypes.string,
  ahmed: PropTypes.string,
};

export default UserInformation;
