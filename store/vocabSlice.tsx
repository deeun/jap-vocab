import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {axiosInstance, axiosPapago} from "../plugins/axios";
import axios from "axios";
import {ENG_KOR_TRANSLATE} from '@/app/api/route';
import {any, string} from "prop-types";
import {useDispatch} from "react-redux";
import {setError} from "./errorSlice";

// export interface Vocab {
//     randomWord: [],
//     error: {}
// }

export const fetchRandomVocab = createAsyncThunk('vocabRandom/fetch', async (arg, {rejectWithValue: rejectWithValue}) => {
    try {
        let response
        await axiosInstance.get('https://jlpt-vocab-api.vercel.app/api/words/random')
            .then(async (res) => {
                if (res.status === 200) {
                    const response = res.data;
                    return response;
                } else {
                    throw new Error('BLOCK PAGE');
                }
            })
            .then(async (res) => {
                const param = {source: 'en', target: 'ko', text: res.meaning}
                arg.onSuccess();
                response = res
            })
        return response
    } catch (e) {
        args.onFail();
        return rejectWithValue(e);
    }
})
export const fetchVocabByLevel = createAsyncThunk('vocabLevel/fetch', async ({level, page}, {rejectWithValue: rejectWithValue}) => {
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
                            throw new Error('TRANSLATION ERROR');
                        } else {
                            r.translation = translate?.translatedText;
                        }
                    }
                    return res
                }).then((res) => {
                    response = res;
                })
            return response;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
})

export const fetchEngKorTranslation = createAsyncThunk('translation/fetch', async({ resBeforeTranslation: {} }, {rejectWithValue: rejectWithValue}) => {
    console.log('lll')
    try {
        const param = {source: 'en', target: 'ko', text: resBeforeTranslation.meaning};
        console.log('param', param)

        const translate = await ENG_KOR_TRANSLATE(param);
        // let transResponse
        if (translate.error) {
            throw new Error('TRANSLATION ERROR');
        } else {
            resBeforeTranslation.translation = translate?.translatedText
        }
        return resBeforeTranslation;
    } catch (e) {
        console.log('error', e);
        return rejectWithValue(e);
    }
})

const initialState = {
    randomWord: {},
    levelWord: [],
    levelWordTotal: 1,
    loading: false,
    isError: { state: false, content: '' }
}

export const vocabSlice = createSlice({
    name: 'vocab',
    initialState,
    reducers: {
        // setError(state) {
        //     state.isError = true
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomVocab.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchRandomVocab.fulfilled, (state, action) => {
                state.randomWord = action.payload
                state.loading = false
                state.isError.state = false
            })
            .addCase(fetchRandomVocab.rejected, (state, action) => {
                state.loading = false
                state.isError.state = true
                state.isError.content = action.payload.message
            })
            .addCase(fetchVocabByLevel.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchVocabByLevel.fulfilled, (state, action) => {
                state.levelWord = action.payload.words
                state.levelWordTotal = action.payload.total
                state.loading = false
            })
            .addCase(fetchEngKorTranslation.pending, (state, action) => {
                console.log('pending')
            })
            .addCase(fetchEngKorTranslation.rejected, (state, action) => {
                console.log('rejected')
            })
            .addCase(fetchEngKorTranslation.fulfilled, (state, action) => {
                console.log('fulfilled')
            })
    }
})

// Action creators are generated for each case reducer function
// export const {setError} = vocabSlice.actions

export const vocabReducer = vocabSlice.reducer
