import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [logo, setLogo] = useState(null);
  const [companyName, setCompanyName] = useState("");

  return (
    <AppContext.Provider value={{ logo, setLogo, companyName, setCompanyName }}>
      {children}
    </AppContext.Provider>
  );
};
