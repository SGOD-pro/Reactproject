import { useContext, createContext } from "react";

export const ErrorContext = createContext({
    alert: {
        successCode: 200,
        message: "this is message",
        success: true
    },
    setAlert: (successCode,message) => { },
    getAlert: () => { },
})

export const AlertProvider = ErrorContext.Provider

export function useAlert() {
    return useContext(ErrorContext)
}
