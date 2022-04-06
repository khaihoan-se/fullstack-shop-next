import React, { useState } from "react";
import styles from '@/styles/Header.module.scss';
import Logo from "@/components/shared/Logo";
import Search from "@/components/shared/Search";
import Link from "next/link";
import { useRouter } from 'next/router'
import Login from "@/components/shared/Login";

const menuList = [
   {
      title: 'Home',
      href: '/'
   },
   {
      title: 'Products',
      href: '/products'
   }
]

interface routerType {}

const Header = () => {
   const [ OpenLogin, setOpenLogin ] = useState(false)
   const router = useRouter()
   const isActive = (r:routerType) => {
      if( r === router.pathname ) {
         return `${styles.header__right__active}`
      } else {
         return ''
      }
   }

   return (
      <header className={styles.header}>
         <div className={`${styles.container} container`}>
            <div className={styles.header__logo}>
               <Link href={'/'}><a><Logo /></a></Link>
            </div>
            <div className={styles.header__right}>
               <Search />
               {
                  menuList.map((menu, index) => 
                     <div className={`${styles.header__right__cell} ${isActive(`${menu.href}`)}`} key={index}>
                        <Link href={`${menu.href}`}><a>{menu.title}</a></Link>
                     </div>
                  )
               }
               <div className={`${styles.header__right__cell} ${isActive('/shops')}`}>
                  <Link href={'/shops'}><a>Shops</a></Link>
               </div>
               <div className={styles.header__right__cell} onClick={() => setOpenLogin(!OpenLogin)}>
                  Login
               </div>
               {OpenLogin && <Login OpenLogin={OpenLogin} setOpenLogin={setOpenLogin} />}
            </div>
         </div>
      </header>
   )
}

export default Header