import React from "react";
import { useRouter } from 'next/router'
import styles from '@/styles/Header.module.scss'
import Link from "next/link";
import { MENU_LIST_HEADER } from '@/constants'
import Login from '@/components/features/login/Login'
import Register from "@/components/features/register/Register";
import useToggle from "@/hooks/useToggle";


const Header = () => {
   const router = useRouter()
   const [ openLogin, setOpenLogin ] = useToggle()
   const [ openRegister, setOpenRegister ] = useToggle();

   const handleClick = () => {
       setOpenRegister(true);
       setOpenLogin(!openLogin);
   }


   const isActive = (e:any) => {
      if(e === router.pathname) {
         return `${styles.header__nav__active}`
      } else {
         return ''
      }
   }

   return (
      <header className={styles.header}>
         <div className={`${styles.header__nav} container`}>
            <Link href="/">
               <a className={styles.header__nav__logo}>KhaiHoan</a>
            </Link>

            <div className={styles.header__nav__menu}>
               <div className={`${styles.header__nav__list} grid`}>
                  {
                     MENU_LIST_HEADER.map((item, index) =>
                        <div className={styles.header__nav__item} key={index}>
                           <Link href={`${item.herf}`}>
                              <a className={`${styles.header__nav__link} ${isActive(`${item.herf}`)}`}>{item.title}</a>
                           </Link>
                        </div>
                     )
                  }
                  <div className={styles.header__nav__item}>
                     <Link href={'/shops'}>
                        <a className={`${styles.header__nav__link} ${isActive('/shops')}`}>Shops</a>
                     </Link>
                  </div>
                  <div className={styles.header__nav__item} onClick={() => setOpenLogin(!openLogin)}>
                     <div className={styles.header__nav__link}>Login</div>
                  </div>
                  {openLogin ? <Login openLogin={openLogin} setOpenLogin={setOpenLogin} handleClick={handleClick} /> : <></>}
                  {openRegister && <Register openRegister={openRegister} setOpenRegister={setOpenRegister} />}
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header