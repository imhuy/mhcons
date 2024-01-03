import { FC } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface IHeader {
    title?: string;
}

const Header: FC<IHeader> = ({ title }) => {
    return (
        <div className="flex justify-between items-center w-full">

            <h1 className=" font-semibold text-white text-[36px] max-lg:hidden">
                {title}
            </h1>
            <div className="flex flex-row gap-x-4  items-center ">
                <div className="relative mr-6 " >

                    <MagnifyingGlassIcon className="w-5 h-5  text-white absolute  top-[11px] left-[8px]" />

                    <input
                        className="w-60  bg-[#2E3137] text-gray-500 h-10  pl-8  "
                        placeholder="Search"
                        value={'Search Account'}
                    />

                </div>

                <div className="  "  >
                    <span className="text-white  px-4 py-3 bg-[#2E3137] text-sm font-bold">Individual</span>
                </div>
                <div className=""  >
                    <span className="text-white  px-4 py-3 bg-[#2E3137] text-sm font-bold">Enterprise</span>
                </div>
            </div>



        </div>
    );
};

export default Header;
