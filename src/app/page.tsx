'use client'

import styles from "./page.module.css";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchRandomVocab, fetchVocab, vocabReducer, vocabSlice} from "../../store/vocabSlice";
import {useRouter} from 'next/navigation'

export default function Home() {
    const dispatch = useDispatch();
    const randomWord = useSelector(state => state.vocabReducer.randomWord)
    const loading = useSelector(state => state.vocabReducer.loading)
    const isError = useSelector(state => state.vocabReducer.isError)
    const router = useRouter();
    const setPage = (tab: string) => {
        router.push(`/${tab}`)
    }
    const [levelShow, setLevelShow] = useState(false);

    useEffect(() => {
        setLevelShow(false);
        dispatch(fetchRandomVocab());
        console.log(isError, 'isError PAge TSX');
    }, [isError]);

    return (
        <div className={styles.main__wrap}>
            {loading ?
                <div className={styles.main__card_word__empty}>
                    <div className={'center'}>
                        <img src={'/img/rolling.svg'} width={100} />
                    </div>
                </div>
                :
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
                        <div className={'mg-top-10 fs-22'}>{randomWord?.meaning}</div>
                        <div className={'fs-16'}>{randomWord?.translation}</div>
                    </div>
                </div>}
            <div className={`${styles.main__card} ${styles.bg__one} bold`} onClick={() => setPage('kana')}>🔍 히라가나 /
                가타가나
            </div>
            <div className={`${styles.main__card} ${styles.bg__two} bold`} onClick={() => setPage('jlpt')}>📚 JLPT 등급별
                어휘
            </div>
        </div>
    );
}
