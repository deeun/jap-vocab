import React from 'react';
import styles from './page.module.css';
import HomeButton from "@/components/HomeButton/homeButton";
import {version} from "../../../package.json"
function Page() {
    return (
        <div className={styles.info__wrap}>
            <div>
                <div className={styles.info__title}>
                    <img src={'/img/bear.jpeg'} alt={''} width={150}/>
                    <div className={'fs-16'}>JLPT 준비 동반자 이랏샤이마세 ~</div>
                    <div className={'bold'}>일본어 하나둘셋 📚</div>
                </div>
                <div className={'mg-top-40 fs-14 center'}>
                    <div style={{textAlign: 'center'}}>
                        <div>일본어↔️영어 단어장으로 만들어졌습니다.</div>
                        <div className={'mg-top-10'}>한국어 풀이는 번역기를 거쳐서 나오는거라</div>
                        <div>조금 어색할거에요 🥹</div>
                        <div className={'mg-top-20'}>영어도 공부하고 일석이조라고 생각하기 ^^!</div>
                    </div>
                </div>
            </div>
            <div className={styles.info__credit}>
                <div className={'mg-top-10'}>
                    <div>만든이 |</div>
                    <div>디언 (https://github.com/deeun)</div>
                </div>
                {/* <div className={'mg-top-5'}>
                    <div>영일번역 |</div>
                    <div>네이버 파파고</div>
                </div> */}
                <div className={'mg-top-5'}>
                    <div>단어장 |</div>
                    <div>https://jlpt-vocab-api.vercel.app</div>
                </div>
                <div className={styles.info__version}>v{version}</div>
            </div>
            <HomeButton/>
        </div>
    );
}

export default Page;
