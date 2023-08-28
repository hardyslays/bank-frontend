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

        //Validation
        // if()

        console.log("Form data :", formData)
        
        postApplyForm(formData)
        .then(data => {
            console.log(data)
            navigate('/apply-success')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='background-container'>

    <Container className='p-10'>
        <MDBCard style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}>
            <MDBCardHeader tag='h2' className='text-center mb-2'>Apply for New Account</MDBCardHeader>
            <MDBCardBody>
                <Form onSubmit = {handleSubmit}>
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Enter Title</label>}
                            value= {form.title}
                            onChange={(e) => setField('title', e.target.value)}
                            isInvalid = {!!err.title} required
                            className='m-3'
                        />

                    
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Enter First Name</label>}
                            value= {form.fname}
                            onChange={(e) => setField('fname', e.target.value)}
                            isInvalid = {!!err.fname} required
                            className='text-light'
                        />
                        
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Enter Middle Name</label>}
                            value= {form.mname}
                            onChange={(e) => setField('mname', e.target.value)}
                            isInvalid = {!!err.mname}
                            className='m-3'
                        />
                    
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Enter Last Name</label>}
                            value= {form.lname}
                            onChange={(e) => setField('lname', e.target.value)}
                            isInvalid = {!!err.lname} required
                            className='m-3'
                        />

                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Enter Father's name</label>}
                            value= {form.frname}
                            onChange={(e) => setField('frname', e.target.value)}
                            isInvalid = {!!err.frname} required
                            className = 'm-3'
                        />
                       
                        <MDBInput 
                            type='date' 
                            label={<label className="form-label" style={{ color: 'white' }}>Enter Date of Birth</label>}
                            value= {form.dob}
                            onChange={(e) => setField('dob', e.target.value)}
                            isInvalid = {!!err.dob} required
                            className = 'm-3'
                        />
                        
                        <MDBInput 
                            type='email' 
                            label={<label className="form-label" style={{ color: 'white' }}>Enter Email ID</label>}
                            value= {form.email}
                            onChange={(e) => setField('email', e.target.value)}
                            isInvalid = {!!err.email} required
                            className = 'm-3'
                        />
                      
                        <MDBInput 
                            type='number' 
                            label={<label className="form-label" style={{ color: 'white' }}>Enter Phone Number</label>}
                            value= {form.phone}
                            onChange={(e) => setField('phone', e.target.value)}
                            isInvalid = {!!err.phone} required
                            className = 'm-3'
                        />
                      
                        <MDBInput 
                            type='number' 
                            label={<label className="form-label" style={{ color: 'white' }}>Enter Aadhar Number</label>}
                            value= {form.aadhar}
                            onChange={(e) => setField('aadhar', e.target.value)}
                            isInvalid = {!!err.aadhar} required
                            className = 'm-3'
                        />
                       
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Residential Line 1</label>}
                            value= {form.resiadd}
                            onChange={(e) => setField('resiadd', e.target.value)}
                            isInvalid = {!!err.resiadd} required
                            className = 'm-3'
                        />
                    
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Residential Line 2</label>}
                            value= {form.resiadd2}
                            onChange={(e) => setField('resiadd2', e.target.value)}
                            isInvalid = {!!err.resiadd2} required
                        />
                       
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Residential Landmark</label>}
                            value= {form.landmark}
                            onChange={(e) => setField('landmark', e.target.value)}
                            isInvalid = {!!err.landmark} required
                            className = 'm-3'
                        />
                      
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Residential State</label>}
                            value= {form.resistate}
                            onChange={(e) => setField('resistate', e.target.value)}
                            isInvalid = {!!err.resistate} required
                            className = 'm-3'
                        />
                      
                        <MDBInput 
                            type='number' 
                            label={<label className="form-label" style={{ color: 'white' }}>Residential Pnincode</label>}
                            value= {form.pincode}
                            onChange={(e) => setField('pincode', e.target.value)}
                            isInvalid = {!!err.pincode} required
                            className = 'm-3'
                        />
                       
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Permanent Address Line 1</label>}
                            value= {form.permadd}
                            onChange={(e) => setField('permadd', e.target.value)}
                            isInvalid = {!!err.permadd} required
                            className = 'm-3'
                        />
                    
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Permanent Address Line 2</label>}
                            value= {form.permadd2}
                            onChange={(e) => setField('permadd2', e.target.value)}
                            isInvalid = {!!err.permadd2} required
                            className = 'm-3'
                        />
                       
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Permanent Landmark</label>}
                            value= {form.perlandmark}
                            onChange={(e) => setField('perlandmark', e.target.value)}
                            isInvalid = {!!err.perlandmark} required
                            className = 'm-3'
                        />
                      
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Permanent State</label>}
                            value= {form.perstate}
                            onChange={(e) => setField('perstate', e.target.value)}
                            isInvalid = {!!err.perstate} required
                            className = 'm-3'
                        />
                        
                        <MDBInput 
                            type='number' 
                            label={<label className="form-label" style={{ color: 'white' }}>Permanent Pincode</label>}
                            value= {form.perpincode}
                            onChange={(e) => setField('perpincode', e.target.value)}
                            isInvalid = {!!err.perpincode} required
                            className = 'm-3'
                        />
                        
                        <MDBInput 
                            type='text'                          label={<label className="form-label" style={{ color: 'white' }}>Occupation</label>}
                            value= {form.occup}
                            onChange={(e) => setField('occup', e.target.value)}
                            isInvalid = {!!err.occup} required
                            className = 'm-3'
                        />
                       
                        <MDBInput 
                            type='text' 
                            label={<label className="form-label" style={{ color: 'white' }}>Source of Income</label>}
                            value= {form.incomeSource}
                            onChange={(e) => setField('incomeSource', e.target.value)}
                            isInvalid = {!!err.incomeSource} required
                            className = 'm-3'
                        />
                        
                        <MDBInput 
                            type='number' 
                            label={<label className="form-label" style={{ color: 'white' }}>Gross Annual Income</label>}
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
    </div>
  )
}
