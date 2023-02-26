import "./Slide.scss"
import SlideItem from "./slide-item/slide-item";
import SlideContainer from "./slide-container/slide-container";

export default function SectionSlide(){


    return (
        <div className={"section__slide"}>
            <SlideContainer>
                <SlideItem
                    title={"Selodakon Village"}
                    paragraph={"Kecamatan Tanggul, Kabupaten Jember, Provinsi Jawa Timur"}
                    position={0}
                    bg={"https://images.unsplash.com/photo-1559628233-100c798642d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}
                    logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Seal_of_Jember_Regency.svg/1200px-Seal_of_Jember_Regency.svg.png"}
                />

                <SlideItem
                    title={"BUMdes Selodakon"}
                    paragraph={"Kecamatan Tanggul, Kabupaten Jember, Provinsi Jawa Timur"}
                    position={0}
                    bg={"https://images.unsplash.com/photo-1442544213729-6a15f1611937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"}
                    logo={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Seal_of_Jember_Regency.svg/1200px-Seal_of_Jember_Regency.svg.png'}

                />

            </SlideContainer>
        </div>
    )
}