'use client'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchVocabByLevel, fetchEngKorTranslation} from "../../../../../store/vocabSlice";
import {useRouter} from "next/navigation";
import styles from './page.module.css'

function Page({params}: { params: { slug: string } }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const loading = useSelector(state => state.vocabReducer.loading);
    const levelWords = useSelector(state => state.vocabReducer.levelWord)
    const levelWordsTotal = useSelector(state => state.vocabReducer.levelWordTotal)
    const [level, setLevel] = useState<number>();
    const [page, setPage] = useState<number>(0);

    const onSuccess = (data) => {
        const args = {meaning: data, dataType: 'array'};
        dispatch(fetchEngKorTranslation(args));
    }
    const onFail = () => {

    }
    const clickLeftArrow = () => {
        if (page > 0) {
            setPage(page - 1);
        } else {
            return;
        }
    }
    const clickRightArrow = () => {
        if (Number(page + 1) < totalPageCalc(levelWordsTotal)) {
            setPage(page + 1);
        } else {
            return;
        }
    }
    const totalPageCalc = (total: number) => {
        const totalDivided = (total / 15).toFixed(1)
        const totalReturn = Number(Number(totalDivided.split('.')[0]) + 1)
        return totalReturn
    }
    const initialPageSetting = async () => {
        setLevel(params.level.split('N')[1]);
        await dispatch(fetchVocabByLevel({level: params.level.split('N')[1], page: page, onSuccess, onFail}));
    }
    useEffect(() => {
        setLevel(0);
        initialPageSetting();
    }, []);
    useEffect(() => {
        dispatch(fetchVocabByLevel({level: level, page: page, onSuccess, onFail}));
    }, [page]);

    return (
        <div>
            {totalPageCalc(levelWordsTotal) !== 'NaN1' &&
                <>
                    <div className={styles.level_word__title__wrap}>
                        <div className={`bold ${styles.level_word__title}`}>
                            {/*N{level} 단어 👀*/}
                            ✏️ N{level} 단어
                        </div>
                        <div className={styles.level_word__paging_wrap}>
                            <div className={styles.level_word__paging_button} onClick={clickLeftArrow}>◀︎</div>
                            <div>{page + 1} / {totalPageCalc(levelWordsTotal)}</div>
                            <div className={styles.level_word__paging_button} onClick={clickRightArrow}>▶︎</div>
                        </div>
                    </div>
                </>}
            {levelWords?.map((word: {}, idx: number) => {
                return (
                    <div key={idx} className={styles.level_word__wrap}>
                        <div>
                            <div className={'fx'}>
                                <div className='ft-jp fs-24 bold'>{word.word}</div>
                                <div className={'center mg-left-5'}>
                                    <div className={'ft_999 ft-jp mg-right-5'}>{word.furigana}</div>
                                </div>
                            </div>
                            <div className={'fs-14'}>{word.meaning}</div>
                            <div className={'ft_999 fs-14'}>{word.translation}</div>
                        </div>
                    </div>)
            })}
        </div>
    );
}

export default Page;
