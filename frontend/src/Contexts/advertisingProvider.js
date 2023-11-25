import { useState } from "react";
import AdvertisingContext from "./advertisingContext";


const AdvertisingProvider = (props) => {
  const [advertisingType, setAdvertisingType] = useState([]);


  return (
    <AdvertisingContext.Provider value={{ advertisingType, setAdvertisingType }}>
      {props.children}
    </AdvertisingContext.Provider>
  );
};

export default AdvertisingProvider;
