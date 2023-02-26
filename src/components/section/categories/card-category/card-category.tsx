import "./card-category.scss"

interface Props{
    img: string,
    label: string,
    to?: string
}

function CardCategory({ img, label, to }: Props) {
    return (
        <div className={"card__category"}>
            <img src={img} width={80} />
            <h4>{ label }</h4>
        </div>
    );
}

export default CardCategory;