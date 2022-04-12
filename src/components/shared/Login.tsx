import React from "react";
import styles from '@/styles/Login.module.scss'
import CloseIcon from '@/components/icons/CloseIcon'
import Module from "@/components/shared/Module";

interface Props {
    openLogin: boolean,
    setOpenLogin: (open: boolean) => void;
}

const Login: React.FC<Props> = ({ openLogin, setOpenLogin }) => {
    return (
        <div className={styles.login}>
           <Module>
               hello
           </Module>
        </div>
    )
}

export default Login