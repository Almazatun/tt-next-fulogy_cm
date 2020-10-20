import React from 'react';
import {EditProfile} from "./EditProfile";

import axios from "axios";

let instance = axios.create({
    baseURL: "http://localhost:3000/api/fulogy/",
});

export const EditProfileContainer = () => {

    const post = (data) => {
        instance.post('fulogy', data).then(res => {
            //console.log("FulogyAPI", res.data)
        }).catch((error) => {
            alert(error)
        })
    }


    return <EditProfile call={post}/>
}