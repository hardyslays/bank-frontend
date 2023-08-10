import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';

export const ApplyForm = () => {

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

    const handleSubmit = () => {

    }

  return (
    <div>
        <Card style={{maxWidth: '500px'}}>
            <Card.Body>
                <h1 className='text-center mb-2'>Apply for New Account</h1>
                <Form onSubmit = {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter title'
                            value= {form.title}
                            onChange={(e) => setField('title', e.target.value)}
                            isInvalid = {!!err.title}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please check the Title
                        </Form.Control.Feedback>
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type='text' ref={firstnameRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type='text' ref={middlenameRef} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='text' ref={lastnameRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Father's Name</Form.Label>
                        <Form.Control type='text' ref={fathernameRef} required />
                    </Form.Group> */}
                    <Button className='mt-4 w-100' type="submit">Apply</Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
  )
}
