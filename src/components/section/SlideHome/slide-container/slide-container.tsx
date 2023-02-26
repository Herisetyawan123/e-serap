import "./slide-container.scss"
import SlideArrowButton from "../slide-arrow-button/slide-arrow-button";
import {FaArrowLeft, FaArrowRight} from "react-icons/all";
import {Children, LegacyRef, useEffect, useState} from "react";
import {json} from "react-router-dom";
import SlideDotIndicator from "../slide-dot-indicator/slide-dot-indicator";


export default function SlideContainer({ children }: { children: React.ReactNode }){
    const initialPositon = 0;
    const [position, setPosition] = useState<number>(initialPositon);
    const max = Children.count(children);
    const maxPosition = max * 100;
    const [currentPosition, setCurrentPosition] = useState(initialPositon);
    const nextSlideAction = () => {
        setCurrentPosition(() => currentPosition - 1 > -max ? currentPosition - 1 : currentPosition)
    }
    const prevSlideAction = () => {
        setCurrentPosition(() => currentPosition == 0 ? currentPosition : currentPosition + 1)
    }

    useEffect(() => {
        console.log("pertama kali", currentPosition)
        setPosition(() => currentPosition * 100);
    }, [currentPosition]);


    return (
        <>
            <SlideArrowButton className={"left"} onPress={prevSlideAction}>
                <FaArrowLeft size={15} />
            </SlideArrowButton>
            <SlideArrowButton className={"right"} onPress={nextSlideAction}>
                <FaArrowRight size={15} />
            </SlideArrowButton>
            <div className={"slide__container"}>
                {
                    Children.map(children, (child, index) => {
                        return (
                            <div key={index} style={{
                                minWidth: "100%",
                                transform: `translateX(${position}%)`,
                                transition: "all 400ms"

                            }}>
                                {child}
                            </div>
                        )
                    })
                }
            </div>
            <SlideDotIndicator count={max} isActive={Math.abs(currentPosition)} />
        </>
    )
}