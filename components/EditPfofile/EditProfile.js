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
import {useFormik} from "formik";
import {validate} from "../../utils/validate/validate";
import {LocalData} from "../../utils/localStorage/localStorage";


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



export const EditProfile = ({call}) => {

    const [title, setTitle] = useState('')
    const [email,setEmail] = useState('')
    const [phone, setPhone] = useState('')


    const saveLocalStorage = () => {
        let data = {title,email,phone}
        LocalData.setUser(data)
    }
    ///////////////////////////////////////////////////////////////////////////
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const classes = useStyles();

    ///////////////////////////////////////////////////////////////////////////
    const onSuccessHandle = () => {
        saveLocalStorage();
        call(title,email,phone)
        setSuccess(true)
        onCloseHandle();
    }

    function onSuccessClose () {
        setSuccess(false)
    }

    const onOpenHandle = () => {
        setOpen(true);
    };

    function onCloseHandle() {
        setOpen(false);
    };

    ///////////////////////////////////////////////////////////////////////////
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
        },
        validate,
        onSubmit: values => {
            let {name, email, phoneNumber  } = values
            setTitle(name)
            setEmail(email)
            setPhone(phoneNumber)
    }})
    ///////////////////////////////////////////////////////////////////////////

    const body = (
        <div className={style.modal_save_data}>
            <CloseIcon onClick={onCloseHandle} className={style.btn_close}/>
            <span>Сохранить изменения?</span>
            <div style={{margin: '32px 0 28px 0'}}>
                <Button  onClick={onSuccessHandle} title={'Cохранить'} backgroundColor={'#00BFA5'} fontColor={'#FFF'}
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
            <form onSubmit={formik.handleSubmit}>
                <div className={style.box}>
                    <div className={style.name}>
                        <AssignmentIndIcon className={style.name_icon} fontSize={'large'}/>
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
                            {...formik.getFieldProps('name')}
                            error={formik.errors.name ? true : ''}
                            helperText={formik.errors.name ? formik.errors.name : ''}
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
                            {...formik.getFieldProps('email')}
                            error={formik.errors.email  ? true : ''}
                            helperText={formik.errors.email ? formik.errors.email : ''}
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
                            {...formik.getFieldProps('phoneNumber')}
                            error={formik.errors.phoneNumber ? true : ''}
                            helperText={formik.errors.phoneNumber ? formik.errors.phoneNumber : ''}
                        />
                    </div>
                </div>
                <div className={style.boxBtn}>
                    <Button type={'submit'} onClick={formik.errors.email || formik.errors.phoneNumber || formik.errors.name ? '' : onOpenHandle} title={'Сохранить изменения'} fontColor={'#FFF'}
                            backgroundColor={'#01BDA7'}/>
                </div>
            </form>
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