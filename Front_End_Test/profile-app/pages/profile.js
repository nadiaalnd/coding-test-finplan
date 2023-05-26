import { useCallback } from "react";
import IconBack from "../components/icon-back";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();

  const onProfilepictureImageClick = useCallback(() => {
    router.push("/change-photo");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[667px] overflow-hidden text-left text-xs text-black font-nunito">
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[375px] h-14" />
      <IconBack vector="/vector.svg" vectorCursor="unset" />
      <b className="absolute top-[12px] left-[53px] text-5xl leading-[32.74px] inline-block text-white w-[61px] h-[33px]">
        Profil
      </b>
      <div className="absolute top-[56px] left-[0px] bg-white w-[375px] h-[88px]" />
      <img
        className="absolute top-[68px] left-[11px] rounded-lg w-[72px] h-[72px] object-cover cursor-pointer"
        alt=""
        src="/profilepicture.png"
        onClick={onProfilepictureImageClick}
      />
      <b className="absolute top-[72px] left-[87px] leading-[16.37px] inline-block w-[52px] h-4">
        John Doe
      </b>
      <div className="absolute top-[92px] left-[87px] leading-[16.37px] inline-block w-[79px] h-4">
        Kelas 10 IPA 8
      </div>
      <div className="absolute top-[144px] left-[17px] w-[341px] h-[621px] overflow-y-auto">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-midnightblue shadow-[4px_4px_8px_rgba(0,_41,_132,_0.25)] w-[341px] h-[196px]" />
        <div className="absolute top-[212px] left-[0px] rounded-lg bg-midnightblue shadow-[4px_4px_8px_rgba(0,_41,_132,_0.25)] w-[341px] h-[196px]" />
        <div className="absolute top-[425px] left-[0px] rounded-lg bg-midnightblue shadow-[4px_4px_8px_rgba(0,_41,_132,_0.25)] w-[341px] h-[196px]" />
      </div>
    </div>
  );
};

export default Profile;
