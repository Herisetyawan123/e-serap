import "./slide-arrow-button.scss"

interface Props {
    children: JSX.Element
    className?: string
    onPress?: () => void
}

export default function SlideArrowButton({ children, className, onPress }: Props) {
    return (
        <button onClick={onPress} className={`btn__arrow ${className}`}>
            { children }
        </button>
    )
}