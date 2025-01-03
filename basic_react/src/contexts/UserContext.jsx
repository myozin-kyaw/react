import { createContext, useReducer, useState } from "react";
const UserContext = createContext();

export default function UserProvider({ children }) {
  // const [user, setUser] = useState("Guest");

  const [user, dispatch] = useReducer(userReducer, "Guest");

  function userReducer(state, action) {
    switch (action.type) {
      case "login":
        return action.payload;
      case "logout":
        return "Guest";
      default:
        return state;
    }
  }

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
