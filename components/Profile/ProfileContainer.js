import React, {useEffect, useState} from 'react';
import {Profile} from "./Profile";
import axios from "axios";

let instance = axios.create({
    baseURL: "http://localhost:3000/api/",
});

export const ProfileContainer = () => {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    let styleLoading = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '100px'
    }

    useEffect(() => {
        instance.get('user/1').then(res => {
            setEmail(res.data.email)
            setPhone(res.data.phone)
        }).catch((error) => {
            alert(error)
        })
    }, [])

    return <Profile email={email} phoneNumber={phone}/>
}