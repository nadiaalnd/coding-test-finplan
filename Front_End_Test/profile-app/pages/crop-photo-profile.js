import { useCallback } from "react";
import { useRouter } from "next/router";
import IconBack from "../components/icon-back";

const CropPhotoProfile = () => {
  const router = useRouter();

  const onVectorIconClick = useCallback(() => {
    router.push("/choose-photo");
  }, [router]);

  const onSaveButtonClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[667px] overflow-hidden text-left text-xs text-white font-nunito">
      <img
        className="absolute top-[68px] left-[11px] rounded-lg w-[359px] h-[595px] object-cover"
        alt=""
        src="/photo.png"
      />
      <div
        className="absolute top-[623px] left-[0px] bg-midnightblue shadow-[4px_4px_8px_rgba(0,_41,_132,_0.25)] w-[375px] h-11 cursor-pointer"
        onClick={onSaveButtonClick}
      />
      <b className="absolute top-[637px] left-[165px] leading-[16.37px] inline-block w-[42px] h-4">
        Simpan
      </b>
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[375px] h-14" />
      <IconBack vector="/vector.svg" onVectorIconClick={onVectorIconClick} />
      <b className="absolute top-[12px] left-[56px] text-5xl leading-[32.74px] inline-block w-[181px] h-[33px]">
        Potong Gambar
      </b>
    </div>
  );
};

export default CropPhotoProfile;
