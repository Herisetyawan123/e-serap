import MenuItem from "../menu-item/menu-item";
import "./menu-cart.scss";
import {BiCart} from "react-icons/all";

export default function MenuCart(){
    return (
        <div className={"nav__chart"}>
            <MenuItem icon={<BiCart size={25} />} label={''} path={'/'} />
        </div>
    );
}