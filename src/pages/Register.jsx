import Component1 from "../components/Component1";
import FrameComponent5 from "../components/FrameComponent5";

const Register = () => {
  return (
    <div className="w-full h-[899px] relative bg-[#fafafa] overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[1318px] absolute !m-[0] right-[0px] bottom-[-674px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain"
        alt=""
        
      />
      <Component1
        line1="/line-15.svg"
        line2="/line-25.svg"
        component255Flex="unset"
        component255AlignSelf="stretch"
        logo2="\logo-2@2x.png"
        frameDivColor="#128e96"
        propBorder="0.5px solid #f17700"
        propColor="#f17700"
      />
      <img
        className="w-[20px] h-[20px] relative hidden z-[4]"
        alt=""
        src="/vuesax.svg"
      />
      <main className="mr-[-193px] w-[1809px] h-[835px] flex flex-row items-start justify-start relative max-w-[142%] shrink-0">
        <div className="h-[899px] flex-1 relative max-w-full z-[1] flex items-center justify-center">
          <img
            className="h-full w-full flex-1 overflow-hidden  object-over-contain absolute  right-[-150px] w-full [transform:scale(1.077)]"
            alt=""
           src="\separator@2x.png"
          />
        </div>
        <FrameComponent5 />
      </main>
    </div>
  );
};

export default Register;