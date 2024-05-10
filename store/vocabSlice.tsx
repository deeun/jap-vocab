import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {axiosInstance, axiosPapago} from "../plugins/axios";
import axios from "axios";
import {ENG_KOR_TRANSLATE} from '@/app/api/route';
import {any} from "prop-types";
import {useDispatch} from "react-redux";
import {setError} from "./errorSlice";

// export interface Vocab {
//     randomWord: [],
//     error: {}
// }

export const fetchRandomVocab = createAsyncThunk('vocabRandom/fetch', async (data: any, {rejectWithValue: rejectWithValue}) => {
    try {
        let response
        await axiosInstance.get('https://jlpt-vocab-api.vercel.app/api/words/random')
            .then(async (res) => {
                const response = res.data;
                return response;
            })
            .then(async (res) => {
                const param = {source: 'en', target: 'ko', text: res.meaning}
                const translate = await ENG_KOR_TRANSLATE(param);
                if (translate.error) {
                    // vocabSlice.actions.setError();
                    throw new Error('TRANSLATION GOT LOST');
                } else {
                    res.translation = translate?.translatedText
                }
                response = res
            })
        return response
    } catch (e) {
        console.log('error', e);
        return rejectWithValue(e);
    }
})
export const fetchVocabByLevel = createAsyncThunk('vocabLevel/fetch', async ({level, page}) => {
    if (level !== undefined) {
        try {
            let response
            await axiosInstance.get(`https://jlpt-vocab-api.vercel.app/api/words?offset=${page}&limit=20&level=${level}`)
                .then(async (res) => {
                    return res.data;
                })
                .then(async (res) => {
                    for (const r of res.words) {
                        const param = {source: 'en', target: 'ko', text: r.meaning}
                        const translate = await ENG_KOR_TRANSLATE(param);
                        if (translate.error) {
                            dis
                        } else {
                            r.translation = translate?.translatedText;ㅇ
                        }
                    }
                    return res
                }).then((res) => {
                    response = res;
                })
            return response;
        } catch (e) {
            console.log('error', e);
        }
    }
})

// export const fetchEngKorTranslation = createAsyncThunk('translation/fetch', async( {targetText} => {
//     try {
//         const param = {source: 'en', target: 'ko', text: res.meaning(targetText)};
//         const translate = await ENG_KOR_TRANSLATE(param);
//         let transResponse
//         // if (translate.error) {
//         //     translate?.translatedText
//         // }
//     } catch (e) {
//         console.log('error', e);
//     }
// })

const initialState = {
    randomWord: {},
    levelWord: [],
    levelWordTotal: 1,
    loading: false,
    error: {},
    isError: false,
}

export const vocabSlice = createSlice({
    name: 'vocab',
    initialState,
    reducers: {
        setError(state) {
            state.isError = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomVocab.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchRandomVocab.fulfilled, (state, action) => {
                state.randomWord = action.payload
                state.loading = false
            })
            .addCase(fetchRandomVocab.rejected, (state, action) => {
                console.log('??????')
                state.error = action.error
                state.isError = true
            })
            .addCase(fetchVocabByLevel.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchVocabByLevel.fulfilled, (state, action) => {
                state.levelWord = action.payload.words
                state.levelWordTotal = action.payload.total
                state.loading = false
            })
    }
})

// Action creators are generated for each case reducer function
// export const {setError} = vocabSlice.actions

export const vocabReducer = vocabSlice.reducer
