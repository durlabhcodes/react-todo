import {createSlice} from "@reduxjs/toolkit";

export interface CountState {
    value: number
}

const initialState:CountState = {
    value:0
}
export const countSlice= createSlice({
    name : "hello",
    initialState,
    reducers: {
        increase: (state) => {state.value+=1},
        decrease: (state) => {state.value-=1}
    }
});

export const {increase, decrease} = countSlice.actions
export default countSlice.reducer