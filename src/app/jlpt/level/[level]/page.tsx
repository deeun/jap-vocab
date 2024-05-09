'use client'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchVocabByLevel} from "../../../../../store/vocabSlice";
import {useRouter} from "next/navigation";
import styles from './page.module.css'

function Page({params}: { params: { slug: string } }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const levelWords = useSelector(state => state.vocabReducer.levelWord)
    const levelWordsTotal = useSelector(state => state.vocabReducer.levelWordTotal)
    const [level, setLevel] = useState<Number>();
    const [page, setPage] = useState<Number>(0);
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        setLevel(params.level.split('N')[1])
        dispatch(fetchVocabByLevel({level: level, page: page}))
    }, []);

    return (
        <div>
            <div className={styles.level_word__title}>N{level} 단어 {levelWordsTotal}개</div>
            {levelWords.map((word: {}, idx: number) => {
                return (
                    <div key={idx} className={styles.level_word__wrap}>
                        <div className={'fx'}>
                            <div className='ft-jp fs-24 bold'>{word.word}</div>
                            <div className={'center mg-left-10'}>
                                <div className={'ft-jp mg-right-5'}>{word.furigana}</div>
                                <div className={'ft-jp'}>{word.romaji}</div>
                            </div>
                        </div>
                        <div className={'fs-14'}>{word.meaning}</div>
                        <div className={'ft_999 fs-14'}>{word.translation}</div>
                    </div>)
            })}
        </div>
    );
}

export default Page;
