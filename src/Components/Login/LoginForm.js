import React, {useState, useEffect} from 'react'
import { Form, Button, Card } from "react-bootstrap";

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
        <Card>
            <Card.Header className='text-center px-2 py-3' as='h3'>Login for Net Banking</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter username'
                            value= {form.username}
                            onChange={(e) => setField('username', e.target.value)}
                            isInvalid = {!!err.username}
                            required 
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please check the Username
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password'
                            placeholder='Enter your password'
                            value= {form.password}
                            onChange={(e) => setField('password', e.target.value)}
                            isInvalid = {!!err.pass}
                            required 
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please check your Password
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Button className='mt-4 w-100' type="submit">Login</Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
  )
}
