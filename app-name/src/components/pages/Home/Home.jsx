import React from "react";
import style from './Home.module.css';
import Header from "../../header/Header";
import Counter from "../../ui/counter/Counter";
import Priority from "../../Priority";
import PostItem from "../../ui/postitem/Postitem";

const Home = (props) => {
    return(
        <section>
            
            <Header name="Список задач"/>
            <div className={style.App_content}>
                <div className={style.aside}>
                <Priority />
                </div>
                
                <div className={style.main}>
                <Counter name="Добавить задачу" adress="/editing"/>
                < div className={style.bloc}> 
                {props.data.map(item => <PostItem key={item.id} id={item.id} date={item.date} priority={item.priority} marks={item.marks} adress="/view"/>)}
                </div>
                  
                </div>
            </div>
        </section>
    );
}
export default Home;