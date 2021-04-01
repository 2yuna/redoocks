import { v4 as uuid } from "uuid";
import { ADD, COMPLETE, DELETE, UNCOMPLETE } from "./actions";

export const initialState = {
  toDos: [],
  completed: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      /**
       * anti mutaion
       * 배열을 변경하는 것이 아닌, 새롭게 대체하는 것.
       * 기존 배열에 추가 및 삭제하는 것은 지양해야함
       */
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }],
      };
    case DELETE:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    case COMPLETE:
      console.log("COM");
      const completedItem = state.toDos.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, { ...completedItem }],
      };
    case UNCOMPLETE:
      console.log("UNCOM");
      const uncompletedItem = state.completed.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        toDos: [...state.toDos, { ...uncompletedItem }],
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
      };
    default:
      return;
  }
};

export default reducer;
