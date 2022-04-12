import React from "react";
import styles from '@/styles/Login.module.scss'
import Module from "@/components/shared/Module";

interface Props {
    openLogin: boolean,
    setOpenLogin: (open: boolean) => void,
    titleLogin: string
}
const titleLogin = 'Log in to Akame'

const Login: React.FC<Props> = ({ openLogin, setOpenLogin }) => {
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
                        Submit
                    </div>
                </div>
            </Module>
        </>
    )
}

export default Login