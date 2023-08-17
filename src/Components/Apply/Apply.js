import React, { useEffect, useRef } from 'react'
import { ApplyForm } from './ApplyForm'

import Auth from '../../Services/Auth'
import { useNavigate } from 'react-router-dom'

export const Apply = () => {
    const navigate = useNavigate();
    const { getToken } = Auth();
    useEffect(() => {
        //To check if already Logged in
        const token = getToken();
        // console.log('token: ', token)
        // console.log('val:', (!token))
        if(!!getToken()){
            navigate('/dashboard', {replace: true})
        }
    }, [])

    return(
        <>
        {!getToken()?'1':'0'}
        <ApplyForm/>
        </>
    )
}
