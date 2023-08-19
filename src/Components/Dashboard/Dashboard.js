import React, {useEffect, useState} from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBRow, MDBCol, MDBContainer, MDBBadge, MDBBtn, MDBCardFooter, MDBModal, MDBModalTitle, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput } from 'mdb-react-ui-kit';

import { SummaryCard } from './SummaryCard';
import { DetailsCard } from './DetailsCard';

const SideArea = () => {

    const [active, setactive] = useState('all')

    const handleClick = (val) => {
        if(val === active){
            return
        }
        setactive(val)
    }

    return (
        <Container className='py-3'>
        <p className='fs-3 mt-2 ms-3'>Recent Transactions</p>
        <MDBTabs className='mb-3 ms-3 fs-0.75'>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleClick('all')} active={active === 'all'}>
                All
            </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleClick('credit')} active={active === 'credit'}>
                Credit
            </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
            <MDBTabsLink onClick={() => handleClick('debit')} active={active === 'debit'}>
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
    )
}

const AddPayeeModal = () => {

    const [visible, setVisible] = useState(false);
    const [form, setForm] = useState({});

    const changeVisibility = () => setVisible(!visible)
    const setField = (field, value) => setForm({...form, [field]:value})
    const clearField = () => setForm({'name': '', 'acNumber': '', 'nickname':''})

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form)
        
        clearField()
        setVisible(false)
    }

    return(
        <>
        <MDBBtn onClick={changeVisibility}>Add New Payee</MDBBtn>

        <MDBModal tabIndex='-1' show={visible} setShow={setVisible}>
            <MDBModalDialog centered>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Add A New Payee</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={changeVisibility}></MDBBtn>
                    </MDBModalHeader>

                    <MDBModalBody>
                        <Form id='payee-form' onSubmit={handleSubmit}>
                            <MDBInput className='mb-4' type='text' id='name' label='Payee Name' value={form.name} onChange={e => setField('name', e.target.value)} required/>
                            <MDBInput className='mb-4' type='number' id='acNumber' label='Payee Account Number' value={form.acNumber} onChange={e => setField('acNumber', e.target.value)} required/>
                            <MDBInput className='mb-4' type='text' id='nickname' label='Payee Nickname' value={form.nickname} onChange={e => setField('nickname', e.target.value)}/>
                        </Form>
                    </MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn form='payee-form' type='submit'>Add Payee</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        </>
    )
}

const PayeeBoard = () => {
    return(
        <Container className='position-absolute' style={{bottom:'2vw', width: '35vw'}}>
            <MDBCard className=''>
                <MDBCardText className='fs-4 pt-3 ps-5'>Your Payees</MDBCardText>
                <MDBCardBody className='d-flex justify-content-around'>
                    {['Account 1', 'Account 2', "Account 3"].map((name, i) => {
                        return(
                            <div>
                            <img className='shadow-4'
                            src='assets/default-avatar.png'
                            alt='avatar'
                            style={{width: '80px'}}
                            />
                            <p className='fs-6 text-center'>{name}</p>
                            </div>
                        )
                    })} 
                </MDBCardBody>
                
                <MDBCardFooter className='d-flex justify-content-center'>
                    <AddPayeeModal />
                </MDBCardFooter>
            </MDBCard>
        </Container>
    )
}

export const Dashboard = () => {
    

  return (
    <div className='w-100 m-0'>
        <Container>
            <Row>
                <Col md={6}>
                    <DetailsCard />
                    <SummaryCard />
                </Col>
                <Col md={5}>
                    <SideArea />
                    <PayeeBoard />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
