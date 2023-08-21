import React, {useState, useEffect} from 'react'
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { postRegisterForm } from '../../Services/Api';
import {MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';


export const RegisterForm = () => {
    const navigate= useNavigate()
    
    const [form, setForm] = useState({})
    const [err, setErr] = useState({})

    const setField = (field, value) =>{
        setForm({
        ...form,
        [field]:value
        })

        if(!!err[field])
        setErr({
            ...err,
            [field]:null
        })
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        let regisform = {
            
            accountNumber : form.acNumber,
            userName : form.username,
            password : form.loginPass,
        }

        console.log('login: ',regisform)
        // console.log('login cnfrm: ', form.CLoginPass)
        // console.log((form.loginPass !== form.CLoginPass))
        
        if(form.TransPass !== form.CTransPass){
            window.alert("Transaction Password does not match with Confirmation Transaction password")
            
            return;
        }
        if(form.loginPass !== form.CLoginPass){
            window.alert("Login Password does not match with Confirmation login password")
            
            return;
        }
        if(form.otp != '0000'){
            window.alert("OTP provided is incorrect")

            return;
        }

        postRegisterForm(form.acNumber, regisform)
        .then(data => {
            if(data === 'duplicate'){
                window.alert("This account number is already registered")
                return;
            }
            console.log(data)
            navigate('/login')
        })
        .catch(err => {
            console.log('ERR: ')
            console.log(err)
        })
        

        
    }


  return (
    <div>
        <MDBCard>
            <MDBCardHeader className='text-center px-2 py-3' as='h3'>Register for Net Banking</MDBCardHeader>
            <MDBCardBody>
                <Form onSubmit={handleSubmit}>
                    
                        <MDBInput
                            type='number' 
                            label='Enter Account Number'
                            value= {form.acNumber}
                            onChange={(e) => setField('acNumber', e.target.value)}
                            isInvalid = {!!err.acNumber}
                            required
                            className='m-3'
                        />
                        
                        <MDBInput
                            type='text'
                           label='Enter Username'
                            value= {form.username}
                            onChange={(e) => setField('username', e.target.value)}
                            isInvalid = {!!err.username}
                            required 
                            className='m-3'
                        />
                        
                        <MDBInput
                            type='password'
                           label='Enter Login Password'
                            value= {form.loginPass}
                            onChange={(e) => setField('loginPass', e.target.value)}
                            isInvalid = {!!err.loginPass}
                            required 
                            className='m-3'
                        />
                      
                        <MDBInput
                            type='password'
                           label='Confirm Login Password'
                            value= {form.CLoginPass}
                            onChange={(e) => setField('CLoginPass', e.target.value)}
                            isInvalid = {!!err.CLoginPass}
                            required 
                        />
                      
                        <MDBInput
                            type='password'
                           label='Enter Transaction Password'
                            value={form.TransPass}
                            onChange={(e) => setField('TransPass', e.target.value)}
                            required 
                            className='m-3'
                        />
                       
                        <MDBInput
                            type='password'
                           label='Confirm Transaction Password'
                            value={form.CTransPass}
                            onChange={(e) => setField('CTransPass', e.target.value)}
                            required 
                        />
                        
                        <MDBInput
                            type='number'
                           label='Enter OTP'
                            value={form.otp}
                            onChange={(e) => setField('otp', e.target.value)}
                            required
                            className='m-3'
                        />
                  
                    <Button className='mt-4 w-100' type="submit">Register</Button>
                </Form>
            </MDBCardBody>
        </MDBCard>
    </div>
  )
}
