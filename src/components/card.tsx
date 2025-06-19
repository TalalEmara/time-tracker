import React, {Fragment} from 'react';
import styles from '../styles/card.module.css';

const Card = () => {
    return (
      <div className={styles.background}>
        <div className={styles.panel}>
            <p className={"title"}>work</p>
            <p className={"hours"}>32hrs</p>
            <p className={"lastInfo"}>last week: 22hrs</p>
        </div>
      </div>
    );
};

export default Card;