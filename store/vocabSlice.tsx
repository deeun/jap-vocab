import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {axiosInstance, axiosPapago} from "../plugins/axios";
import axios from "axios";
import { POST } from '@/app/api/route';

// export interface Vocab {
//     randomWord: [],
//     error: {}
// }

export const fetchRandomVocab = createAsyncThunk('vocab/fetch', async () => {
    try {
        let response
        await axiosInstance.get('https://jlpt-vocab-api.vercel.app/api/words/random')
            .then(async (res) => {
                response = res.data;
                const data = { source: 'en', target: 'ko', text: 'hungry'}
              
                POST(data)
                // const res2 = await fetch('/api/translate')
                // console.log('res2', res2)
    
                return response.data;
            })
    } catch (e) {
        console.log('error', e)
    }
})
const fetchTranslateEng = createAsyncThunk('vocab/translate', async(text: string) => {
    console.log('tt', text)
    const param = { source: 'en', target: 'ko', text: text}
    console.log(param, param)
    try {
        const response = await axiosPapago.post('', {body: param})
        console.log(response, 'papago')
    } catch (e) {
        console.log('PAPAGO ERROR ::', e)
    }
})

const initialState = {
    randomWord: {},
    loading: false,
    preLoading: true,
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
                state.preLoading = true
            })
            .addCase(fetchRandomVocab.fulfilled, (state, action) => {
                state.randomWord = action.payload
                state.preLoading = false
                state.loading = false
            })
            .addCase(fetchRandomVocab.rejected, (state, action) => {
                state.error = action.error
            })
    }
})

// Action creators are generated for each case reducer function
// export const { randomWord } = vocabSlice.actions

export const vocabReducer = vocabSlice.reducer
