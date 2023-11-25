import { useState } from "react";
import UserContext from "./userContext";


const UserProvider = (props) => {
  const [uid, setUid] = useState("");

  return (
    <UserContext.Provider value={{ uid, setUid }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
