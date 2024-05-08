'use client'

import React, { useState } from 'react';
import styles from './page.module.css'
import {useRouter} from "next/navigation";
import HomeButton from "@/app/components/HomeButton/homeButton";

function Page() {
    const [viewExtra, setViewExtra] = useState(false);

    return (
        <>
        <HomeButton/>
            <div className={styles.kana__tab_gap}></div>
        <div className={styles.kana__tab_wrap}>
            <div onClick={() => setViewExtra(false)} className={!viewExtra ? styles.kana__tab_active : styles.kana__tab_inactive}>
                오십음도
            </div>
            <div onClick={() => setViewExtra(true)} className={viewExtra ? styles.kana__tab_active : styles.kana__tab_inactive}>
                탁음 ・ 요음
            </div>
        </div>
        { viewExtra ?
            <div className={styles.kana__wrap}>
                <div className={styles.kana__category}>요음</div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>きゃ ・ キャ</div>
                        <div className={styles.kana__all_word__gray}>kya</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>きゅ ・ キュ</div>
                        <div className={styles.kana__all_word__gray}>kyu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>きょ ・ キョ</div>
                        <div className={styles.kana__all_word__gray}>kyo</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>しゃ ・ シャ</div>
                        <div className={styles.kana__all_word__gray}>sha</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>しゅ ・ シュ</div>
                        <div className={styles.kana__all_word__gray}>shu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>しょ ・ ショ</div>
                        <div className={styles.kana__all_word__gray}>sho</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ちゃ ・ チャ</div>
                        <div className={styles.kana__all_word__gray}>cha</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ちゅ ・ チュ</div>
                        <div className={styles.kana__all_word__gray}>chu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ちょ ・ チョ</div>
                        <div className={styles.kana__all_word__gray}>cho</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>にゃ ・ ニャ</div>
                        <div className={styles.kana__all_word__gray}>nya</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>にゅ ・ ニュ</div>
                        <div className={styles.kana__all_word__gray}>nyu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>にょ ・ ニョ</div>
                        <div className={styles.kana__all_word__gray}>nyo</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ひゃ ・ ヒャ</div>
                        <div className={styles.kana__all_word__gray}>hya</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ひゅ ・ ヒュ</div>
                        <div className={styles.kana__all_word__gray}>hyu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ひょ ・ ヒョ</div>
                        <div className={styles.kana__all_word__gray}>hyo</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>みゃ ・ ミャ</div>
                        <div className={styles.kana__all_word__gray}>mya</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>みゅ ・ ミュ</div>
                        <div className={styles.kana__all_word__gray}>myu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>みょ ・ ミョ</div>
                        <div className={styles.kana__all_word__gray}>myo</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>りゃ ・ リャ</div>
                        <div className={styles.kana__all_word__gray}>rya</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>りゅ ・ リュ</div>
                        <div className={styles.kana__all_word__gray}>ryu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>りょ ・ リョ</div>
                        <div className={styles.kana__all_word__gray}>ryo</div>
                    </div>
                </div>

                <div className={styles.kana__category} style={{marginTop: '30px'}}>탁음</div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>が ・ ガ</div>
                        <div className={styles.kana__all_word__gray}>ga</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぎ ・ ギ</div>
                        <div className={styles.kana__all_word__gray}>gi</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぐ ・ グ</div>
                        <div className={styles.kana__all_word__gray}>gu</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>げ ・ ゲ</div>
                        <div className={styles.kana__all_word__gray}>ge</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ご ・ ゴ</div>
                        <div className={styles.kana__all_word__gray}>go</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ざ ・ ザ</div>
                        <div className={styles.kana__all_word__gray}>za</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>じ ・ ジ</div>
                        <div className={styles.kana__all_word__gray}>ji</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ず ・ ズ</div>
                        <div className={styles.kana__all_word__gray}>zu</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぜ ・ ゼ</div>
                        <div className={styles.kana__all_word__gray}>ze</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぞ ・ ゾ</div>
                        <div className={styles.kana__all_word__gray}>zo</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>だ ・ ダ</div>
                        <div className={styles.kana__all_word__gray}>da</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぢ ・ ヂ</div>
                        <div className={styles.kana__all_word__gray}>ji(di)</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>づ ・ ヅ</div>
                        <div className={styles.kana__all_word__gray}>zu(du)</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>で ・ デ</div>
                        <div className={styles.kana__all_word__gray}>de</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ど ・ ド</div>
                        <div className={styles.kana__all_word__gray}>do</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ば ・ バ</div>
                        <div className={styles.kana__all_word__gray}>ba</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>び ・ ビ</div>
                        <div className={styles.kana__all_word__gray}>bi</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぶ ・ ブ</div>
                        <div className={styles.kana__all_word__gray}>bu</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>べ ・ べ</div>
                        <div className={styles.kana__all_word__gray}>be</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぼ ・ ボ</div>
                        <div className={styles.kana__all_word__gray}>bo</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぱ ・ パ</div>
                        <div className={styles.kana__all_word__gray}>pa</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぴ ・ ピ</div>
                        <div className={styles.kana__all_word__gray}>pi</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぷ ・ プ</div>
                        <div className={styles.kana__all_word__gray}>pu</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ペ ・ ペ</div>
                        <div className={styles.kana__all_word__gray}>pe</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>ぽ ・ ポ</div>
                        <div className={styles.kana__all_word__gray}>po</div>
                    </div>
                </div>

                <div className={styles.kana__category} style={{marginTop: '30px'}}>탁음+요음</div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ぎゃ ・ ギャ</div>
                        <div className={styles.kana__all_word__gray}>gya</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ぎゅ ・ ギュ</div>
                        <div className={styles.kana__all_word__gray}>gyu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ぎょ ・ ギョ</div>
                        <div className={styles.kana__all_word__gray}>gyo</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>じゃ ・ ジャ</div>
                        <div className={styles.kana__all_word__gray}>jya</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>じゅ ・ ジュ</div>
                        <div className={styles.kana__all_word__gray}>jyu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>じょ ・ ジョ</div>
                        <div className={styles.kana__all_word__gray}>jyo</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ぢゃ ・ ヂャ</div>
                        <div className={styles.kana__all_word__gray}>dya</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ぢゅ ・ ヂュ</div>
                        <div className={styles.kana__all_word__gray}>dyu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ぢょ ・ ヂョ</div>
                        <div className={styles.kana__all_word__gray}>dyo</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>びゃ ・ ビャ</div>
                        <div className={styles.kana__all_word__gray}>bya</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>びゅ ・ ビュ</div>
                        <div className={styles.kana__all_word__gray}>byu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>びょ ・ ビョ</div>
                        <div className={styles.kana__all_word__gray}>byo</div>
                    </div>
                </div>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ぴゃ ・ ピャ</div>
                        <div className={styles.kana__all_word__gray}>pya</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ぴゅ ・ ピュ</div>
                        <div className={styles.kana__all_word__gray}>pyu</div>
                    </div>
                    <div className={styles.kana__all_word__extra}>
                        <div className={'bold'}>ぴょ ・ ピョ</div>
                        <div className={styles.kana__all_word__gray}>pyo</div>
                    </div>
                </div>
            </div> :
            <div className={styles.kana__wrap}>
                <div className={styles.kana__all_wrap}>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>あ ・ ア</div>
                        <div className={styles.kana__all_word__gray}>a</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>い ・ イ</div>
                        <div className={styles.kana__all_word__gray}>i</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>う ・ ウ</div>
                        <div className={styles.kana__all_word__gray}>u</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>え ・ エ</div>
                        <div className={styles.kana__all_word__gray}>e</div>
                    </div>
                    <div className={styles.kana__all_word}>
                        <div className={'bold'}>お ・ オ</div>
                        <div className={styles.kana__all_word__gray}>o</div>
                    </div>
                </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>か ・ カ</div>
                    <div className={styles.kana__all_word__gray}>ka</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>き ・ キ</div>
                    <div className={styles.kana__all_word__gray}>ki</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>く ・ ク</div>
                    <div className={styles.kana__all_word__gray}>ku</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>け ・ ケ</div>
                    <div className={styles.kana__all_word__gray}>ke</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>こ ・ コ</div>
                    <div className={styles.kana__all_word__gray}>ko</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>さ ・ サ</div>
                    <div className={styles.kana__all_word__gray}>sa</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>し ・ シ</div>
                    <div className={styles.kana__all_word__gray}>shi</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>す ・ ス</div>
                    <div className={styles.kana__all_word__gray}>su</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>せ ・ セ</div>
                    <div className={styles.kana__all_word__gray}>se</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>そ ・ ソ</div>
                    <div className={styles.kana__all_word__gray}>so</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>た ・ タ</div>
                    <div className={styles.kana__all_word__gray}>ta</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>ち ・ チ</div>
                    <div className={styles.kana__all_word__gray}>chi</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>つ ・ ツ</div>
                    <div className={styles.kana__all_word__gray}>tsu</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>て ・ テ</div>
                    <div className={styles.kana__all_word__gray}>te</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>と ・ ト</div>
                    <div className={styles.kana__all_word__gray}>to</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>な ・ ナ</div>
                    <div className={styles.kana__all_word__gray}>na</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>に ・ ニ</div>
                    <div className={styles.kana__all_word__gray}>ni</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ぬ ・ ヌ</div>
                    <div className={styles.kana__all_word__gray}>nu</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ね ・ ネ</div>
                    <div className={styles.kana__all_word__gray}>ne</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>の ・ ノ</div>
                    <div className={styles.kana__all_word__gray}>no</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>は ・ ハ</div>
                    <div className={styles.kana__all_word__gray}>ha</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>ひ ・ ヒ</div>
                    <div className={styles.kana__all_word__gray}>hi</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>ふ ・ フ</div>
                    <div className={styles.kana__all_word__gray}>fu</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>へ ・ ヘ</div>
                    <div className={styles.kana__all_word__gray}>he</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>ほ ・ ホ</div>
                    <div className={styles.kana__all_word__gray}>ho</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ま ・ マ</div>
                    <div className={styles.kana__all_word__gray}>ma</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>み ・ ミ</div>
                    <div className={styles.kana__all_word__gray}>mi</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>む ・ ム</div>
                    <div className={styles.kana__all_word__gray}>mu</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>め ・ メ</div>
                    <div className={styles.kana__all_word__gray}>me</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>も ・ モ</div>
                    <div className={styles.kana__all_word__gray}>mo</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>や ・ ヤ</div>
                    <div className={styles.kana__all_word__gray}>ya</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>ゆ ・ ユ</div>
                    <div className={styles.kana__all_word__gray}>yu</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>よ ・ ヨ</div>
                    <div className={styles.kana__all_word__gray}>yo</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ら ・ ハ</div>
                    <div className={styles.kana__all_word__gray}>ra</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>り ・ ヒ</div>
                    <div className={styles.kana__all_word__gray}>ri</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>る ・ フ</div>
                    <div className={styles.kana__all_word__gray}>ru</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>れ ・ ヘ</div>
                    <div className={styles.kana__all_word__gray}>re</div>
                </div>
                <div className={styles.kana__all_word}>
                    <div className={'bold'}>ろ ・ ホ</div>
                    <div className={styles.kana__all_word__gray}>ro</div>
                </div>
            </div>
            <div className={styles.kana__all_wrap}>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>わ ・ ハ</div>
                    <div className={styles.kana__all_word__gray}>wa</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>を ・ ヒ</div>
                    <div className={styles.kana__all_word__gray}>o(wo)</div>
                </div>
                <div className={styles.kana__all_word__bg_darker}>
                    <div className={'bold'}>ん ・ フ</div>
                    <div className={styles.kana__all_word__gray}>n</div>
                </div>
            </div>
        </div>
        }
        </>
    );
}

export default Page;
