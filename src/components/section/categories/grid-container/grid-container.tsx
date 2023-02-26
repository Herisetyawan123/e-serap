import "./grid-container.scss"
import React from "react";

interface Props{
    children: React.ReactNode,
    className: string
}

const GridContainer= ({ children, className }: Props) => {
    return (
        <div className={`  ${className}`}>
            { children }
        </div>
    );
}

export default GridContainer;