import "./Slide.scss"
import SlideItem from "./slide-item/slide-item";
import SlideContainer from "./slide-container/slide-container";
import {LegacyRef, useEffect, useRef, useState} from "react";
import SlideArrowButton from "./slide-arrow-button/slide-arrow-button";
import { FaArrowLeft, FaArrowRight } from "react-icons/all";

export default function SectionSlide(){
    const initialPositon = 0;
    const [position, setPosition] = useState<number>(initialPositon);
    const prevSlideAction = () => {
        setPosition(() => position + 100 > 0 ? 0 : position + 100);
    }
    const nextSlideAction = () => {
        setPosition(() => position - 100 < -100 ? -100 : position - 100 );
    }

    useEffect(() => console.log(position), [position])

    return (
        <div className={"section__slide"}>
            <SlideArrowButton className={"left"} onPress={prevSlideAction}>
                <FaArrowLeft size={15} />
            </SlideArrowButton>
            <SlideArrowButton className={"right"} onPress={nextSlideAction}>
                <FaArrowRight size={15} />
            </SlideArrowButton>
            <SlideContainer>
                <SlideItem
                    title={"Selodakon Village"}
                    paragraph={"Kecamatan Tanggul, Kabupaten Jember, Provinsi Jawa Timur"}
                    position={position}
                    bg={"https://images.unsplash.com/photo-1559628233-100c798642d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}
                    logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Seal_of_Jember_Regency.svg/1200px-Seal_of_Jember_Regency.svg.png"}
                />

                <SlideItem
                    title={"BUMdes Selodakon"}
                    paragraph={"Kecamatan Tanggul, Kabupaten Jember, Provinsi Jawa Timur"}
                    position={position}
                    bg={"https://images.unsplash.com/photo-1442544213729-6a15f1611937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"}
                    logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Seal_of_Jember_Regency.svg/1200px-Seal_of_Jember_Regency.svg.png'}

                />

            </SlideContainer>
        </div>
    )
}