import Logo from "@/shared/Logo/Logo";
import SocialsList1 from "@/shared/SocialsList1/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import ButtonCircle from "../Button/ButtonCircle";
import Input from "../Input/Input";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [

  {
    id: "1",
    title: "Explore",
    menus: [
      { href: "/", label: "Prototyping" },
      { href: "/", label: "Design systems" },
      { href: "/", label: "Pricing" },
      { href: "/", label: "Security" },
    ],
  },
  {
    id: "2",
    title: "Resources",
    menus: [
      { href: "/", label: "Best practices" },
      { href: "/", label: "Support" },
      { href: "/", label: "Developers" },
      { href: "/", label: "Learn design" },
    ],
  },

];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = () => {
    return (
      <div className="text-sm">
        <h2 className="font-bold text-xl text-neutral-700 dark:text-neutral-200 font-sans">
          VĂN PHÒNG ĐIỀU HÀNH
        </h2>
        <ul className="mt-3 space-y-4">
          <li>Địa chỉ: Yên Nhân - Tiền Phong - Mê Linh - Hà Nội.</li>
          <li>Hotline: 0986152954</li>
          <li>Email: mhcons.2020@gmail.com</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-10  lg:pb-24 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-10 ">

        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">

          <div className="col-span-2 md:col-span-1">
            <p className=" text-xl font-bold font-sans"> Liên Hệ </p>
          </div>

          <div className="col-span-2 flex items-center md:col-span-3 ">
            <SocialsList1 className="flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start" />
          </div>
        </div>


        {renderWidgetMenuItem()}

        <div className="grid w-[120%]">

          <div className="col-span-2 md:col-span-1">
            <p className=" text-xl font-bold"> MHCONSVN </p>
            <p className="text-neutral-6000 mt-3 text-sm  font-sans hover:text-black">BẢN QUYỀN THUỘC VỀ CÔNG TY CP XÂY DỰNG VÀ THƯƠNG MẠI MHCONSVN
            </p>
          </div>

          {/* <form className="mt-10 relative max-w-sm">
            <Input
              required
              aria-required
              placeholder="Enter your email"
              type="email"
              rounded="rounded-md"
            />
            <ButtonCircle
              type="submit"
              className="absolute transform top-1/2 mr-1 -translate-y-1/2 right-1"
            >
              <ArrowSmallRightIcon className="w-6 h-6" />
            </ButtonCircle>
          </form> */}


        </div>







      </div>
    </div>
  );
};

export default Footer;
