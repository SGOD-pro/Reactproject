import { createContext, useContext } from "react";

export const DataContext = createContext({
    empTableData: [{    
        _id: "",
        first_Name: "",
        middle_Name: "",
        last_Name: "",
        empId: "",
        gender: "",
        date_of_joining: "",
        department: "",
        designation: ""
    }],
    setEmpTableData: () => { }
})

export const DataContextProvider = DataContext.Provider

export function useEmpData() {
    return useContext(DataContext)
}