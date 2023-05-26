import { useCallback } from "react";
import { useRouter } from "next/router";
import IconBack from "../components/icon-back";

const ChoosePhoto = () => {
  const router = useRouter();

  const onVectorIconClick = useCallback(() => {
    router.push("/change-photo1");
  }, [router]);

  const onCameraButtonClick = useCallback(() => {
    router.push("/change-photo");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[667px] overflow-hidden text-left text-5xl text-white font-nunito">
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[375px] h-14" />
      <IconBack
        vector="/vector.svg"
        onVectorIconClick={onVectorIconClick}
        vectorCursor="pointer"
      />
      <b className="absolute top-[12px] left-[56px] leading-[32.74px] inline-block w-[127px] h-[33px]">
        Ambil Foto
      </b>
      <img
        className="absolute top-[68px] left-[11px] rounded-lg w-[359px] h-[595px] object-cover"
        alt=""
        src="/photo.png"
      />
      <div className="absolute top-[218px] left-[43px] w-[55px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white w-[55px] h-2.5" />
        <div className="absolute top-[55px] left-[0px] rounded-8xs bg-white w-[55px] h-2.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[460px] left-[43px] w-[55px] h-[55px]">
        <div className="absolute top-[45px] left-[0px] rounded-8xs bg-white w-[55px] h-2.5" />
        <div className="absolute top-[55px] left-[0px] rounded-8xs bg-white w-[55px] h-2.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[460px] left-[275px] w-[55px] h-[55px]">
        <div className="absolute top-[45px] left-[0px] rounded-8xs bg-white w-[55px] h-2.5" />
        <div className="absolute top-[55px] left-[45px] rounded-8xs bg-white w-[55px] h-2.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[218px] left-[275px] w-[55px] h-[55px]">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white w-[55px] h-2.5" />
        <div className="absolute top-[55px] left-[45px] rounded-8xs bg-white w-[55px] h-2.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      </div>
      <div
        className="absolute top-[574px] left-[160px] rounded-[28px] bg-white w-14 h-14 cursor-pointer"
        onClick={onCameraButtonClick}
      />
    </div>
  );
};

export default ChoosePhoto;
