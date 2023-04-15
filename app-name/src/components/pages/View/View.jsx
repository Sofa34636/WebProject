import React from 'react'
import style from "./View.module.css"
import Boxx1 from './Box1/Boxx1';
import Header from '../../header/Header';
import Button from '../../ui/Button/Button';
import Counter from '../../ui/counter/Counter';
import Button_delete from '../../ui/Button_delete/Button_delete';


function View() {

    return (
        <section >
            <div className={style.App_content}>
                <Header name="Просмотр" />
                <div className={style.button}>
                <div className={style.button1}>
                    <Button name="Назад" adress="/home" />
                    </div>
                    <div className={style.button2}>
                        <Counter name="Редактировать" adress="/editing" />

                    </div>
                    <div className={style.button3}>
                        <Button_delete name="Удалить" adress="/home" />

                    </div>
                </div>
                
                

                <div className={style.All}>


                    <div className={style.main}>
                        <Boxx1 />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default View;