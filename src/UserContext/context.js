//Context 규칙 생성
import React, { useState, useContext } from "react";

//Context는 어플리케이션의 데이터 저장소 역할을 한다.
const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Nico",
    loggedIn: false,
  });

  //기존의 user값을 유지시킨 후 loggedIn만 새로운 값으로 교체
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  return (
    //이 Provider의 모든 children은 user에 대한 접근권한이 생김
    <UserContext.Provider value={{ user, fn: { logUserIn } }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
