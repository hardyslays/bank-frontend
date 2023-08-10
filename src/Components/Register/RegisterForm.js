import React, {useState, useEffect} from 'react'
import { Form, Button, Card } from "react-bootstrap";

const OTPform = () => {
    const [OTP, setOTP] = useState("")

    const handleOTPSubmit = () => {

    }

    return(
    <Form onSubmit={handleOTPSubmit}>
        <Form.Group>
            <Form.Label>OTP</Form.Label>
            <Form.Control 
                type='number'
                placeholder='Enter OTP'
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                required
            />
            <Button className='mt-4 w-100' type="submit">Confirm OTP</Button>
        </Form.Group>
    </Form>
    )
}

export const RegisterForm = () => {
    
    const [form, setForm] = useState({})
    const [err, setErr] = useState({})
    const [nextForm, setNextForm] = useState(false)

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

    useEffect(() => {
    }, [nextForm]);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        console.log(nextForm)
        setNextForm(true);
        console.log(nextForm)

        // console.log(form.loginPass)
        // console.log(form.CLoginPass)
        // console.log((form.loginPass === form.CloginPass))
        if(form.loginPass !== form.CloginPass){
            window.alert("Login Password does not match with Confirmation login password")
            return;
        }
        if(form.TransPass !== form.CTransPass){
            window.alert("Transaction Password does not match with Confirmation Transaction password")
            return;
        }
        
        
        // const res = await fetch( "https://localhost:8000/customer",{
        //     method:'POST',
        //     headers: {
        //         'content-type':'application/JSON',
        //     },
        //     body: JSON.stringify({ form })
        // })
        // const data = await res.json()
        // console.log(data)
        
    }


  return (
    <div>
        <Card style={{maxWidth: '500px'}}>
            <Card.Header className='text-center p-3' as='h2'>Register</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control 
                            type='number' 
                            placeholder='Enter Account Number'
                            value= {form.acNumber}
                            onChange={(e) => setField('acNumber', e.target.value)}
                            isInvalid = {!!err.acNumber}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please check the Account Number
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type='text'
                            placeholder='Enter Username'
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
                        <Form.Label>Login Password</Form.Label>
                        <Form.Control 
                            type='password'
                            placeholder='Enter Login Password'
                            value= {form.loginPass}
                            onChange={(e) => setField('loginPass', e.target.value)}
                            isInvalid = {!!err.loginPass}
                            required 
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please check the Login Password
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Login Password</Form.Label>
                        <Form.Control 
                            type='password'
                            placeholder='Confirm Login Password'
                            value= {form.CLoginPass}
                            onChange={(e) => setField('CLoginPass', e.target.value)}
                            isInvalid = {!!err.CLoginPass}
                            required 
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please check the Confirm Login Password
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Transaction Password</Form.Label>
                        <Form.Control 
                            type='password'
                            placeholder='Enter Transaction Password'
                            value={form.TransPass}
                            onChange={(e) => setField('TransPass', e.target.value)}
                            required 
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please check the Transaction Password
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Transaction Password</Form.Label>
                        <Form.Control 
                            type='password'
                            placeholder='Confirm Transaction Password'
                            value={form.CTransPass}
                            onChange={(e) => setField('CTransPass', e.target.value)}
                            required 
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please check the Confirm Transaction Password
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button className='mt-4 w-100' type="submit">Register</Button>
                </Form>
                {nextForm && <OTPform/>}
                {nextForm ? "True" : "False"}
            </Card.Body>
        </Card>
    </div>
  )
}
