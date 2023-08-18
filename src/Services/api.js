import axios from "axios";

import { SERVER_URL } from "../Constants/url";
import Auth from './Auth'

let instance = axios.create({
    baseURL: SERVER_URL + '/api',
    headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json; charset=utf-8'
    }
})

export const postApplyForm = async(formData) => {
    const res = await instance.post('/customer/apply', JSON.stringify(formData))
    return res.data
}

export const postRegisterForm = async(id, formData) => {
    const  res = await instance.post(`/netbanking/create/account/${id}`, JSON.stringify(formData))
    return res.data
}

export const login = async(loginData) => {
    const res = await instance.post('/netbanking/login', JSON.stringify(loginData))

    return res.data
}