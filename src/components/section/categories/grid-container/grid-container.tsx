import "./grid-container.scss"
import React from "react";

interface Props{
    children: React.ReactNode,
    className?: string
}

const GridContainer= ({ children, className }: Props) => {
    return (
        <div className={`grid__category  ${className}`}>
            { children }
        </div>
    );
}

export default GridContainer;