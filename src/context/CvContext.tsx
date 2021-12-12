import React, { createContext, useContext } from "react"
import { peterMujuni } from '../cv-data/PeterMujuni'

type CvContextType = {
    children: React.ReactNode
}

export const CVContext = createContext(peterMujuni);


export const CvProvider = ({ children }: CvContextType) => {
    
    return (
        <CVContext.Provider value={ peterMujuni }>
            {children}
        </CVContext.Provider>
    )
}

export const useCV = () => useContext(CVContext);
