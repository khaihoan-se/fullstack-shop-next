import React from "react";
import styles from '@/styles/Login.module.scss'
import Module from "@/components/shared/Module";
import Button from "@/components/shared/Button";

interface LoginProps {
    openLogin: boolean,
    setOpenLogin: (open: boolean) => void,
    handleClick: () => void,
    titleLogin?: string,
}
const titleLogin = 'Log in to Akame'

const Login = (props: LoginProps) => {
    const { openLogin, setOpenLogin, handleClick } = props
   
    return (
        <>
            <Module openLogin={openLogin} setOpenLogin={setOpenLogin} title={titleLogin}>
                <div className={styles.login}>
                    <div className={styles.login__item}>
                        <div className={styles.login__item__label}>Email address or phone number</div>
                        <div className={styles.login__item__input}>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.login__item}>
                        <div className={styles.login__item__label}>Password</div>
                        <div className={styles.login__item__input}>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.login__item}>
                        <Button type='Login' />
                        <Button type='Register' onClick={handleClick} />
                    </div>
                </div>
            </Module>
        </>
    )
}

export default Login