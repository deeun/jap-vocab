'use client'

import Image from "next/image";
import styles from "./page.module.css";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchVocab} from "../../store/vocabSlice";
import { useRouter } from 'next/navigation'

export default function Home() {
    const dispatch = useDispatch();
    const router = useRouter();
    const setPage = (tab: string) => {
        router.push(`/${tab}`)
    }

  return (
      <div className={styles.main__wrap}>
          <div className={styles.main__card_word}>
              <div className={'fs-16'}>틈새 어휘 👀</div>
              <div className={'mg-top-10'}>
                  <div className={styles.main__card_word__jp}>
                      <div className='ft-jp fs-24 bold'>冬 <span className={'ft_999'}>(ふゆ fuyu)</span></div>
                      <div className={styles.main__card_level}>N5</div>
                  </div>
                  <div className={'mg-top-5 fs-24'}>겨울</div>
              </div>
          </div>
          <div className={`${styles.main__card} ${styles.bg__one} bold`} onClick={() => setPage('kana')}>🔍 히라가나 / 가타가나</div>
          <div className={`${styles.main__card} ${styles.bg__two} bold`}>📚 JLPT 등급별 어휘</div>
      </div>
  );
}
