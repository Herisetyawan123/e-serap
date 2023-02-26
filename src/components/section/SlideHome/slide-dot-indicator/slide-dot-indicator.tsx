import "./slide-dot.indicator.scss"

const SlideDotIndicator = ({ isActive, count }: { isActive: number, count: number }) => {
    return (
        <div className={"container__dot"}>

            {
                Array.from(Array(2).keys()).map((value) => <div key={value} className={"item__dot"} style={{
                    backgroundColor: isActive == value ? "var(--primary)" : "#DDDDDD",
                }}></div>)
            }

        </div>
    )
}

export default SlideDotIndicator;