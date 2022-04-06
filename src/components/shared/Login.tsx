import React from "react";
import styles from '@/styles/Login.module.scss';
import CloseIcon from '@/components/icons/CloseIcon'

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
            </div>
        </div>
    )
}

export default Login