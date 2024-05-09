import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {axiosInstance, axiosPapago} from "../plugins/axios";
import axios from "axios";
import {ENG_KOR_TRANSLATE, POST} from '@/app/api/route';

// export interface Vocab {
//     randomWord: [],
//     error: {}
// }

export const fetchRandomVocab = createAsyncThunk('vocabRandom/fetch', async () => {
    try {
        let response
        await axiosInstance.get('https://jlpt-vocab-api.vercel.app/api/words/random')
            .then(async (res) => {
                const response = res.data;
                return response;
            })
            .then(async (res) => {
                const param = { source: 'en', target: 'ko', text: res.meaning }
                const translate = await ENG_KOR_TRANSLATE(param);
                res.translation = translate?.translatedText
                response = res
            })
        return response
    } catch (e) {
        console.log('error', e)
    }
})

export const fetchVocabByLevel = createAsyncThunk('vocabLevel/fetch', async ({level, page}) => {
    if (level !== undefined) {
    try {
        let response
        console.log({level, page})
        await axiosInstance.get(`https://jlpt-vocab-api.vercel.app/api/words?offset=${page}&limit=20&level=${level}`)
            .then(async (res) => {
                return res.data;
            })
            .then(async (res) => {
                for (const r of res.words) {
                    const param = { source: 'en', target: 'ko', text: r.meaning }
                    const translate = await ENG_KOR_TRANSLATE(param);
                    r.translation = translate?.translatedText
                }
                return res
            }).then((res) => {
                response = res
            })
        return response
    } catch (e) {
        console.log('error', e)
    }
}
})

const initialState = {
    randomWord: {},
    levelWord: [],
    levelWordTotal: 1,
    loading: false,
    error: {}
}

export const vocabSlice = createSlice({
    name: 'vocab',
    initialState,
    reducers: {},
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
                state.error = action.error
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
// export const { randomWord } = vocabSlice.actions

export const vocabReducer = vocabSlice.reducer
