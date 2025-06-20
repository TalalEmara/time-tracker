import React, {Fragment} from 'react';
import styles from '../styles/card.module.css';

interface CardProps {
    currentMode: number;
    title: string;
    hours: string[];
    lastInfo: string[];
    colorType: string;
}

const Card: React.FC<CardProps> = ({ currentMode,title, hours, lastInfo, colorType }) => {
const iconUrl = require(`../images/icon-${colorType}.svg`);
    return (
        <div className={`${styles.background} ${styles[colorType] } `}
             style={{backgroundImage: `url(${iconUrl})`}}>
        <div className={styles.panel}>
            <p className={styles.title}>{title}</p>
            <p className={styles.hours}>{hours[currentMode]}hrs</p>
            <p className={styles.lastInfo}>Last {currentMode==0?"week":currentMode==1?"month":"year"}: {lastInfo[currentMode]}hrs</p>
        </div>
      </div>
    );
};

export default Card;