import { createContext } from "react";


 export const ContextNews = createContext(null)

const GoogleAuth = ({ children }) => {

    const name = 'raihan hossen';
    
    const data = {
        name,
    }

    return (
        <ContextNews.Provider value={data}>
            {children}
        </ContextNews.Provider>
    );
};

export default GoogleAuth;