import React, { useState, useReducer } from "react";
import { v4 as uuid } from "uuid";

const initialState = {
  toDos: [],
};

const ADD = "add";
const DELETE = "delete";
const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      /**
       * anti mutaion
       * 배열을 변경하는 것이 아닌, 새롭게 대체하는 것.
       * 기존 배열에 추가 및 삭제하는 것은 지양해야함
       */
      return { toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
    case DELETE:
      return {
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>Add To Dos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          value={newToDo}
          onChange={onChange}
        />
      </form>

      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button
              onClick={() => dispatch({ type: DELETE, payload: toDo.id })}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
