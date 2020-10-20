import React, {useState} from 'react';
import {Button} from "../common/Button/Button";
import style from './EditProfile.module.scss'
import TextField from "@material-ui/core/TextField";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from '@material-ui/icons/Phone';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 600,
        height: 318,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '10px',
        border: 'none'
    },
}));

export const EditProfile = () => {

    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [modalStyle] = useState({
        top: `28%`,
        left: `30%`
    });
    const classes = useStyles();

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    ///////////////////////////////////////////////////////////////////////////
    const onSuccessHandle = () => {
        setSuccess(true)
        onCloseHandle();
    }

    const onSuccessClose = () => {
        setSuccess(false)
    }

    const onOpenHandle = () => {
        setOpen(true);
    };

    function onCloseHandle() {
        setOpen(false);
    };

    const body = (
        <div className={style.modal_save_data}>
            <CloseIcon onClick={onCloseHandle} className={style.btn_close}/>
            <span>Сохранить изменения?</span>
            <div style={{margin: '32px 0 28px 0'}}>
                <Button onClick={onSuccessHandle} title={'Cохранить'} backgroundColor={'#00BFA5'} fontColor={'#FFF'}
                        width={'202px'}/>
            </div>
            <div>
                <Button onClick={onCloseHandle} title={'Не сохранять'} backgroundColor={'#FFF'} fontColor={'#00BFA5'}
                        width={'202px'}/>
            </div>
        </div>
    );
    const bodySuccess = (
        <div className={style.modal_success}>
            <span>Данные успешно сохранены</span>
            <div className={style.modal_success_box}>
                <Button className={style.modal_success_btn} onClick={onSuccessClose} title={'Хорошо'} backgroundColor={'#00BFA5'} fontColor={'#FFF'}
                        width={'202px'}/>
            </div>
        </div>
    );


    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.name}>
                    <AssignmentIndIcon className={style.name_icon} fontSize={'large'} />
                    <TextField
                        id="outlined-full-width"
                        label="Фамилия и имя"
                        className={style.input}
                        placeholder="Укажите ваши фамилию и имя"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
                <div className={style.email}>
                    <AlternateEmailIcon className={style.email_icon} fontSize={'large'}/>
                    <TextField
                        id="outlined-full-width"
                        label="E-mail"
                        className={style.input}
                        placeholder="Ivanova@mail.ru"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
                <div className={style.phoneNumber}>
                    <PhoneIcon className={style.phoneNumber_icon} fontSize={'large'}/>
                    <TextField
                        id="outlined-full-width"
                        label="Номер телефона"
                        className={style.input}
                        placeholder="Укажите номер телефона"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
            </div>
            <div className={style.boxBtn}>
                <Button onClick={onOpenHandle} title={'Сохранить изменения'} fontColor={'#FFF'}
                        backgroundColor={'#01BDA7'}/>
            </div>
            {/*///////////////////////////////////////////////////////////////////////////////////////*/}
            <Modal
                open={open}
                onClose={() => {
                }}

            >
                {body}
            </Modal>
            {/*///////////////////////////////////////////////////////////////////////////////////////*/}
            <Modal
                open={success}
                onClose={onSuccessClose}

            >
                {bodySuccess}
            </Modal>
        </div>
    )
}