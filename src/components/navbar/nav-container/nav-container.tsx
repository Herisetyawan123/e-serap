import "./nav-container.scss"
import React from "react";
import {BiUserCircle} from "react-icons/all";


export default function NavContainer({ children }: { children: React.ReactNode | string | undefined }) {
    return (
        <nav>
            <div className={"nav__container"}>
                { children }
            </div>
        </nav>
    )
}