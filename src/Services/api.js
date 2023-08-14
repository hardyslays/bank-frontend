import axios from "axios";

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