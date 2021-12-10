import { createContext, FC, useState, useContext } from "react"
import { peterMujuni } from '../cv-data/PeterMujuni'

type CvContextType = {
    data: typeof peterMujuni
}

export const CVContext = createContext<CvContextType>({} as CvContextType);


export const CvProvider: FC = ({ children }) => {
    console.log('from context: '+peterMujuni.resume)
    const [data, setData] = useState(peterMujuni)


    return (
        <CVContext.Provider value={{ data }}>
            {children}
        </CVContext.Provider>
    )
}

export const useCV = () => useContext(CVContext);
