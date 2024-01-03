
import React, { FC } from "react";
import SideMenu from "../SideMenu";

interface AppLayoutTypes {
    children: React.ReactElement;
}

const AppLayout: FC<AppLayoutTypes> = ({ children }) => {
    return (
        <div>
            <div className="flex  pl-64 max-lg:pl-0 overflow-x-hidden ">
                {children}
                <SideMenu />
            </div>
        </div>
    );
};

export default AppLayout;
