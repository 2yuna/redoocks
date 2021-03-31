import React from "react";
import UserContextProvider from "./context";
import Screen from "./Screen";

function App() {
  return (
    // App에 포함된 모든 것들은 ContextProvider 내부에 두어야함
    // Screen은 Provider의 children이 됨
    <UserContextProvider>
      <Screen />
    </UserContextProvider>
  );
}

export default App;
