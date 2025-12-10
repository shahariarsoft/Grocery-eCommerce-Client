import { Children, createContext } from "react";


export const AppContext = createContext(null);

const AppContextProvider = ({ Children }) => {
    const value = {};
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;