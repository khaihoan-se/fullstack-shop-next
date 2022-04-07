import React from "react";
import { useRouter } from 'next/router'
import styles from '@/styles/Header.module.scss';
import Logo from "@/components/shared/Logo";
import Search from "@/components/shared/Search";
import { MENU_LIST_HEADER } from '@/constants';
import Avatar from "../shared/Avatar";
import Link from "next/link";

interface HeaderTypes {}


const Header: React.FC<HeaderTypes> = () => {
   const router = useRouter();
   const isActive = (e:string) => {
      if(e === router.pathname) {
         return `${styles.active}`
      } else {
         return ''
      }
   }
   return (
      <header className={styles.headweb}>
         <div className={`${styles.headweb__container} container`}>
            {/* Logo */}
            <div className={styles.headweb__logo}>
               <Link href={'/'}><a><Logo /></a></Link>
            </div>
            {/* Search */}
            <Search />
            {/* Tools */}
            <div className={styles.headweb__tools}>
               {
                  MENU_LIST_HEADER.map((menu, index) => 
                     <div key={index} className={`${styles.headweb__tools__cell} ${isActive(`${menu.herf}`)}`}>
                        <Link href={`${menu.herf}`}><a>{menu.title}</a></Link>
                     </div>
                  )
               }
               <div className={`${styles.headweb__tools__cell} ${isActive('/shops')}`}>
                  <Link href={'/shops'}><a>Shops</a></Link>
               </div>
               <div className={styles.headweb__tools__cell}>Login</div>
            </div>
         </div>
      </header>
   )
}

export default Header