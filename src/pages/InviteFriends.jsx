import TopNavigation from "../components/TopNavigation";
import CodeContainer from "../components/CodeContainer";
import AppPromotion from "../components/AppPromotion";

const InviteFriends = () => {
  return (
    <div className="w-full relative bg-[#fafafa] overflow-hidden flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[152px] box-border gap-[65px] leading-[normal] tracking-[normal] text-left text-[48px] text-[#0f3556] font-[Nexa] mq361:gap-[16px] mq370:gap-[32px]">
      {/* <img
        className="w-full h-[1318px] absolute !m-[0] right-[0px] bottom-[55px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain"
        
        alt=""
      /> */}
      <img
        className="w-[1286px] h-[920px] absolute !m-[0] top-[55px] left-[calc(50%_-_643px)] object-cover z-[1]"
        src="\HOME PAGE 13 1.png"
        alt=""
      />
      <TopNavigation />
      <div className="w-[751px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
        <div className="w-[541px] flex flex-col items-start justify-start gap-[65px] max-w-full mq361:gap-[16px] mq370:gap-[32px]">
          <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[4px] pr-[0px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <h1 className="m-[0px] w-[365px] relative text-inherit tracking-[0.01em] font-extrabold font-[Nexa] inline-block min-h-[73px] max-w-full z-[2] mq361:text-[29px] mq400:text-[38px]">
                Refer and Earn
              </h1>
              <div className="self-stretch h-[72px] relative text-[16px] leading-[150%] font-extrabold text-[#002724] inline-block z-[2]">{`Refer your Friends & Family. You will get 50 Coins Every time your Referral Code is used: Your friends will also get 50 Coins by using your Referral Code`}</div>
            </div>
          </div>
          <h1 className="m-[0px] w-[497px] relative text-[32px] tracking-[0.01em] font-extrabold font-[Nexa] text-[#f17700] inline-block min-h-[49px] max-w-full z-[2] mq361:text-[19px] mq400:text-[26px]">
            Share Your Referral Code Now!
          </h1>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[74px] max-w-full mq361:gap-[18px] mq370:gap-[37px]">
        <CodeContainer />
        <AppPromotion />
      </div>
    </div>
  );
};

export default InviteFriends;
