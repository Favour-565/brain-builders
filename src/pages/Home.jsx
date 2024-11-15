import Main from "../components/Main";
import FrameComponent2 from "../components/FrameComponent2";
import ClickToLearn from "../components/ClickToLearn";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent7 from "../components/FrameComponent7";

const Home = () => {
  return (
    <div className="w-full relative bg-[#f9f4f9] overflow-hidden flex flex-col items-end justify-start pt-[0px] px-[0px] pb-[145px] box-border gap-[125px] leading-[normal] tracking-[normal] text-left text-[32px] text-[#002724] font-[Nexa] lg:gap-[62px] mq361:gap-[16px] mq400:gap-[31px]">
      <Main />
      <FrameComponent2 />
      <section className="w-full h-[831px] absolute !m-[0] right-[0px] bottom-[1538px] left-[0px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[-47px] max-h-full w-[1341px] object-cover"
          alt=""
          src="/background-shape@2x.png"
        />
        <img
          className="absolute top-[564px] left-[660px] rounded-[7px] w-[137px] h-[43px] object-cover z-[1]"
          alt=""
          src="/image-1-1@2x.png"
        />
        <img
          className="absolute top-[566px] left-[819px] rounded-[7px] w-[137px] h-[41px] object-cover z-[1]"
          alt=""
          src="/image-2-1@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-col items-end justify-start pt-[0px] px-[0px] pb-[475px] box-border gap-[164px] max-w-full lg:pb-[309px] lg:box-border mq361:gap-[41px] mq370:pb-[201px] mq370:box-border mq400:gap-[82px] mq400:pb-[131px] mq400:box-border">
        <ClickToLearn />
        <div className="w-[785px] flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
          <FrameComponent1 />
        </div>
      </section>
      <img
        className="w-full h-[774px] absolute !m-[0] top-[60px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover z-[3]"
        alt=""
        src="/separator@2x.png"
      />
      <div className="w-[723px] flex flex-row items-start justify-center pt-[0px] px-[20px] pb-[183px] box-border max-w-full">
        <div className="w-[559px] flex flex-col items-start justify-start gap-[22px] max-w-full">
          <h1 className="m-[0px] self-stretch relative text-inherit leading-[122.2%] font-extrabold font-[inherit] z-[1] mq361:text-[19px] mq361:leading-[23px] mq370:text-[26px] mq370:leading-[31px]">
            Improve Your Basic Knowledge
          </h1>
          <div className="w-[537px] relative text-[16px] leading-[150%] font-extrabold whitespace-pre-wrap inline-block max-w-full z-[1]">{`Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit,  ipsum dolor sit amet, consectetur adipiscing elit, `}</div>
        </div>
      </div>
      <FrameComponent3 />
      <footer className="self-stretch flex flex-row items-start justify-center py-[0px] px-[20px] box-border max-w-full">
        <FrameComponent7 />
      </footer>
    </div>
  );
};

export default Home;
