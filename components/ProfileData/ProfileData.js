import React from 'react'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import style from './ProfileData.module.scss'

export const ProfileData = () => {
    return (
        <div className={style.container}>
            <div className={style.mail}>
                <AlternateEmailIcon className={style.mail_icon}  fontSize={'large'}/>
                <span>Ivanova@mail.ru</span>
            </div>
            <div className={style.lineHorizontal}>

            </div>
            <div className={style.phone}>
                <PhoneIcon className={style.phone_icon}  fontSize={'large'} />
                <span>Укажите номер телефона</span>
            </div>
        </div>
    )
}