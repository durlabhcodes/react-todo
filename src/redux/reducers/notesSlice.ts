import {createSlice} from "@reduxjs/toolkit";

export interface NoteState {
    notes: string[]
}

const initialState: NoteState = {
    notes:[]
}


export const noteSlice = createSlice({
    name: "nameSlice",
    initialState,
    reducers: {
        createNote: (state, action) => {
            state.notes.push(action.payload)
            return state;
        }
    }
});

export const {createNote} = noteSlice.actions

export default noteSlice.reducer