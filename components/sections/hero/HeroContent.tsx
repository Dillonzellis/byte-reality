import Image from "next/image";
import logo from "@/public/biteofreality-logo.png";

export const HeroContent = () => {
  return (
    <div className="tw-absolute tw-left-1/2 tw-top-1/2 tw--translate-x-1/2 tw--translate-y-1/2 lg:tw-w-[950px]">
      <div className="tw-flex tw-flex-col tw-items-center tw-rounded-lg tw-shadow-lg md:tw-gap-4 md:tw-bg-white md:tw-p-4 lg:tw-flex-row">
        <div>
          <Image
            className="tw-w-full- tw-drop-shadow-md"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="tw-space-y-2 lg:tw-space-y-4">
          <div className="tw-hidden tw-font-serif tw-text-2xl tw-font-bold tw-capitalize tw-text-brandingPurple-400 md:tw-block md:tw-text-3xl lg:tw-text-7xl">
            bite of reality®
          </div>
          <div className="tw-hidden tw-font-medium tw-italic md:tw-block lg:tw-text-lg">
            Credit unions nationwide are working hard to bring financial
            education to their communities!
          </div>
        </div>
      </div>
    </div>
  );
};
