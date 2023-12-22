import {createSlice} from "@reduxjs/toolkit";
interface Todo {
    title: string,
    recurring: boolean,
    frequency?: string
}

interface ToDoState {
    todos: Todo[];
}
const initialState: ToDoState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        createTodo: (state, action:{payload:Todo, type:string}) => {
            state.todos.push(action.payload)
            return state;
        }
    }
})

export const {createTodo} = todoSlice.actions;
export default todoSlice.reducer;