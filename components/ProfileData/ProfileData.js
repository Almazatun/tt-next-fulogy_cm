import React from 'react'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import style from './ProfileData.module.scss'

export const ProfileData = () => {
    return (
        <div className={style.container}>
            <div className={style.mail}>
                <AlternateEmailIcon style={{margin: '0 42px 0 0 ', color: '#00BFA5'}} fontSize={'large'}/>
                <span>Ivanova@mail.ru</span>
            </div>
            <div className={style.lineHorizontal}>

            </div>
            <div className={style.phone}>
                <PhoneIcon style={{margin: '0 42px 0 0 ', color: '#00BFA5'}} fontSize={'large'} />
                <span>Укажите номер телефона</span>
            </div>
        </div>
    )
}