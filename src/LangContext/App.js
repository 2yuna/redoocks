import React from "react";
import Lang from "./context";
import Screen from "./Screen";
import translations from "./translations";

function App() {
  return (
    // App에 포함된 모든 것들은 ContextProvider 내부에 두어야함
    // Screen은 Provider의 children이 됨
    <Lang defaultLang="en" translations={translations}>
      <Screen />
    </Lang>
  );
}

export default App;
