import React from 'react'
import style from "./Boxx.module.css"
import Counter from '../../../ui/counter/Counter';

function PostItem (props) {
    
    return (
        
        
            <div className={style.post}>
                <form action='#' method='post' encType='multipart/form-data'></form>
                <div className={style.content_1}>
                    НАЗВАНИЕ ЗАДАЧИ
                </div>
            <input type="text" name="NameQ" value=""/>
                <div className={style.content_1}>
                    ПРИОРИТЕТ
                </div>
                <select name="Priority">
                    <option value="low">low</option>  
                    <option value="normal">normal</option>
                    <option value="high">high</option>
                </select>
                <div className={style.content_1}>
                    ОТМЕТКИ
                </div>
                <select name="Priority2">
                    <option value="Research">research</option>  
                    <option value="Design">design</option>
                    <option value="Development">development</option>
                </select>
                <div className={style.content_1}>
                    ОПИСАНИЕ   
                </div>
                
                <div className={style.text}>
                    <textarea name="text" cols="30" rows="10"></textarea>
                </div>
                <div className={style.button}>
                <Counter name="Сохранить" adress="/home"/>
                </div>
                
                
            </div>
           
    );
};

export default PostItem;