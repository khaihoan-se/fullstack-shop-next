import React from "react";
import styles from '@/styles/Module.module.scss'
import CloseIcon from '@/components/icons/CloseIcon'

const Module: React.FC = ({children}) => {
    return (
        <div className={styles.module}>
            <div className={styles.module__close}>
                <CloseIcon />
            </div>
            <div className={styles.module__main}>
                {
                    children
                }
            </div>
        </div>
    )
}

export default Module