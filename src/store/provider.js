import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import ThemeContext from "./context";

const ProviderStore = ({ children }) => {
    const [data, dispatch] = useReducer(reducer, initState)
    return <>
        <ThemeContext.Provider value={[data, dispatch]}>
            {children}
        </ThemeContext.Provider>
    </>
}
export default ProviderStore