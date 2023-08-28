import {  MDBCardText, MDBCardTitle, MDBInput, MDBSelect,  MDBCard, MDBCardBody, MDBCardFooter } from 'mdb-react-ui-kit';
import React, {useMemo, useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import { DetailsCard } from './DetailsCard';

const AccountDetails = () =>
{
  return(
    <Container>
      <MDBCard>
      <MDBCardText className='pt-1 px-3 fs-3'>Account Details</MDBCardText>
      </MDBCard>
     
    </Container>
    
  )
}

const CustomerDetails = () => {
  return (
    <Container>
      <MDBCard className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}>
        <MDBCardText className='fs-4 pt-3 ps-5'><b>Personal Details</b></MDBCardText>
        <MDBCardBody className='d-flex justify-content-around'>
          <div>
            <p><b>Name:</b> Vaishnavi Deshpande</p>
            <p><b>Age:</b> 21</p>
            <p><b>DOB:</b> January 25, 2001</p>
            <p><b>Aadhar Number:</b> 1234 5678 9012</p>
            <p><b>Phone Number:</b> 9890765123</p>
            <p><b>Email Id:</b> vaish@gmail.com</p>
            <p><b>Address:</b> Wakad, Pune-411057</p>
          </div>
        </MDBCardBody>
        <hr style={{ borderTop: '1px solid white', width: '80%', margin: '0 auto' }} />
      </MDBCard>
    </Container>
  );
}




const ProfileImageCard = () =>
{
  return(
<Container>

<MDBCard className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}>
<MDBCardText className='fs-4 pt-3 ps-5'><b>Your Profile</b></MDBCardText>
    <div>
                        <img className='shadow-4'
                        src='assets/default-avatar.png'
                        alt='avatar'
                        style={{width: '80px'}}
                        />
                        <p><b>Vaishnavi</b></p>
                        </div>
</MDBCard>
</Container>

    
  )
}

const SettingsPanel = () => {
  return (
    <Container>
      <MDBCard style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff', width: '400px' }}>
        <MDBCardText className='pt-3 px-3 fs-5'><b>Settings</b></MDBCardText>
        <hr style={{ borderTop: '1px solid white', width: '80%', margin: '0 auto' }} />
        <div className="d-flex flex-column align-items-center">
          <button type="button" className="btn btn-primary my-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderColor: 'rgba(0, 0, 0, 0.7)' }}>Change Password</button>
          <button type="button" className="btn btn-primary my-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderColor: 'rgba(0, 0, 0, 0.7)' }}>Change Username</button>
          <button type="button" className="btn btn-primary my-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderColor: 'rgba(0, 0, 0, 0.7)' }}>Update KYC</button>
        </div>
      </MDBCard>
    </Container>
  );
}


export const AcDetails = () => {
  return (
    <div className="background-container">
      <div className='w-100 m-0 content-container'>
        <Container>
          <Row>
            <Col md={6} className="pr-md-2">
              <ProfileImageCard />
            </Col>
            <Col md={6} className="pl-md-2">
              <SettingsPanel />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={6}>
              <DetailsCard />
            </Col>
            <Col md={6}>
              <CustomerDetails />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

