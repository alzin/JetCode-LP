"use client"
import { createContext, useState } from "react"

export const DataContext = createContext()



const getData = async () => {
    const res = await fetch("api")
   
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export const DataProvider = ({ children }) => {
    const [data, setData] = useState([])


    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider >
    )

}

