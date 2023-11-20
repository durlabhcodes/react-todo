import React from 'react';
import './App.css';
import {decrease, increase} from "./redux/reducers/countSlice";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {createNote} from "./redux/reducers/notesSlice";

function App() {
  const counter = useAppSelector((state) => state.counter.value)
  const notes = useAppSelector((state) => state.notesReducer.notes)

  const dispatch = useAppDispatch()
  return (
    <div className="App">
        <div>
          <button onClick={() => dispatch(increase())}>
            Increase Value
          </button>
          <button onClick={() => dispatch(decrease())}>
            Decrease Value
          </button>
          <div className="counter">{counter}
          </div>
        </div>

        <div className="notes">
            <button onClick={() => dispatch(createNote("A new Note : "+counter))}>
                Add Note
            </button>
            <div>
                <ul>
                    {notes.map(note => <li>{note}</li>)}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default App;
