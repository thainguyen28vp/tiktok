import { useContext } from "react";
import ThemeContext from "./context";
export const useHooksContext = () => {
    return useContext(ThemeContext);
}

