import Component1 from "../components/Component1";
import GroupComponent from "../components/GroupComponent";

const Login = () => {
  return (
    <div className="w-full h-[899px] relative bg-[#fafafa] overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[1318px] absolute !m-[0] right-[0px]   left-[0px] max-w-full overflow-hidden shrink-0 object-contain"
        alt=""
        // bottom-[-674px]
        
      />
      <img
        className="w-[1674px] h-[832px] absolute !m-[0] left-[-250px]   object-contain "
        src="\HOME PAGE 9.png"
        alt=""
        // bottom-[-5px]
      />
      <Component1
        component255Flex="unset"
        component255AlignSelf="stretch"
        line1=""
        line2=""
        logo2="\logo-2@2x.png"
        frameDivColor="#128e96"
        propBorder="0.5px solid #bbc42f"
        propColor="#000"
      />
      <div className="w-[687px] flex flex-row items-start justify-end py-[0px] px-[62px] box-border max-w-full mq400:pl-[31px] mq400:pr-[31px] mq400:box-border">
        <GroupComponent />
      </div>
    </div>
  );
};

export default Login;
