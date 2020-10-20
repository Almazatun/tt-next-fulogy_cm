import React from 'react'
import style from './Layout.module.scss'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Avatar from "@material-ui/core/Avatar";
import avatar from './image3.png'
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';


export const Layout = ({editHandle ,editMode ,children}) => {


    return (
        <div className={style.container}>
            <div className={style.source_image}>
            </div>
            <div className={style.top}>
                <div className={style.top_bell}>
                    <NotificationsNoneIcon fontSize={'large'} style={{color: '#FFF'}}/>
                </div>
                <div className={style.top_avatar}>
                    <Avatar alt="Person" src={avatar}/>
                </div>
                <div className={style.top_title}>
                    <span>Иванова А.</span>
                </div>
            </div>
            <div className={style.info}>
                <h3>Личный профиль</h3>
                <p>{`Главная/Личный профиль`}</p>
            </div>
            <div className={style.profile_info}>
                <Avatar alt="Person" style={{width: '80px', height: '80px', margin: '24px 42px 24px 34px'}}
                        src={avatar}/>
                <span>Иванова Анна Михайловна</span>
                <div className={style.profile_info_icon} onClick={editHandle}>
                    <span>{!editMode ? 'РЕДАКТИРОВАТЬ' : 'Закрыть'}</span>
                    {!editMode ?  <EditIcon style={{color: '#FFFFFF', fontSize: '18px'}}/> :
                    <CloseIcon style={{color: '#FFFFFF', fontSize: '18px'}} />
                    }
                </div>

            </div>
            <main className={style.main}>
                {children}
            </main>
        </div>
    )
}