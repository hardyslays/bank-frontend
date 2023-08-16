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

export const postRegisterForm = async(formData) => {

}

const login = (loginData) => {
    Auth.auth.post('/login', JSON.stringify(loginData))
    .then(res => res.data)
    .then(data => {
        Auth.setToken(data.user, data.access_token);
        return "success"
    })
    .catch(err => {
        return err
    })
}