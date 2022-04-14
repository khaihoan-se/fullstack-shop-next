import React, { useState } from "react";
import styles from '@/styles/Login.module.scss'
import Module from "@/components/shared/Module";
import Button from "@/components/shared/Button";
import valid from "@/utils/valid";

interface RegisterProps {
    openRegister: boolean,
    setOpenRegister: (open: boolean) => void,
    titleLogin?: string,
}
const titleLogin = 'Register in to Akame'

const Register = (props: RegisterProps) => {
    const initialState = { name: '', email: '', password: '', cf_password: '' }
    const [ userData, setUserData ] = useState(initialState)

    const { name, email, password, cf_password } = userData
    const handleChangeInput = (e: any) => {
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const errMsg = valid( name, email, password, cf_password )

        if(errMsg) console.log(errMsg)
    }

    return (
        <>
            <Module openLogin={props.openRegister} setOpenLogin={props.setOpenRegister} title={titleLogin}>
                <form className={styles.login}>
                    <div className={styles.login__item}>
                        <div className={styles.login__item__label}>Email address or phone number</div>
                        <div className={styles.login__item__input}>
                            <input type="text" name="name" value={name} onChange={handleChangeInput} />
                        </div>
                    </div>
                    <div className={styles.login__item}>
                        <div className={styles.login__item__label}>Password</div>
                        <div className={styles.login__item__input}>
                            <input type="text" name="email" value={email} onChange={handleChangeInput} />
                        </div>
                    </div>
                    <div className={styles.login__item}>
                        <div className={styles.login__item__label}>Email address or phone number</div>
                        <div className={styles.login__item__input}>
                            <input type="text" name="password" value={password} onChange={handleChangeInput} />
                        </div>
                    </div>
                    <div className={styles.login__item}>
                        <div className={styles.login__item__label}>Password</div>
                        <div className={styles.login__item__input}>
                            <input type="text" name="cf_password" value={cf_password} onChange={handleChangeInput} />
                        </div>
                    </div>
                    <div className={styles.login__item}>
                        <Button type='Login' onClick={handleSubmit} />
                        <Button type='Register' />
                    </div>
                </form>
            </Module>
        </>
    )
}

export default Register