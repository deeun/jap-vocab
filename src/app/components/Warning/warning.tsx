'use client'
import React, {useEffect, useState} from 'react';
import styles from './warning.module.css'

function Warning() {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {mounted &&
            <div className={styles.warning}>
                <div className={'fx-column-center'}>
                    <img src={'/img/warning.png'} width={100} alt="" />
                    <div className={'fx-column-center mg-top-10'}>
                        <div>데이터를 불러올 수 없습니다 😢</div>
                        <div>새로고침 하시거나 나중에 다시 접속해주세요.</div>
                    </div>
                </div>
            </div> }
        </>
    );
}

export default Warning;
