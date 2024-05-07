'use client'

import React from 'react';
import styles from './page.module.css'
import {useRouter} from "next/navigation";
import HomeButton from "@/app/components/HomeButton/homeButton";
function Page() {

    return (
        <div>
            <HomeButton/>
        <div className={styles.kana__wrap}>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>あ ・ ア</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>a</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>い ・ イ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>i</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>う ・ ウ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>u</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>え ・ エ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>e</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>お ・ オ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>o</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>か ・ カ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>ka</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>き ・ キ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>ki</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>く ・ ク</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>ku</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>け ・ ケ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>ke</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>こ ・ コ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>ko</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word__extra}>
                    <div className={'bold'}>きゃ ・ キャ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>kya</div>
                </div>
                <div className={styles.kana__all_word__extra}>
                    <div className={'bold'}>きゅ ・ キュ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>kyu</div>
                </div>
                <div className={styles.kana__all_word__extra}>
                    <div className={'bold'}>きょ ・ キョ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>kyo</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>さ ・ サ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>sa</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>し ・ シ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>shi</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>す ・ ス</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>su</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>せ ・ セ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>se</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>そ ・ ソ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>so</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>た ・ タ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>ta</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ち ・ チ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>chi</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>つ ・ ツ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>tsu</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>て ・ テ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>te</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>と ・ ト</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>to</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>な ・ ナ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>a</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>に ・ ニ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>chi</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ぬ ・ ヌ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>tsu</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ね ・ ネ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>te</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>の ・ ノ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>to</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>は ・ ハ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>a</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ひ ・ ヒ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>chi</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ふ ・ フ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>tsu</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>へ ・ ヘ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>te</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ほ ・ ホ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>to</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ま ・ マ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>a</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>み ・ ミ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>chi</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>む ・ ム</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>tsu</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>め ・ メ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>te</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>も ・ モ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>to</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>や ・ ヤ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>a</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ゆ ・ ユ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>chi</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>よ ・ ヨ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>tsu</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ら ・ ハ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>a</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>り ・ ヒ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>chi</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>る ・ フ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>tsu</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>れ ・ ヘ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>te</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ろ ・ ホ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>to</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>わ ・ ハ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>a</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>を ・ ヒ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>chi</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ん ・ フ</div>
                    <div className={'fs-20 ft_999 mg-top-5'}>tsu</div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Page;
