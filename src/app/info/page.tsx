import React from 'react';
import styles from './page.module.css';
import HomeButton from "@/components/HomeButton/homeButton";

function Page(props) {
    return (
        <div className={styles.info__wrap}>
            <div>
                <div className={styles.info__title}>
                    편리한 JLPT 준비 동반자<br/>
                    <div className={'bold'}>일본어 하나둘셋 📚</div>
                </div>
                <div className={'mg-top-40 fs-14'}>
                    일본어↔️영어 단어장을 사용하여 만들어졌습니다.<br/><br/>
                    한국어 풀이는 번역기를 거쳐서 나오는거라<br/> 조금 어색할거에요 🥹 <br/><br/>
                    영어도 공부하고 일석이조~~ ^^!
                </div>
            </div>
            <div className={styles.info__credit}>
                <div>
                    <div>만든이 |</div>
                    <div>디언 (https://github.com/deeun)</div>
                </div>
                <div className={'mg-top-5'}>
                    <div>영일번역 |</div>
                    <div>네이버 파파고</div>
                </div>
                <div className={'mg-top-5'}>
                    <div>단어장 |</div>
                    <div>https://jlpt-vocab-api.vercel.app</div>
                </div>
            </div>
            <HomeButton/>
        </div>
    );
}

export default Page;
