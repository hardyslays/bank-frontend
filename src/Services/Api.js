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


// Unauthenticated API calls
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


//Authenticated API calls
let Authinstance = axios.create({
    baseURL: SERVER_URL + '/api',
    headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json; charset=utf-8'
    }
})

Authinstance.interceptors.request.use( config => {
    const token = Auth().getToken();
    config.headers.Authorization =  `Bearer ${token}`;
    return config;
})

export const getPayees = async() => {
    const username = Auth().getUser();
    const res = await Authinstance.get(`/netbanking/beneficiary/${username}`)

    return res.data
}
export const getAccountCustomerDetails = async() => {
    const username = Auth().getUser();
    const res = await Authinstance.get(`/netbanking/details/${username}`)

    return res.data
}

export const postAddPayee = async(formData) => {
    const res = await Authinstance.post('/netbanking/beneficiary', JSON.stringify(formData))

    return res.data
}


export const getTransactions = async() => {
    const res = await Authinstance.get('/netbanking/transactions')

    return res.data
}

export const getRecentTransactions = async(num) => {
    const res = await Authinstance.get(`/netbanking/transactions/${num}`)

    return res.data
}

export const getRecentCreditTransactions = async(num) => {
    const res = await Authinstance.get(`/netbanking/transactions/credit/${num}`)

    return res.data
}

export const getRecentDebitTransactions = async(num) => {
    const res = await Authinstance.get(`/netbanking/transactions/debit/${num}`)

    return res.data
}

export const getBalance = async() => {
    const res = await Authinstance.get('/netbanking/balance')

    return res.data
}
