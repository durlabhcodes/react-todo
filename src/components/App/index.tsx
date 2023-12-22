import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import React, {useState} from "react";
import "./App.css";
import {createTodo} from "../../redux/reducers/todoSlice";

function App() {
    const [todo, setTodo] = useState({
        title:"",
        recurring: false
    });

    const todos = useAppSelector((state) => state.todoReducer.todos)

    const dispatch = useAppDispatch()
    return (
        <div className="App">
            <div className="app__title">Let's Get Productive</div>
            <div className="note-input">
                <input type="text" name="note-text" id="note-text"
                       placeholder="Let's schedule a task"
                       onChange={(e) => setTodo({
                           ...todo, title: e.target.value
                       })}/>
                <button className="add-task-btn" onClick={() => dispatch(createTodo(todo))}>Add Task</button>
            </div>
            <div className="todo-options">
                <input type="checkbox" name="isRecurring" className="isRecurring"/>
                <label htmlFor="isRecurring">Recurring?</label>
            </div>
            <div className="todo-list">
                {
                    todos.map(todo => <ol>
                        <li>{todo.title}</li>
                    </ol>)
                }
            </div>
        </div>
    );
}

export default App;