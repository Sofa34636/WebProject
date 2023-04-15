import React from 'react'
import style from "./Editing.module.css"
import Header from '../../header/Header';
import Button from '../../ui/Button/Button';
import Boxx from './Box/Boxx';


function Editing() {

    return (
        <section >
            <div className={style.App_content}>
                <Header name="Редактирование" />
                <div className={style.All}>
                <div className={style.button}>
                    <Button name="Назад" adress="/home" />
                </div>

                <div className={style.main}>
                    <Boxx />
                </div>
            </div>
            </div>
        </section>
    );
};

export default Editing;