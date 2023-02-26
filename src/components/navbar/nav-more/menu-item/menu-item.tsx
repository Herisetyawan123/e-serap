import "./menu-item.scss"

interface Props {
    icon: JSX.Element,
    label: string,
    path: string
}

export default function MenuItem({ icon, label, path }: Props){
    return (
        <a className={"link__menu"}>
            { icon }
            <h4>{ label }</h4>
        </a>
    )
}