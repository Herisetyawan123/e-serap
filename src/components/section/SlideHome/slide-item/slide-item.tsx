import "./slide-item.scss"
import React, {LegacyRef, useEffect, useRef} from "react";

interface Props{
    title: string,
    paragraph: string,
    position: number,
    bg: string,
    logo: string,
    style?: object
}

const SlideItem = ({ title, paragraph, position, bg, logo, style } : Props ) => {
    const stl = {
        transform: `translateX(${position}%)`,
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '50%',
        ...style,
    };
    return (
        <div style={stl} className={"slide__item"} >
            <img src={logo} />
            <div className={"banner__text"}>
                <h2>{ title }</h2>
                <p>{ paragraph }</p>
            </div>
        </div>
    );
}

export default SlideItem