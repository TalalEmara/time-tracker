import React, {Fragment} from 'react';
import styles from '../styles/card.module.css';
interface CardProps {
    title: string;
    hours: string;
    lastInfo: string;
    colorType: string;
}

const Card: React.FC<CardProps> = ({ title, hours, lastInfo, colorType }) => {
    return (
        <div className={`${styles.background} ${styles[colorType]}`}>
        <div className={styles.panel}>
            <p className={styles.title}>{title}</p>
            <p className={styles.hours}>{hours}hrs</p>
            <p className={styles.lastInfo}>Last Week: {lastInfo}hrs</p>
        </div>
      </div>
    );
};

export default Card;