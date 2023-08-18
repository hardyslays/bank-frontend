import axios from "axios";
import { useState } from "react";

import { SERVER_URL } from "../Constants/url";

export default function Auth() {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    const saveToken = (user, token) => {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
    }

    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        return tokenString;
    }
    const getUser = () => {
        const userString = localStorage.getItem('user')
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
        'setToken': saveToken
    }
}