import React from 'react';
import styles from './Counter.module.css';
import {Link} from 'react-router-dom';

const Counter = (props) => {
    return(
        <div>
            <Link to={props.adress} className={styles.button}>{props.name}</Link>
        </div>
    );
};

export default Counter;