import { createContext, useState } from "react";

const advertisingContext = createContext();

const AdvertisingProvider = (props) => {
  const [advertisingType, setAdvertisingType] = useState("");

  return (
    <advertisingContext.Provider value={{ advertisingType, setAdvertisingType }}>
      {props.children}
    </advertisingContext.Provider>
  );
};

export default AdvertisingProvider;
