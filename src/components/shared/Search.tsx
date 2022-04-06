import React from 'react';
import styles from '@/styles/Search.module.scss'
import SearchIcon from '@/components/icons/SearchIcon';

const Search = () => {
   return (
      <div className={styles.search}>
         <div className={styles.search__main}>
            <input type="text" />
            <div className={styles.search__main__searchicon}>
               <SearchIcon />
            </div>
         </div>
      </div>
   );
}

export default Search;
