import axios from "axios";
import { useState } from "react";

import { SERVER_URL } from "../Constants/url";

export default function Auth() {
    const [token, setToken] = useState();
    const [user, setUser] = useState();

    const saveToken = (user, token) => {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
    }

    const getToken = () => {
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
        auth,
        getToken,
        getUser,
        saveToken
    }
}