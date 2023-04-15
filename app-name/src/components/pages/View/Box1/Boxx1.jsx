import React from 'react'
import style from "./Boxx1.module.css"


function Boxx1 (props) {

    return (
        
        
            <div className={style.post}>
                <form action='#' method='post' encType='multipart/form-data'></form>
                <div className={style.content_2}>
                    НАЗВАНИЕ ЗАДАЧИ
                </div>
                <div className={style.content_1}>
                    ДАТА СОЗДАНИЯ
                </div>
                {props.date}
                <div className={style.content_1}>
                    ПРИОРИТЕТ
                </div>
                {props.priority}
                <div className={style.content_1}>
                    ОТМЕТКИ
                </div>
                {props.marks}
                <div className={style.content_1}>
                    ОПИСАНИЕ   
                </div>
                <div>
                    ...
                </div>   
            </div>
           
    );
};


export default Boxx1;