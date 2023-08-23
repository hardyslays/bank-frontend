import axios from "axios";

import { SERVER_URL } from "../Constants/url";

let instance = axios.create({
    baseURL: SERVER_URL + '/admin',
    headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json; charset=utf-8'
    }
})

export const getCustomers = async() => {
    const res = await instance.get('/get/customers')

    return res.data
}

export const getCustomersApproved = async() => {
    const res = await instance.get('/approved/customers')

    return res.data
}

export const getCustomersAll = async() => {
    const res = await instance.get('/all/customers')

    return res.data
}

export const getCustomerById = async(id) => {
    const res = await instance.get('/customer/'+id)

    return res.data
}

export const postAdminApprove = async(id) => {
    const res = await instance.post('/approve/account/' + id)

    return res
}

export const postAdminDISABLE = async(id) => {
    const res = await instance.post('/disable/account/' + id)
    return res
}