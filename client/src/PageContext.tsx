import { createContext, useContext } from "react";

export const PageContext = createContext<any>(null);

export const usePage = () => useContext(PageContext);