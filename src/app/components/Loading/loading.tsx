'use client'
import React, {useEffect, useState} from 'react';
import styles from "./loading.module.css";

function Loading() {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {mounted &&
                <div className={styles.loading}>
                    <img src={'/img/rolling.svg'} width={100}/>
                </div>}
        </>
    );
}

export default Loading;
