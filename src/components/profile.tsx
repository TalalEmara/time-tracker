import React, {Fragment} from 'react';
import styles from '../styles/card.module.css';
interface profileCard {
    firstName: string;
    lastName: string;
    imagePath: string;
}

const ProfileCard = () => {
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

export default ProfileCard;