'use client'

import styles from "./page.module.css";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchEngKorTranslation, fetchRandomVocab, vocabReducer, vocabSlice} from "../../store/vocabSlice";
import {useRouter} from 'next/navigation'

export default function Home() {
    const [isClient, setIsClient] = useState(false)
    const dispatch = useDispatch();
    const randomWord = useSelector(state => state.vocabReducer.randomWord)
    const router = useRouter();
    const setPage = (tab: string) => {
        router.push(`/${tab}`)
    }
    const goDictionary = () => {
        window.open('https://ja.dict.naver.com/');
    }
    const [levelShow, setLevelShow] = useState(false);
    const onSuccess = (meaning: string) => {
        const args = {meaning, dataType: 'word'};
        dispatch(fetchEngKorTranslation(args));
    }
    const onFail = () => {
    }
    useEffect(() => {
        setIsClient(true);
        localStorage.clear();
    }, []);
    useEffect(() => {
        setLevelShow(false);
        const args = {onSuccess, onFail}
        dispatch(fetchRandomVocab(args))
    }, []);

    return (
        <>
            {isClient ? <>
                <div className={styles.main__wrap}>
                    <div className={styles.main__card_word}>
                        <div className={'fx-space-between'}>
                            <div className={'fs-20'}>틈새 어휘 👀</div>
                            <div className={styles.main__card_level}>N{randomWord?.level}</div>
                        </div>
                        <div className={'mg-top-15'}>
                            <div className={styles.main__card_word__jp}>
                                <div className='ft-jp fs-32 bold'>{randomWord?.word}</div>
                            </div>
                            <div className={'ft_999 fs-20'}>({randomWord?.furigana} {randomWord?.romaji})</div>
                            <div className={'mg-top-10 fs-20'}>{randomWord?.meaning}</div>
                            <div className={'fs-16 mg-top-5'}>{randomWord?.translation}</div>
                        </div>
                    </div>
                    <div className={`${styles.main__card} ${styles.bg__one} bold`} onClick={() => setPage('kana')}>🐣
                        히라가나 /
                        가타가나
                    </div>
                    <div className={`${styles.main__card} ${styles.bg__two} bold`} onClick={() => setPage('jlpt')}>📚
                        JLPT
                        등급별 어휘
                    </div>
                    <div className={`${styles.main__card} ${styles.bg__three} bold`} onClick={goDictionary}>🔍 일본어 사전
                        바로가기
                    </div>
                    <div className={styles.main__mobile_recommended__wrap}>
                        <div className={`bold ${styles.main__mobile_recommended}`}>
                            📢📢<br/> 일본어 하나둘셋은 모바일로 접속했을 때<br/> 더 편하게 이용하실 수 있어요 !
                        </div>
                        <div className={styles.main__mobile_recommended_balloon}></div>
                    </div>
                    <div className={styles.main__info__wrap}>
                        <div className={styles.main__info} onClick={() => setPage('info')}>
                            <img src={'/img/question.png'} alt={''} height={40} width={40}/>
                        </div>
                    </div>
                </div>
            </> : <></>}
        </>
    );
}
