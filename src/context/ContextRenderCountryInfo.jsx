import { createContext, useState } from "react";

export const ContextRenderCountryInfo = createContext();

export const ProviderRenderCountryInfo = ({ children }) => {


    const [render, setRender] = useState(false);
    const [country, setCountry] = useState({});

    return (
        <ContextRenderCountryInfo.Provider value={{
            render,
            setRender,
            country,
            setCountry
        }}>
            {children}
        </ContextRenderCountryInfo.Provider>
    )
}