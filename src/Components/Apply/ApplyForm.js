import React, { useState } from 'react'
import { Form, Button, Card, Container, FloatingLabel } from 'react-bootstrap';
import {MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';

import { SERVER_URL } from '../../Constants/url';
import { postApplyForm } from '../../Services/Api';
import { useNavigate } from 'react-router-dom';

export const ApplyForm = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // const url = SERVER_URL + '/customer/apply'
        
        let formData = {
            title: form.title,
            firstName: form.fname,
            middleName: form.mname,
            lastName: form.lname,
            fatherName:form.frname,
            mobileNumber:form.phone,
            emailId:form.email,
            adharNumber:form.aadhar,
            dob:form.dob,
            residentialLine1:form.resiadd,
            residentialLine2:form.resiadd2,
            residentialLandmark: form.landmark,
            residentialState:form.resistate,
            residentialPincode:form.pincode,
            permanentLine1:form.permadd,
            permanentLine2:form.permadd2,
            permanentLandmark:form.perlandmark,
            permanentState:form.perstate,
            permanentPincode:form.perpincode,
            occupationType: form.occup,
            sourceOfIncome: form.incomeSource,
            grossAnnualIncome: parseInt(form.income),
            debitCardBool: form.debitCard?"1":"0",
            netBankingBool: form.netBanking?"1":"0"
        }

        console.log("Form data :", formData)
        
        postApplyForm(formData)
        .then(data => {
            console.log(data)
            navigate('/apply-success')
        })
        .catch(err => console.log(err))
    }

  return (
    <Container className='p-10'>
        <MDBCard>
            <MDBCardHeader tag='h2' className='text-center mb-2'>Apply for New Account</MDBCardHeader>
            <MDBCardBody>
                <Form onSubmit = {handleSubmit}>
                        <MDBInput 
                            type='text' 
                            label='Enter Title'
                            value= {form.title}
                            onChange={(e) => setField('title', e.target.value)}
                            isInvalid = {!!err.title} required
                            className='m-3'
                        />

                    
                        <MDBInput 
                            type='text' 
                            label='Enter First Name'
                            value= {form.fname}
                            onChange={(e) => setField('fname', e.target.value)}
                            isInvalid = {!!err.fname} required
                            className='m-3'
                        />
                        
                        <MDBInput 
                            type='text' 
                            label='Enter Middle Name'
                            value= {form.mname}
                            onChange={(e) => setField('mname', e.target.value)}
                            isInvalid = {!!err.mname} required
                            className='m-3'
                        />
                    
                        <MDBInput 
                            type='text' 
                            label='Enter Last Name'
                            value= {form.lname}
                            onChange={(e) => setField('lname', e.target.value)}
                            isInvalid = {!!err.lname} required
                            className='m-3'
                        />

                        <MDBInput 
                            type='text' 
                            label='Enter Father Name'
                            value= {form.frname}
                            onChange={(e) => setField('frname', e.target.value)}
                            isInvalid = {!!err.frname} required
                            className = 'm-3'
                        />
                       
                        <MDBInput 
                            type='date' 
                            label="Enter Date of Birth"
                            value= {form.dob}
                            onChange={(e) => setField('dob', e.target.value)}
                            isInvalid = {!!err.dob} required
                            className = 'm-3'
                        />
                        
                        <MDBInput 
                            type='email' 
                            label="Enter Email ID"
                            value= {form.email}
                            onChange={(e) => setField('email', e.target.value)}
                            isInvalid = {!!err.email} required
                            className = 'm-3'
                        />
                      
                        <MDBInput 
                            type='number' 
                            label="Enter Phone No."
                            value= {form.phone}
                            onChange={(e) => setField('phone', e.target.value)}
                            isInvalid = {!!err.phone} required
                            className = 'm-3'
                        />
                      
                        <MDBInput 
                            type='number' 
                            label="Enter Aadhar Number"
                            value= {form.aadhar}
                            onChange={(e) => setField('aadhar', e.target.value)}
                            isInvalid = {!!err.aadhar} required
                            className = 'm-3'
                        />
                       
                        <MDBInput 
                            type='text' 
                            label="Residential Address Line 1"
                            value= {form.resiadd}
                            onChange={(e) => setField('resiadd', e.target.value)}
                            isInvalid = {!!err.resiadd} required
                            className = 'm-3'
                        />
                    
                        <MDBInput 
                            type='text' 
                            label="Residential Address Line 2"
                            value= {form.resiadd2}
                            onChange={(e) => setField('resiadd2', e.target.value)}
                            isInvalid = {!!err.resiadd2} required
                        />
                       
                        <MDBInput 
                            type='text' 
                            label="Residential Landmark"
                            value= {form.landmark}
                            onChange={(e) => setField('landmark', e.target.value)}
                            isInvalid = {!!err.landmark} required
                            className = 'm-3'
                        />
                      
                        <MDBInput 
                            type='text' 
                            label="Residential State"
                            value= {form.resistate}
                            onChange={(e) => setField('resistate', e.target.value)}
                            isInvalid = {!!err.resistate} required
                            className = 'm-3'
                        />
                      
                        <MDBInput 
                            type='number' 
                            label="Residential Pincode"
                            value= {form.pincode}
                            onChange={(e) => setField('pincode', e.target.value)}
                            isInvalid = {!!err.pincode} required
                            className = 'm-3'
                        />
                       
                        <MDBInput 
                            type='text' 
                            label="Permanent Address Line 1"
                            value= {form.permadd}
                            onChange={(e) => setField('permadd', e.target.value)}
                            isInvalid = {!!err.permadd} required
                            className = 'm-3'
                        />
                    
                        <MDBInput 
                            type='text' 
                            label="Permanent Address Line 2"
                            value= {form.permadd2}
                            onChange={(e) => setField('permadd2', e.target.value)}
                            isInvalid = {!!err.permadd2} required
                            className = 'm-3'
                        />
                       
                        <MDBInput 
                            type='text' 
                            label="Permanent Landmark"
                            value= {form.perlandmark}
                            onChange={(e) => setField('perlandmark', e.target.value)}
                            isInvalid = {!!err.perlandmark} required
                            className = 'm-3'
                        />
                      
                        <MDBInput 
                            type='text' 
                            label="Permanent State"
                            value= {form.perstate}
                            onChange={(e) => setField('perstate', e.target.value)}
                            isInvalid = {!!err.perstate} required
                            className = 'm-3'
                        />
                        
                        <MDBInput 
                            type='number' 
                            label="Permanent Pincode"
                            value= {form.perpincode}
                            onChange={(e) => setField('perpincode', e.target.value)}
                            isInvalid = {!!err.perpincode} required
                            className = 'm-3'
                        />
                        
                        <MDBInput 
                            type='text' 
                            label="Occupation"
                            value= {form.occup}
                            onChange={(e) => setField('occup', e.target.value)}
                            isInvalid = {!!err.occup} required
                            className = 'm-3'
                        />
                       
                        <MDBInput 
                            type='text' 
                            label="Source of Income"
                            value= {form.incomeSource}
                            onChange={(e) => setField('incomeSource', e.target.value)}
                            isInvalid = {!!err.incomeSource} required
                            className = 'm-3'
                        />
                        
                        <MDBInput 
                            type='number' 
                            label="Gross Annual Income"
                            value= {form.income}
                            onChange={(e) => setField('income', e.target.value)}
                            isInvalid = {!!err.income} required
                            className = 'm-3'
                        />
                        
                        <MDBCheckbox
                            type='checkbox'
                            value= {form.debitCard}
                            label="I want Debit Card services"
                            onChange={(e) => setField('debitCard', e.target.checked)}
                            isInvalid = {!!err.debitCard}
                            
                        />
                        
                        <MDBCheckbox
                            type='checkbox'
                            value= {form.netBanking}
                            label="Opt for Net Banking Services"
                            onChange={(e) => setField('netBanking', e.target.checked)}
                            isInvalid = {!!err.netBanking}
                            
                        />
                
                    <Button className='mt-4 w-100' type="submit">Apply</Button>
                </Form>
            </MDBCardBody>
        </MDBCard>
    </Container>
  )
}
