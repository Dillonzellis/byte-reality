import Image from "next/image";
import logo from "@/public/biteofreality-logo.png";

export const HeroContent = () => {
  return (
    <div className="tw-absolute tw-top-1/2 tw-left-1/2 tw-w-[950px] tw--translate-y-1/2 tw--translate-x-1/2">
      <div className="tw-flex tw-gap-8 tw-items-center tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-lg">
        <div>
          <Image className="tw-drop-shadow-md" src={logo} alt="logo" />
        </div>
        <div className="tw-space-y-4">
          <div className="tw-capitalize tw-text-brandingPurple-400 tw-text-7xl tw-font-bold tw-font-serif">
            bite of reality®
          </div>
          <div className="tw-italic tw-font-medium tw-text-lg">
            Credit unions nationwide are working hard to bring financial
            education to their communities!
          </div>
        </div>
      </div>
    </div>
  );
};
