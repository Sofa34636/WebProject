import React from "react";
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header className={style.head}>
            <p className={style.title}>{props.name}</p>
        </header>
    );
}
export default Header