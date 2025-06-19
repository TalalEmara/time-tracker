import React, {Fragment} from 'react';
import styles from '../styles/profile.module.css';
interface profileCard {
    firstName: string;
    lastName: string;
    imagePath: string;
}

const ProfileCard = () => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.infoPanel}>
                <img src={"https://placehold.co/100x100/png"} className={styles.profileImage}/>
                <p className={styles.reportLabel}>Report for</p>
                <p className={styles.NameLabel}>Basel</p>
                <p className={styles.NameLabel}>Lebas</p>
            </div>
            <button className={styles.profileButton}>Daily</button>
            <button className={styles.profileButton}>Weekly</button>
            <button className={styles.profileButton}>Monthly</button>
        </div>
    );
};

export default ProfileCard;