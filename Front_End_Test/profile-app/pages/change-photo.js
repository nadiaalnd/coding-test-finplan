import { useCallback } from "react";
import IconBack from "../components/icon-back";
import { useRouter } from "next/router";

const ChangePhoto = () => {
  const router = useRouter();

  const onChooseButton1Click = useCallback(() => {
    router.push("/choose-photo");
  }, [router]);

  const onChooseButton2Click = useCallback(() => {
    router.push("/crop-photo-profile");
  }, [router]);

  const onSaveButtonClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[667px] overflow-hidden text-left text-xs text-white font-nunito">
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[375px] h-14" />
      <IconBack vector="/vector.svg" vectorCursor="unset" />
      <img
        className="absolute top-[68px] left-[11px] rounded-lg w-[359px] h-[359px] object-cover"
        alt=""
        src="/photoresult.png"
      />
      <div
        className="absolute top-[449px] left-[17px] rounded-lg bg-teal shadow-[4px_4px_8px_rgba(0,_41,_132,_0.25)] w-[341px] h-10 cursor-pointer"
        onClick={onChooseButton1Click}
      />
      <div
        className="absolute top-[505px] left-[17px] rounded-lg bg-teal shadow-[4px_4px_8px_rgba(0,_41,_132,_0.25)] w-[341px] h-10 cursor-pointer"
        onClick={onChooseButton2Click}
      />
      <b className="absolute top-[12px] left-[56px] text-5xl leading-[32.74px] inline-block w-[184px] h-[33px]">
        Ganti Foto Profil
      </b>
      <div
        className="absolute top-[623px] left-[0px] bg-midnightblue shadow-[4px_4px_8px_rgba(0,_41,_132,_0.25)] w-[375px] h-11 cursor-pointer"
        onClick={onSaveButtonClick}
      />
      <b className="absolute top-[461px] left-[135px] leading-[16.37px] inline-block w-[108px] h-4">
        Ambil Dari Kamera
      </b>
      <b className="absolute top-[517px] left-[137px] leading-[16.37px] inline-block w-[106px] h-4">
        Ambil Dari Gallery
      </b>
      <b className="absolute top-[637px] left-[165px] leading-[16.37px] inline-block w-[42px] h-4">
        Simpan
      </b>
    </div>
  );
};

export default ChangePhoto;
