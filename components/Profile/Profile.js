import React from 'react'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import style from './Profile.module.scss'

export const Profile = ({email, phoneNumber}) => {
    return (
        <div className={style.container}>
            <div className={style.mail}>
                <AlternateEmailIcon className={style.mail_icon}  fontSize={'large'}/>
                <span>{email && email}</span>
            </div>
            <div className={style.lineHorizontal}>

            </div>
            <div className={style.phone}>
                <PhoneIcon className={style.phone_icon}  fontSize={'large'} />
                <span>{phoneNumber && phoneNumber}</span>
            </div>
        </div>
    )
}