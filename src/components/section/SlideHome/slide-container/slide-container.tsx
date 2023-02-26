import "./slide-container.scss"

export default function SlideContainer({ children }: { children: React.ReactNode }){

    return (
        <>
            <div className={"slide__container"}>
                { children }
            </div>
        </>
    )
}