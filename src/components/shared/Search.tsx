import React from "react";
import styles from '@/styles/Header.module.scss'
import SearchIcon from "../icons/SearchIcon";

const Search = () => {
   return (
      <div className={styles.headweb__search}>
         <input type="text" />

         <div className={styles.headweb__search__icon}>
            <SearchIcon />
         </div>
      </div>
   )
}

export default Search