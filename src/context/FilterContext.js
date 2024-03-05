import { createContext, useContext } from "react";

export const DataFilter = createContext({
    removeSpecialCharacters: (jsonData) => {
        const cleanedData = {};
        for (const key in jsonData) {
            if (Object.prototype.hasOwnProperty.call(jsonData, key)) {
                const value = jsonData[key];
                if (typeof value === "string") {
                    cleanedData[key] = value.replace(/[^\w\s]/g, "");
                } else if (typeof value === "object") {
                    cleanedData[key] = new RemoveSpecialCharacters(value).removeSpecialCharacters();
                } else {
                    cleanedData[key] = value;
                }
            }
        }
        return cleanedData;
    }
})

export const DataFilterProvider = DataFilter.Provider

export const useDataFilter = () => { return useContext(DataFilter) }