'use client'
import React from 'react';
import styles from './page.module.css';
import HomeButton from "@/app/components/HomeButton/homeButton";
import {useRouter} from "next/navigation";

function Page() {
    const router = useRouter();
    const movePage = (level: string) => {
        router.push(`/jlpt/level/${level}`)
    }

    return (
        <div>
            <div className={styles.jlpt__card_section}>
                <div className={`mg-right-15 ${styles.jlpt__card} ${styles.bg__all} bold`}>전체보기</div>
                <div className={`${styles.jlpt__card} ${styles.bg__one} bold`} onClick={() => movePage('N1')}>N1 공부하기</div>
            </div>
            <div className={styles.jlpt__card_section}>
                <div className={`mg-right-15 ${styles.jlpt__card} ${styles.bg__two} bold`} onClick={() => movePage('N2')}>N2 공부하기</div>
                <div className={`${styles.jlpt__card} ${styles.bg__three} bold`} onClick={() => movePage('N3')}>N3 공부하기</div>
            </div>
            <div className={styles.jlpt__card_section}>
                <div className={`mg-right-15 ${styles.jlpt__card} ${styles.bg__four} bold`} onClick={() => movePage('N4')}>N4 공부하기</div>
                <div className={`${styles.jlpt__card} ${styles.bg__five} bold`} onClick={() => movePage('N5')}>N5 공부하기</div>
            </div>
        </div>
    );
}

export default Page;
