import React, {useEffect, useState} from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

import { SummaryCard } from './SummaryCard';
import { DetailsCard } from './DetailsCard';
import { PayeeBoard } from './PayeeBoard';

const SideArea = () => {

    const [active, setactive] = useState('all')

    const handleClick = (val) => {
        if(val === active){
            return
        }
        setactive(val)
    }

    return (
        <Card className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}> 
        <Container className='py-3'>
        <p className='fs-3 mt-2 ms-3'>Recent Transactions</p>
        <MDBTabs className='mb-3 ms-3 fs-0.75'>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleClick('all')} active={active === 'all'} className={active === 'all' ? 'active-link' : ''}>
                All
            </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleClick('credit')} active={active === 'credit'} className={active === 'credit' ? 'active-link' : ''}>
                Credit
            </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleClick('debit')} active={active === 'debit'}  className={active === 'debit' ? 'active-link' : ''}>
                Debit
            </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
            <MDBTabsPane show={active === 'all'}>
                <MDBContainer>
                {[
                    {icon:'icon', ac: 'Account 1', amount: 'Rs 1000'},
                    {icon:'icon', ac: 'Account 2', amount: 'Rs 500'},
                    {icon:'icon', ac: 'Account 3', amount: 'Rs 200'},
                    {icon:'icon', ac: 'Account 1', amount: 'Rs 1000'},
                ].map((item, index) => {
                    return(
                        <>
                        <MDBRow key={index} className='mb-2 fs-6'>
                            <MDBCol size={2} className='text-end'>
                                {item.icon}
                            </MDBCol>
                            <MDBCol  size={6}>
                                {item.ac}
                            </MDBCol>
                            <MDBCol className='text-end'>
                                {item.amount}
                            </MDBCol>
                        </MDBRow>
                        <div className='border-bottom border-secondary border-2 mb-2'></div>
                        </>
                        )
                    })}
                </MDBContainer> 
            </MDBTabsPane>
            <MDBTabsPane show={active === 'credit'}>
            <MDBContainer>
                {[
                    {icon:'icon', ac: 'Account 1', amount: 'Rs 1000'},
                    {icon:'icon', ac: 'Account 3', amount: 'Rs 200'}
                ].map((item, index) => {
                    return(
                        <>
                        <MDBRow key={index} className='mb-2 fs-6'>
                            <MDBCol size={2} className='text-end'>
                                {item.icon}
                            </MDBCol>
                            <MDBCol  size={6}>
                                {item.ac}
                            </MDBCol>
                            <MDBCol className='text-end'>
                                {item.amount}
                            </MDBCol>
                        </MDBRow>
                        <div className='border-bottom border-secondary border-2 mb-2'></div>
                        </>
                        )
                    })}
                </MDBContainer> 
            </MDBTabsPane>
            <MDBTabsPane show={active === 'debit'}>
            <MDBContainer>
                {[
                    {icon:'icon', ac: 'Account 2', amount: 'Rs 500'},
                ].map((item, index) => {
                    return(
                        <>
                        <MDBRow key={index} className='mb-2 fs-6'>
                            <MDBCol size={2} className='text-end'>
                                {item.icon}
                            </MDBCol>
                            <MDBCol  size={6}>
                                {item.ac}
                            </MDBCol>
                            <MDBCol className='text-end'>
                                {item.amount}
                            </MDBCol>
                        </MDBRow>
                        <div className='border-bottom border-secondary border-2 mb-2'></div>
                        </>
                        )
                    })}
                </MDBContainer> 
            </MDBTabsPane>
        </MDBTabsContent>
        </Container>
        </Card>
        
    )
}

export const Dashboard = () => {
    

  return (
    <div className='background-container'>
    <div className='w-100 m-0'>
        <Container>
            <Row>
                <Col md={6}>
                
                    <DetailsCard />
                    <SummaryCard />
                </Col>
                <Col md={5}>
                    <SideArea />
                    <br></br>
                    <PayeeBoard />
                </Col>
            </Row>
        </Container>
    </div>
    </div>
  )
}
