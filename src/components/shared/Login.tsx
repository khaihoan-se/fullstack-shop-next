import React from "react";
import styles from '@/styles/Login.module.scss'
import CloseIcon from '@/components/icons/CloseIcon'

interface Props {
    openLogin: boolean,
    setOpenLogin: (open: boolean) => void;
}

const Login: React.FC<Props> = ({ openLogin, setOpenLogin }) => {
    return (
        <div className={styles.login}>
            <div className={styles.login__main}>
                <div className={styles.login__main__close} onClick={() => setOpenLogin(!openLogin)}>
                    <CloseIcon />
                </div>
                <div className={styles.login__form}>
                    Login
                </div>
            </div>
        </div>
    )
}

export default Login