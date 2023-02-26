import "./nav-input.scss"
import { BiSearch } from "react-icons/bi";
import {useState} from "react";

export default function NavInput(){
    return (
        <div className={"nav__input"}>
            <input type={"text"} name={"search"} placeholder={"cari kebutuhan anda disini..."} />
            <BiSearch size={25} className={`icon__search`} />
        </div>
    )
}