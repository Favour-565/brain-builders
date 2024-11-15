import { useCallback } from "react";
import FrameComponent14 from "../components/FrameComponent14";
import MenuOptions from "../components/MenuOptions";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const onHomeButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSubscribeButtonContainerClick = useCallback(() => {
    navigate("/subscribe");
  }, [navigate]);

  const onGamesIconContainerClick = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  const onLeaderboardIconContainerClick = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-[20px] bg-[#fafafa] overflow-hidden flex flex-col items-end justify-start pt-[20px] px-[0px] pb-[0.3px] box-border gap-[41px] leading-[normal] tracking-[normal]">
      <img
        className="w-[430px] h-[259px] absolute !m-[0] top-[0px] left-[-1px] rounded-[23px] object-cover"
        alt=""
        src="/rect@2x.png"
      />
      <img
        className="w-full h-[72px] absolute !m-[0] top-[0px] right-[0px] left-[0px] rounded-[4px] max-w-full overflow-hidden shrink-0 z-[1]"
        alt=""
        src="/frame-427319836.svg"
      />
      <FrameComponent14 />
      <section className="self-stretch flex flex-col items-start justify-start py-[0px] px-[35px] box-border gap-[46px] max-w-full">
        <MenuOptions />
        <footer className="ml-[-36px] w-[433px] shadow-[0px_0px_12px_rgba(0,_0,_0,_0.25)] rounded-t-[20px] rounded-b-[0px] bg-[#fff] flex flex-row items-start justify-between p-[25px] box-border shrink-0 max-w-[121%] gap-[20px] text-center text-[8px] text-[#097586] font-[Poppins] mq419:flex-wrap">
          <div className="w-[33px] flex flex-col items-start justify-start pt-[3.8px] px-[0px] pb-[0px] box-border text-[#00336f]">
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[1px] cursor-pointer"
              onClick={onHomeButtonContainerClick}
            >
              <div className="flex flex-row items-start justify-start py-[0px] px-[2px]">
                <img
                  className="h-[28px] w-[29px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
              </div>
              <div className="self-stretch relative">Home</div>
            </div>
          </div>
          <div
            className="w-[50px] flex flex-col items-start justify-end pt-[36.7px] px-[0px] pb-[0px] box-border cursor-pointer"
            onClick={onSubscribeButtonContainerClick}
          >
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <img
                className="h-[42.7px] w-[42.7px] absolute !m-[0] top-[-36.7px] right-[3.6px] object-contain"
                loading="lazy"
                alt=""
                src="/icons8pay50@2x.png"
              />
              <div className="flex-1 relative z-[1]">Subscribe</div>
            </div>
          </div>
          <div className="w-[50px] flex flex-col items-start justify-start pt-[4.3px] px-[0px] pb-[0px] box-border">
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[1px] cursor-pointer"
              onClick={onGamesIconContainerClick}
            >
              <div className="flex flex-row items-start justify-start py-[0px] px-[6px]">
                <img
                  className="h-[27px] w-[37.8px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/icons8games50@2x.png"
                />
              </div>
              <div className="self-stretch relative inline-block min-w-[50px]">
                Play Games
              </div>
            </div>
          </div>
          <div className="w-[55px] flex flex-col items-start justify-start pt-[5.1px] px-[0px] pb-[0px] box-border">
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[0.5px] cursor-pointer"
              onClick={onLeaderboardIconContainerClick}
            >
              <div className="flex flex-row items-start justify-start py-[0px] pl-[7px] pr-[8px]">
                <img
                  className="h-[26px] w-[40px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/icons8leaderboard50-1@2x.png"
                />
              </div>
              <div className="self-stretch relative inline-block min-w-[55px]">
                Leader Board
              </div>
            </div>
          </div>
          <div className="w-[31px] flex flex-col items-start justify-start pt-[3.8px] px-[0px] pb-[0px] box-border text-[#fe8601]">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0.2px] px-[0px] pb-[0px]">
              <div className="flex flex-row items-start justify-start py-[0px] px-[2px]">
                <img
                  className="h-[29px] w-[27px] relative object-cover"
                  alt=""
                  src="/mask-group-12@2x.png"
                />
              </div>
              <div className="self-stretch relative">Me</div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Profile;
