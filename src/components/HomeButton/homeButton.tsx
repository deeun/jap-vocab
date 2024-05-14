'use client'
import React from 'react';
import {useRouter} from "next/navigation";
import styles from './homeButton.module.css'

function HomeButton(props) {
    const router = useRouter();
    const goHome = () => {
        router.push('/');
    }
    return (
        <div className={`${styles.home_button} bold`} onClick={goHome}>
            메인으로 🏠
        </div>
    );
}

export default HomeButton;
