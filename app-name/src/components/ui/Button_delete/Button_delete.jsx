import React from 'react';
import styles from './delete.module.css';
import {Link} from 'react-router-dom';

const Button_delete = (props) => {
    return(
        <div>
            <Link to={props.adress} className={styles.button}>{props.name}</Link>
        </div>
    );
};

export default Button_delete;