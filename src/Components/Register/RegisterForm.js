import React, {useRef} from 'react'
import { Form, Button, Card } from "react-bootstrap";

export const RegisterForm = () => {
    const acNumberRef = useRef();
    const usernameRef = useRef();
    const loginPassRef = useRef();
    const CLoginPassRef = useRef();
    const TransPassRef = useRef();
    const CTransPassRef = useRef();
    const otpRef = useRef();

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if(loginPassRef !== CLoginPassRef){
            window.alert("Login Password does not match with Confirmation login password")
            return;
        }
        if(TransPassRef !== CTransPassRef){
            window.alert("Transaction Password does not match with Confirmation Transaction password")
            return;
        }


        const res = await fetch( "https://localhost:8000/customer",{
            method:'POST',
            headers: {
                'content-type':'application/JSON',
            },
            body: JSON.stringify({
                acNumber:acNumberRef,
                username:usernameRef,
                login_pass:loginPassRef,
                trans_pass:TransPassRef
            })
        })
    }

  return (
    <div>
        <Card style={{maxWidth: '500px'}}>
            <Card.Body>
                <h1 className='text-center mb-2'>Register</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type='number' ref={acNumberRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' ref={usernameRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Login Password</Form.Label>
                        <Form.Control type='password' ref={loginPassRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Login Password</Form.Label>
                        <Form.Control type='password' ref={CLoginPassRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Transaction Password</Form.Label>
                        <Form.Control type='password' ref={TransPassRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Transaction Password</Form.Label>
                        <Form.Control type='password' ref={CTransPassRef} required />
                    </Form.Group>
                    <Button className='mt-4 w-100' type="submit">Register</Button>
                </Form>

                <Form>
                    <Form.Group>
                        <Form.Label>OTP</Form.Label>
                        <Form.Control type='number' ref={otpRef} required disabled/>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    </div>
  )
}
