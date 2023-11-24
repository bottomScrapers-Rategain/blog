import { createContext, useState } from "react";

const userContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState("");

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserProvider;
