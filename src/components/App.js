import React from "react";
import Add from "./Add";
import { useState } from "../context";
import List from "./List";
import ToDo from "./ToDo";

function App() {
  const { toDos, completed } = useState();
  return (
    <>
      <Add />
      <List name={"To Do"}>
        {toDos.length > 0 &&
          toDos.map((toDo) => (
            <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
          ))}
      </List>
      <List name={completed.length !== 0 ? "To Dos" : ""}>
        {completed.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
}

export default App;
