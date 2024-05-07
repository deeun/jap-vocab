import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {axiosInstance} from "../plugins/axios";

export interface Vocab {
    value: Array<any>,
}

export const fetchVocab = createAsyncThunk('vocab/fetch', async () => {
    console.log('fetch vocab')
    try {
        const response = await axiosInstance.get('https://jlpt-vocab-api.vercel.app/api/words')
        console.log('res!!!!', response)
        return response.data
    } catch (e) {
        console.log('error', e)
    }
})
const initialState: Vocab = {
    value: [],
}

export const vocabSlice = createSlice({
    name: 'vocab',
    initialState,
    reducers: {
        // setSideBarShow: (state, action) => {
        //     state.value = action.payload
        // },
        // setSideBarIndex: (state, action) => {
        //     state.index = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVocab.fulfilled, (state, action) => {
            console.log('action', action.payload)
            state.value = action.payload
            console.log('state', state)
            state.error = action.error
        })
    }
})

// Action creators are generated for each case reducer function
export const { } = vocabSlice.actions

export const vocabReducer = vocabSlice.reducer
