import React from 'react'
import style from './Postitem.module.css'
import {Link} from 'react-router-dom';

function PostItem (props) {
    
    return (
        
        
            <div className={style.post}>
                <div className={style.content}>
                <Link to={props.adress} className={style.content1}> Тестовая задача № {props.id}</Link>
                    <div className={style.content}>
                    <p>создано: {props.date}</p>
                        Приоритет: {props.priority}<br/>
                        Отметки: {props.marks}
                    </div>
                </div>
     
            </div>
           
    );
};

export default PostItem;