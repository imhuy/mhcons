'use client'
import { LogoWithText } from "@/assets/images";
import { event_name_enum, mixpanelTrack } from "@/utils/mixpanel";
import {
    ArchiveBoxXMarkIcon,
    ArrowsRightLeftIcon,
    ListBulletIcon,
    PuzzlePieceIcon,
    ShareIcon,
    TrashIcon, Cog6ToothIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname } from 'next/navigation';
import { useState } from "react";

interface MenuItemType {
    key: string;
    icon: JSX.Element;
    label: string;
    active: boolean;
}

const SideMenu = () => {
    const pathname = usePathname()

    const onGoApp = () => {
        mixpanelTrack(event_name_enum.inbound, { url: "/projects" });
    };


    const [listMenu, setListMenu] = useState<MenuItemType[]>([
        {
            key: "/app/check-pro",
            icon: <ListBulletIcon className="h-5 w-5 mr-2" />,
            label: "Ads Account",
            active: false,
        },
        {
            key: "/app/extension-settings",
            icon: <Cog6ToothIcon className="h-5 w-5 mr-2" />,
            label: "Extension Settings",
            active: false,
        },
        {
            key: "/app/remove-hidden-admin",
            icon: (
                <TrashIcon className="h-5 w-5 mr-2" />
            ),
            label: "Remove Hidden Admin",
            active: false,
        },
        {
            key: "/app/change-info",
            icon: (
                <ArrowsRightLeftIcon className="h-5 w-5 mr-2" />
            ),
            label: "Change Info",
            active: false,
        },
        {
            key: "/app/super-share",
            icon: (
                <PuzzlePieceIcon className="h-5 w-5 mr-2" />
            ),
            label: "Super Share",
            active: false,
        },

        {
            key: "/app/share-pixel",
            icon: (
                <ShareIcon className="h-5 w-5 mr-2" />
            ),
            label: "Share Pixel",
            active: false,
        },
        {
            key: "/app/remove-admin",
            icon: (
                <ArchiveBoxXMarkIcon className="h-5 w-5 mr-2" />
            ),
            label: "Kick Admin 7 day",
            active: false,
        },
    ]);


    const _checkActiveTab = (item: MenuItemType, index: number) => {
        if (pathname?.includes(item.key)) return "bg-success-500";
        return "hover:bg-secondary-600";
    };

    const renderUrl = (item: MenuItemType) => {
        return item.key
    };

    return (
        <aside className="fixed transition-all bg-[#12141e] duration-300 top-0 left-0 z-40 w-64 h-screen border-r border-white border-opacity-20 px-3 py-6 max-lg:hidden">
            <ul className="w-full">
                <li className="mb-8">
                    <button onClick={onGoApp} className="cursor-pointer">
                        <a href="/projects">
                            {/* <Image src={LogoWithText} width={169} height={40} alt="logo" /> */}
                            {/* <FireIcon className="h-5 w-5 mr-2" /> */}
                            <h1 className=" text-white font-extrabold text-xl ml-2"> TSMMETA.COM</h1>
                        </a>
                    </button>
                </li>

                {listMenu.map((value, index) => {
                    return (
                        <li className="mt-2" key={value.key}>
                            <div
                                className={`p-[13px] transition-all duration-300 ${_checkActiveTab(
                                    value,
                                    index
                                )} w-full`}
                            >
                                <a
                                    onClick={() => {
                                        mixpanelTrack(event_name_enum.inbound, {
                                            url: renderUrl(value),
                                        });
                                    }}
                                    href={renderUrl(value)}
                                    className={`flex transition-all duration-300 text-white text-sm`}
                                >
                                    {value.icon}
                                    {value.label}
                                </a>
                            </div>
                        </li>
                    );
                })}


            </ul>

            <div className="absolute left-0 bottom-0 border-t border-white border-opacity-20 w-full px-6 pt-4 pb-6">
                <ul>
                    <li className="mt-2">
                        <Link
                            onClick={() => {
                                mixpanelTrack(event_name_enum.outbound, {
                                    url: "https://twitter.com/alphaquestio",
                                });
                            }}
                            className=" text-white text-sm font-semibold"
                            href={"https://twitter.com/alphaquestio"}
                            target="_blank"
                        >
                            Twitter
                        </Link>
                    </li>

                    <li className="mt-2">
                        <Link
                            onClick={() => {
                                mixpanelTrack(event_name_enum.outbound, {
                                    url: "https://t.me/alphaquestio",
                                });
                            }}
                            className=" text-white text-sm font-semibold"
                            href={"https://t.me/alphaquestio"}
                            target="_blank"
                        >
                            Support
                        </Link>
                    </li>
                    <li className="mt-2">
                        <Link
                            onClick={() => {
                                mixpanelTrack(event_name_enum.outbound, {
                                    url: "https://discord.gg/EsMqKqjKB2",
                                });
                            }}
                            className=" text-white text-sm font-semibold"
                            href={"https://discord.gg/EsMqKqjKB2"}
                            target="_blank"
                        >
                            Discord
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideMenu;
