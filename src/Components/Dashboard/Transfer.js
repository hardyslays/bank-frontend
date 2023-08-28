import { MDBCard , MDBCardText, MDBCardTitle, MDBInput, MDBSelect } from 'mdb-react-ui-kit';
import { MDBDropdown,MDBBtn, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import React, {useMemo, useState} from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'

import { DetailsCard } from './DetailsCard';
import { SummaryCard } from './SummaryCard';
import { PayeeBoard } from './PayeeBoard';

const Col2 = () =>
{
    return (
        <Card className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff' }}>
        <Container className='mb-3'>
    
        <MDBCardText className='pt-4 px-3 fs-3'>Transfer to</MDBCardText>

        <div className='px-3'>
        <MDBDropdown group className='shadow-0'>
            <MDBDropdownToggle color='light'>Beneficiary</MDBDropdownToggle>

            <MDBDropdownMenu>
                <MDBDropdownItem link>Beneficiary 1</MDBDropdownItem>
                <MDBDropdownItem link>Beneficairy 2</MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>

        <MDBInput className='m-2 p-2'label='Account Number' id='form1' type='text' />
        <MDBInput className='m-2 p-2' label='Name' id='form1' type='text' />

        <select className='select w-100 p-2 border-secondary' data-mdb-placeholder='Select Transaction Method'>
        <option value="null" disabled selected hidden>Choose a transaction method</option>
            <option value='rtgs'>RTGS</option>
            <option value='imps'>IMPS</option>
            <option value='netbanking'>NetBanking</option>
        </select>

        <MDBInput className='m-2 p-2' label='Amount' id='form1' type='text' />
        <MDBBtn className='me-1' color='success'>
        Continue
      </MDBBtn>
      </div>
      
             
    
</Container>
</Card>

    )
}
export const Transfer = () => {
  return (
    <div className='background-container'>
    <div className='w-100 m-0'>
    <Container>
            <Row>
                <Col md={6}>
                  <DetailsCard />
                  <SummaryCard />
                  
                </Col>
                <Col md={6}>
                    {/* Content for the right column */}
                    
                        <Col2/>
                        <br></br>
                        <PayeeBoard/>
                
                </Col>
            </Row>
        </Container>
        </div>
        </div>
    
);

}

