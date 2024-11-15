import { useCallback } from "react";
import FrameComponent15 from "../components/FrameComponent15";
import FrameComponent16 from "../components/FrameComponent16";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const onNavigationItemsContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onLeaderboardContentContainerClick = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onProfileItemContainerClick = useCallback(() => {
    navigate("/levels");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-[20px] bg-[#fafafa] overflow-hidden flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[0.3px] box-border gap-[37px] leading-[normal] tracking-[normal]">
      <FrameComponent15 />
      <img
        className="w-full h-[72px] absolute !m-[0] top-[0px] right-[0px] left-[0px] rounded-[4px] max-w-full overflow-hidden shrink-0 z-[1]"
        alt=""
        src="/frame-427319836.svg"
      />
      <main className="self-stretch flex flex-col items-start justify-start py-[0px] px-[19px] box-border gap-[5px] max-w-full text-left text-[32px] text-[#0b2239] font-[Abel]">
        <h1 className="m-[0px] w-[152px] relative text-inherit tracking-[0.01em] font-normal font-[inherit] inline-block">
          About us
        </h1>
        <section className="self-stretch flex flex-row items-start justify-start pt-[0px] px-[4px] pb-[28px] box-border max-w-full text-justify text-[14px] text-[#4a4e4f] font-[Abel]">
          <h2 className="m-[0px] flex-1 relative text-inherit leading-[150%] font-normal font-[inherit] inline-block max-w-full">
            <p className="m-[0px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco `}</p>
            <p className="m-[0px]">&nbsp;</p>
            <p className="m-[0px] whitespace-pre-wrap">
              laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolerm laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consecutive
              adipiscing elit, sed do eidudmod tempor incident ut labore et.
            </p>
            <p className="m-[0px]">&nbsp;</p>
            <p className="m-[0px]">{` exercitation ullamco laboris nisi ut aliquip.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut `}</p>
            <p className="m-[0px]">&nbsp;</p>
            <p className="m-[0px]">
              aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </h2>
        </section>
        <FrameComponent16 />
        <footer className="ml-[-20px] w-[433px] shadow-[0px_0px_12px_rgba(0,_0,_0,_0.25)] rounded-t-[20px] rounded-b-[0px] bg-[#fff] flex flex-row items-start justify-start p-[25px] box-border relative gap-[41px] max-w-[111%] shrink-0 text-center text-[8px] text-[#097586] font-[Poppins] mq361:gap-[20px] mq381:flex-wrap">
          <div className="w-[33px] flex flex-col items-start justify-start pt-[3.8px] px-[0px] pb-[0px] box-border">
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[1px] cursor-pointer"
              onClick={onNavigationItemsContainerClick}
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
          <div className="h-[47.7px] w-[50px] relative text-[#fe8601]">
            <div className="absolute top-[36.7px] left-[0px] inline-block w-[50px] h-[11px]">
              Subscribe
            </div>
            <img
              className="absolute top-[0px] left-[3.7px] w-[42.7px] h-[42.7px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-1@2x.png"
            />
          </div>
          <div className="w-[50px] flex flex-col items-start justify-start pt-[4.3px] px-[0px] pb-[0px] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
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
              onClick={onLeaderboardContentContainerClick}
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
          <div
            className="w-[31px] !m-[0] absolute top-[28.8px] right-[25px] flex flex-col items-start justify-end pt-[29px] px-[0px] pb-[0px] box-border cursor-pointer"
            onClick={onProfileItemContainerClick}
          >
            <div className="self-stretch flex flex-row items-start justify-start relative">
              <img
                className="h-[29px] w-[27px] absolute !m-[0] top-[-28.5px] left-[calc(50%_-_13.5px)] object-cover"
                loading="lazy"
                alt=""
                src="/layer-24-1@2x.png"
              />
              <div className="flex-1 relative">Me</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AboutUs;
