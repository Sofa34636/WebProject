import React from 'react';
import style from '../App.module.css'


const Priority = (props) => {
    return (
        <aside>

            <div className={style.post_1}>
                <div className={style.post__content_1}>
                    СОРТИРОВКА
                </div>
                <p className={style.post_3}><input type="radio" name="cl" value="lager"/>Новые</p>
                <p><input type="radio" name="cl" value="dark"/>Старые</p>
                {/* <p><input type="radio" 
                value={props.value}
                OnChange={props.OnChange}
                />
                <option disabled value="">{props.defaultValue}</option>
                    {props.option.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                    )}
                </p> */}

            </div>

            <br />
            <div className={style.post_2}>
                <div className={style.post__content_1}>
                    ПРИОРИТЕТ
                </div>
                <p className={style.post_3} ><input type="checkbox" name="car" value="yes" /> Low </p>
                <p className={style.post_3}><input type="checkbox" name="car" value="yes" /> Normal </p>
                <p ><input type="checkbox" name="car" value="yes" /> High </p>
                <div className={style.chec}>
                <div className={style.post__content_1}>
                    ОТМЕТКА
                </div>
                <p className={style.post_3}><input type="checkbox" name="car" value="yes" /> Research </p> 
                <p className={style.post_3}><input type="checkbox" name="car" value="yes" /> Design </p>
                <p ><input type="checkbox" name="car" value="yes" /> Development </p>
            </div>
            </div>
        </aside>
    );
};

export default Priority;