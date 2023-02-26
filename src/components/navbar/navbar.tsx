import NavContainer from "./nav-container/nav-container";
import NavLogo from "./nav-logo/nav-logo";
import NavInput from "./nav-input/nav-input";
import NavMore from "./nav-more/nav-more";
export default function Navbar(){
    return (
        <NavContainer>
            <NavLogo />
            <NavInput />
            <NavMore />
        </NavContainer>
    )
}