import axios from "axios";
import { useState } from "react";

import { SERVER_URL } from "../Constants/url";

let instance = axios.create({
    headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json; charset=utf-8'
    }
})

export const postApplyForm = async(formData) => {
    const postURL = SERVER_URL + '/customer/apply'

    const res = await instance.post(postURL, JSON.stringify(formData))
    return res.data
}

export const getCustomers = async() => {
    const getURL = SERVER_URL + '/admin/customer'
    const res = await instance.get(getURL)

    return res.data
}

export const AuthUser = () => {
    const [token, setToken] = useState();
    const [user, setUser] = useState();

    const saveToken = (user, token) => {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
    }

    const geToken = () => {
        const tokenString = JSON.stringify(localStorage.getItem('token'))
        return tokenString;
    }
    const getUser = () => {
        const userString = JSON.stringify(localStorage.getItem('user'))
        return userString;
    }

    const auth = axios.create({
        baseURL: SERVER_URL,
        headers:{
        'Content-Type':'application/json; charset=utf-8'
        }
    })

    return {
        setToken: saveToken,
        token,
        user,
        http
    }
}