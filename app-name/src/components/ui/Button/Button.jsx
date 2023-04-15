import React from 'react';
import styles from './Button.module.css';
import {Link} from 'react-router-dom';

const Button = (props) => {
    return(
        <div>
            <Link to={props.adress} className={styles.button}>{props.name}</Link>
        </div>
    );
};

export default Button;