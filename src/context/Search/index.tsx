import { createContext } from "react";

export const SearchContext = createContext({
    searchAnime: "",
    setSearchAnime: (value: string) => {}
});