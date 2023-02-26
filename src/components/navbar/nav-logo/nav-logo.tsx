import Logo from "../../../assets/Logo.png";
import "./nav-logo.scss"

export default function NavLogo(){
    return (
        <div className={"nav__logo"}>
            <img src={Logo} />
            <h2>SERAP</h2>
        </div>
    )
}