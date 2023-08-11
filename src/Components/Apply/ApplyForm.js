import React, { useState } from 'react'
import { Form, Button, Card, Container, FloatingLabel } from 'react-bootstrap';
import { SERVER_URL } from '../../Constants/url';

export const ApplyForm = () => {
  
    // const titleRef = useRef();
    // const firstnameRef = useRef();
    // const middlenameRef = useRef();
    // const lastnameRef = useRef();
    // const fathernameRef = useRef();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const url = SERVER_URL + '/customer/apply'

        console.log("Form data :", form);
        fetch(url, {
            method:'POST',
            body: JSON.stringify({
                title: form.title,
                firstName: form.fname,
                midleName: form.mname,
                lastName: form.lname,
                fatherName:form.frname,
                mobileNumber:form.phone,
                emailId:form.email,
                adharNumber:form.aadhar,
                dob:form.dob,
                residentialLine1:form.resiadd,
                residentialLine2:form.resiadd2,
                residentialState:form.resistate,
                residentialPincoe:form.pincode,
                permanentLine1:form.permadd,
                permanentLine2:form.permadd2,
                permanentLandmark:form.perlandmark,
                permanentState:form.perstate,
                permanentPincode:form.perpincode,
                occupationType: form.occup,
                sourceOfIncome: form.incomeSource,
                netBankingBool: form.netBanking
            }),
            // body: JSON.stringify(body),
            headers:{
                'Content-type':'application/json;charset=UTF-8',
            },
        })
        .then(res => {
            return res.json();
        })
        .then(json => {
            console.log('Resp : ',json)
            alert("Data stored in json-server :)")
        })
        .catch(err => {
            console.log("Error : ",err)
        })
    }

  return (
    <Container className='p-10'>
        <Card>
            <Card.Header as='h2' className='text-center mb-2'>Apply for New Account</Card.Header>
            <Card.Body>
                <Form onSubmit = {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter title'
                            value= {form.title}
                            onChange={(e) => setField('title', e.target.value)}
                            isInvalid = {!!err.title} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter First Name</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter First Name'
                            value= {form.fname}
                            onChange={(e) => setField('fname', e.target.value)}
                            isInvalid = {!!err.fname} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                        
                        
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter Middle Name'
                            value= {form.mname}
                            onChange={(e) => setField('mname', e.target.value)}
                            isInvalid = {!!err.mname} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter Last Name'
                            value= {form.lname}
                            onChange={(e) => setField('lname', e.target.value)}
                            isInvalid = {!!err.lname} required
                        />

                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Father's Name</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter Father Name'
                            value= {form.frname}
                            onChange={(e) => setField('frname', e.target.value)}
                            isInvalid = {!!err.frname} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control 
                            type='date' 
                            placeholder="Enter Date of Birth"
                            value= {form.dob}
                            onChange={(e) => setField('dob', e.target.value)}
                            isInvalid = {!!err.dob} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control 
                            type='email' 
                            placeholder="Enter Email ID"
                            value= {form.email}
                            onChange={(e) => setField('email', e.target.value)}
                            isInvalid = {!!err.email} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control 
                            type='number' 
                            placeholder="Enter Phone No."
                            value= {form.phone}
                            onChange={(e) => setField('phone', e.target.value)}
                            isInvalid = {!!err.phone} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Aadhar Number</Form.Label>
                        <Form.Control 
                            type='number' 
                            placeholder="Enter Aadhar Number"
                            value= {form.aadhar}
                            onChange={(e) => setField('aadhar', e.target.value)}
                            isInvalid = {!!err.aadhar} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Residential Address</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder="Address Line 1"
                            value= {form.resiadd}
                            onChange={(e) => setField('resiadd', e.target.value)}
                            isInvalid = {!!err.resiadd} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group>
                    
                        <Form.Control 
                            type='text' 
                            placeholder="Address Line 2"
                            value= {form.resiadd2}
                            onChange={(e) => setField('resiadd2', e.target.value)}
                            isInvalid = {!!err.resiadd2} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group>
                        <Form.Label>Residential Landmark</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder=""
                            value= {form.landmark}
                            onChange={(e) => setField('landmark', e.target.value)}
                            isInvalid = {!!err.landmark} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group>
                        <Form.Label>Residential State</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder=""
                            value= {form.resistate}
                            onChange={(e) => setField('resistate', e.target.value)}
                            isInvalid = {!!err.resistate} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group>
                        <Form.Label>Residential Pincode</Form.Label>
                        <Form.Control 
                            type='number' 
                            placeholder=""
                            value= {form.pincode}
                            onChange={(e) => setField('pincode', e.target.value)}
                            isInvalid = {!!err.pincode} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Permanent Address</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder="Address Line 1"
                            value= {form.permadd}
                            onChange={(e) => setField('permadd', e.target.value)}
                            isInvalid = {!!err.permadd} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group>
                    
                        <Form.Control 
                            type='text' 
                            placeholder="Address Line 2"
                            value= {form.permadd2}
                            onChange={(e) => setField('permadd2', e.target.value)}
                            isInvalid = {!!err.permadd2} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group>
                        <Form.Label> Permanent Landmark</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder=""
                            value= {form.perlandmark}
                            onChange={(e) => setField('perlandmark', e.target.value)}
                            isInvalid = {!!err.perlandmark} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group>
                        <Form.Label>Permanent State</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder=""
                            value= {form.perstate}
                            onChange={(e) => setField('perstate', e.target.value)}
                            isInvalid = {!!err.perstate} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group>
                        <Form.Label>Permanent Pincode</Form.Label>
                        <Form.Control 
                            type='number' 
                            placeholder=""
                            value= {form.perpincode}
                            onChange={(e) => setField('perpincode', e.target.value)}
                            isInvalid = {!!err.perpincode} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Occupation Type</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder=""
                            value= {form.occup}
                            onChange={(e) => setField('occup', e.target.value)}
                            isInvalid = {!!err.occup} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Source of Income</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder=""
                            value= {form.incomeSource}
                            onChange={(e) => setField('incomeSource', e.target.value)}
                            isInvalid = {!!err.incomeSource} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Gross Annual Income</Form.Label>
                        <Form.Control 
                            type='number' 
                            placeholder=""
                            value= {form.income}
                            onChange={(e) => setField('income', e.target.value)}
                            isInvalid = {!!err.income} required
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check 
                            type='checkbox'
                            value= {form.netBanking}
                            label="Opt for Net Banking Services"
                            onChange={(e) => setField('netBanking', e.target.checked)}
                            isInvalid = {!!err.netBanking}
                        />
                        <Form.Control.Feedback type='invalid'>

                        </Form.Control.Feedback>
                    </Form.Group>



                    

                    <Button className='mt-4 w-100' type="submit">Apply</Button>
                </Form>
            </Card.Body>
        </Card>
    </Container>
  )
}
