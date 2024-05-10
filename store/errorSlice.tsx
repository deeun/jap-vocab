import {createSlice} from "@reduxjs/toolkit";
import {vocabSlice} from "./vocabSlice";

const initialState = {
    isError: false,
}

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError(state, action) {
            state.isError = action.payload
        }
    }
})

export const {setError} = errorSlice.actions
