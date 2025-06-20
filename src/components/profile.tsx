import React, {Fragment, useState} from 'react';
import styles from '../styles/profile.module.css';
import profileImage from '../images/image-jeremy.png';
interface ProfileCardProps {
    firstName: string;
    lastName: string;
    imagePath: string;
    currentMode: number;
    setCurrentMode: React.Dispatch<React.SetStateAction<number>>;
}

const ProfileCard = ({ firstName, lastName, imagePath, currentMode, setCurrentMode }: ProfileCardProps) => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.infoPanel}>
                <img src={imagePath} className={styles.profileImage} />
                <p className={styles.reportLabel}>Report for</p>
                <p className={styles.NameLabel}>{firstName}</p>
                <p className={styles.NameLabel}>{lastName}</p>
            </div>
            <button
                className={styles.profileButton}
                style={currentMode === 0 ? { color: 'white', textDecoration: 'underline' } : {}}
                onClick={() => setCurrentMode(0)}
            >
                Daily
            </button>
            <button
                className={styles.profileButton}
                style={currentMode === 1 ? { color: 'white', textDecoration: 'underline' } : {}}
                onClick={() => setCurrentMode(1)}
            >
                Weekly
            </button>
            <button
                className={styles.profileButton}
                style={currentMode === 2 ? { color: 'white', textDecoration: 'underline' } : {}}
                onClick={() => setCurrentMode(2)}
            >
                Monthly
            </button>
        </div>
    );
};

export default ProfileCard;
