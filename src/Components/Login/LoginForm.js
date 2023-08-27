import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBInput, MDBCardFooter, MDBCardText } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Services/Api';
import Auth from '../../Services/Auth';

export const LoginForm = () => {
    const { setToken } = Auth();

    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const [err, setErr] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });

        if (!!err[field]) {
            setErr({
                ...err,
                [field]: null,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            userName: form.username,
            password: form.password,
        };

        login(formData)
            .then((data) => {
                if (data === 'error') {
                    window.alert('Invalid Credentials');
                    return;
                }
                setToken(formData.userName, data);
                navigate('/dashboard');
            });
    };

    return (
        <div className='background-container'>
        <div>
            <MDBCard className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', color: '#fff' }}>
                <MDBCardHeader className='px-2 py-3' as='h3'>
                    <b></b>Login for Net Banking
                </MDBCardHeader>
                <MDBCardBody>
                    <Form onSubmit={handleSubmit}>
                        <MDBInput
                            type='text'
                            label='Enter username'
                            value={form.username}
                            onChange={(e) => setField('username', e.target.value)}
                            isInvalid={!!err.username}
                            required
                            className='m-3'
                            style={{ color: 'white' }}
                        />

                        <MDBInput
                            type='password'
                            label='Enter your password'
                            value={form.password}
                            onChange={(e) => setField('password', e.target.value)}
                            isInvalid={!!err.pass}
                            required
                            className='m-3'
                            style={{ color: 'white' }}
                        />

                        <Button className='mt-4 w-100' type='submit'>
                            Login
                        </Button>
                    </Form>
                </MDBCardBody>
                <MDBCardFooter>
                <MDBCardText className='text-center' onClick={() => navigate('/register')} style={{ cursor: 'pointer', color: 'white' }}>
    Register For Net Banking Here
</MDBCardText>
<MDBCardText className='text-center' onClick={() => navigate('/apply')} style={{ cursor: 'pointer', color: 'white' }}>
    Don't have an Account? Apply today
</MDBCardText>

                </MDBCardFooter>
            </MDBCard>
        </div>
        </div>
    );
};
