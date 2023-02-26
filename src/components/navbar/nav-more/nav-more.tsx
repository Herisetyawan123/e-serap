import "./nav-more.scss"
import MenuItem from "./menu-item/menu-item";
import {IoIosNotifications, BiUserCircle, BiCart} from "react-icons/all";
import MenuCart from "./menu-cart/menu-cart";
export default function NavMore(){
    return (
        <div className={"nav__more"}>
            <MenuCart />
            <MenuItem icon={<IoIosNotifications size={25} />} label={"User"} path={"/"} />
            <MenuItem icon={<BiUserCircle size={25} />} label={"User"} path={"/"} />
        </div>
    )
}