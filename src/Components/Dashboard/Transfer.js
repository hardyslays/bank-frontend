import { MDBCard , MDBCardText, MDBCardTitle, MDBInput} from 'mdb-react-ui-kit'

import { MDBDropdown,MDBBtn, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem,  MDBSelect, MDBSelectOption } from 'mdb-react-ui-kit';
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Col1= () =>
{
    return (
        <Container >
    <MDBCard className='m-3 p-2 bg-secondary shadow-1-strong text-white'>
        <MDBCardText className='pt-3 px-4 fs-2 '>Savings Account</MDBCardText>
        <MDBCard className='m-1 p-2'>
            <MDBCardText className=' px-4 fs-4'>Account balance</MDBCardText>
            <MDBCardText className=' px-4 fs-1'>INR 1,80,379</MDBCardText>
        <div className="border-bottom border-secondary border-2 mb-3"></div>
        <div className="account-number" >
            <MDBCardText className='pt-1 fs-5' style={{ marginTop: '0', marginBottom: '0', padding: '0' }}>Account Number</MDBCardText>
            <MDBCardText className='pt-0 fs-5 ' style={{ marginTop: '0', marginBottom: '0', padding: '0' }}>192378277487</MDBCardText>

        </div>
        <div className="account-owner">
            <MDBCardText className='pt-1 fs-5' style={{ marginTop: '0', marginBottom: '0', padding: '0' }}>Account Owner</MDBCardText>
            <MDBCardText className='pt-0 fs-5' style={{ marginTop: '0', marginBottom: '0', padding: '0' }}>Abc Xyz</MDBCardText>

        </div>
        </MDBCard>
    </MDBCard>
</Container>

    )
}

const Col2 = () =>
{
    return (
        <Container >
    
        <MDBCardText className='pt-3 px-4 fs-2 '>Transfer to</MDBCardText>
        
            
        <MDBDropdown group className='shadow-0'>
        <MDBDropdownToggle color='light'>Beneficiary</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Beneficiary 1</MDBDropdownItem>
          <MDBDropdownItem link>Beneficairy 2</MDBDropdownItem>
        
        </MDBDropdownMenu>
      </MDBDropdown>
            <MDBInput className='m-2 p-2'label='Account Number' id='form1' type='text' />
            <MDBInput className='m-2 p-2' label='Name' id='form1' type='text' />

           
            <select className='form-select m-2 p-2'>
           
        <option disabled>Select Method</option>
                <option value='rtgs'>RTGS</option>
                <option value='imps'>IMPS</option>
                <option value='netbanking'>NetBanking</option>
            </select>
            
            <MDBInput className='m-2 p-2' label='Amount' id='form1' type='text' />
            <MDBBtn className='me-1' color='success'>
        Continue
      </MDBBtn>
             
    
</Container>

    )
}
export const Transfer = () => {
  return (
    <div className='w-100 m-0'>
    <Container>
            <Row>
                <Col md={6}>
                  <Col1 />
                  
                </Col>
                <Col md={6}>
                    {/* Content for the right column */}
                    
                        <Col2 />
                
                </Col>
            </Row>
        </Container>
        </div>
    
);

}

