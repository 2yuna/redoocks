//Context 규칙 생성
import React from "react";

//Context는 어플리케이션의 데이터 저장소 역할을 한다.
export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => (
  //이 Provider의 모든 children은 user에 대한 접근권한이 생김
  <UserContext.Provider value={{ name: "Nicolas" }}>
    {children}
  </UserContext.Provider>
);

export default UserContextProvider;
