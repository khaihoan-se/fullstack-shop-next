import React from "react";
import { SearchMain, SearchStyle } from "@/styles/SearchStyles";

interface SearchProps {}
const Search: React.FC<SearchProps> = () => {
    return (
        <SearchStyle>
            <SearchMain>
                <input type="text" />
            </SearchMain>
        </SearchStyle>
    )
}

export default Search