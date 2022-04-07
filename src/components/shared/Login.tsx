import React from "react";
import styles from '@/styles/Login.module.scss';
import CloseIcon from '@/components/icons/CloseIcon'
import Button from "./Button";

interface LoginComponents {
    OpenLogin: boolean,
    setOpenLogin: (open: boolean) => void;
}

const Login: React.FC<LoginComponents> = ({ OpenLogin, setOpenLogin }) => {
    return (
        <div className={styles.login}>
            <div className={styles.login__main}>
                <div className={styles.login__header} onClick={() => setOpenLogin(!OpenLogin)}>
                    <CloseIcon className={styles.login__header__close} />
                </div>
                <div className={styles.login__form}>
                    <div className={styles.login__form__title}>
                        <h2>Log in to Akame</h2>
                    </div>
                    <div className={styles.login__form__main}>
                        <div className={styles.login__form__input}>
                            <label htmlFor="">TK</label>
                            <input type="text" />
                        </div>
                        <div className={styles.login__form__input}>
                            <label htmlFor="">mk</label>
                            <input type="text" />
                        </div>
                        <Button title="Logina" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
