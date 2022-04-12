import React from "react";
import styles from '@/styles/Module.module.scss'
import CloseIcon from '@/components/icons/CloseIcon'

interface Props {
    openLogin: boolean,
    setOpenLogin: (open: boolean) => void;
    title: string
}
const Module: React.FC<Props> = ({ openLogin, setOpenLogin, title, children}) => {
    return (
        <div className={styles.module}>
            <div className={styles.module__main}>
                <div className={styles.module__header}>
                    <div className={styles.module__header__title}>{title}</div>
                    <div className={styles.module__header__close} onClick={() => setOpenLogin(!openLogin)}>
                        <CloseIcon />
                    </div>
                </div>
                <div className={styles.module__body}>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}

export default Module