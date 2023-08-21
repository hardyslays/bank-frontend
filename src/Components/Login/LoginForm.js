import React, {useState, useEffect} from 'react'
import { Form, Button, Card } from "react-bootstrap";
import {MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';

// import {AuthUser} from '../../Services/auth';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const navigate = useNavigate()
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
        
        // const resp = AuthUser.auth.post('/login', form)
        // .then(res => res.data)
        // .then(data => {
            
        // })
        // if(resp == "success"){
        //     console.log("SUCCESS")
        //     // navigate('/dashboard')
        // }
        // else{
        //     console.log("ERROR: ", err)
        // }
    }


  return (
    <div>
        <MDBCard>
            <MDBCardHeader className='text-center px-2 py-3' as='h3'>Login for Net Banking</MDBCardHeader>
            <MDBCardBody>
                <Form onSubmit={handleSubmit}>
                   
                        <MDBInput 
                            type='text'
                            label='Enter username'
                            value= {form.username}
                            onChange={(e) => setField('username', e.target.value)}
                            isInvalid = {!!err.username}
                            required 
                            className='m-3'
                        />
                       
                        <MDBInput
                            type='password'
                            label='Enter your password'
                            value= {form.password}
                            onChange={(e) => setField('password', e.target.value)}
                            isInvalid = {!!err.pass}
                            required 
                            className='m-3'
                        />
                        
                    
                    <Button className='mt-4 w-100' type="submit">Login</Button>
                </Form>
            </MDBCardBody>
        </MDBCard>
    </div>
  )
}
