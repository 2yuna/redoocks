import { v4 as uuid } from "uuid";

export const initialState = {
  toDos: [],
  completed: [],
};

export const ADD = "add";
export const DELETE = "delete";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";

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
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, target],
      };

    default:
      return;
  }
};

export default reducer;
