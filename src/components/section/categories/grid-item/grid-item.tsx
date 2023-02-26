import "./grid-item.scss"



const GridItem = ({ children }: { children: React.ReactNode } ) => {
    return (
        <div className={"grid__item"}>
            { children }
        </div>
    )
}

export  default GridItem;