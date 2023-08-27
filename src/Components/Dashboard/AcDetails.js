import { MDBCard , MDBCardText, MDBCardTitle, MDBInput, MDBSelect } from 'mdb-react-ui-kit';
import { MDBDropdown,MDBBtn, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import React, {useMemo, useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap'


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

const CustomerDetails = () =>
{
  return(
    <Container>
      <MDBCard>
      <MDBCardText className='pt-1 px-3 fs-3'>Personal Details</MDBCardText>
      </MDBCard>
     
    </Container>
    
  )
}

const ProfileImageCard = () =>
{
  return(
    <Container>
      <MDBCard>
      <MDBCardText className='pt-2 px-3 fs-5'>Profile</MDBCardText>
      <div>
                        <img className='shadow-4'
                        src='assets/default-avatar.png'
                        alt='avatar'
                        style={{width: '80px'}}
                        />
                        <p>Vaishnavi</p>
                        </div>
      </MDBCard>
     
    </Container>
    
  )
}

const SettingsPanel = () =>
{
  return(
    <Container>
      <MDBCard>
      <MDBCardText className='pt-3 px-3 fs-5'>Settings</MDBCardText>
      <button type="button" class="btn btn-primary pt-2">Change Password</button>
      <button type="button" class="btn btn-primary pt-2">Change Username </button>
      <button type="button" class="btn btn-primary pt-2">Update KYC</button>
      
      </MDBCard>
    </Container>
    
  )
}
export const AcDetails = () => {
  return (
    <div className='w-100 m-0'>
    <Container>
            <Row>
                <Col md={6}>
                  <ProfileImageCard />
                  <SettingsPanel />
                  
                </Col>
                <Col md={6}>
                    {/* Content for the right column */}
                    
                        <AccountDetails/>
                        <CustomerDetails/>
                
                </Col>
            </Row>
        </Container>
        </div>
  )
}
