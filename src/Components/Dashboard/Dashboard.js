import React, {useEffect, useState} from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBRow, MDBCol, MDBContainer, MDBBadge, MDBBtn, MDBCardFooter, MDBModal, MDBModalTitle, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput } from 'mdb-react-ui-kit';
import CanvasJSReact from '@canvasjs/react-charts';

const TransactionChart = (dataPoints) => {
    var CanvasJSChart =  CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: true,
        axisX: {
          title: 'Date',
          valueFormatString: 'MMM DD'
        },
        axisY: {
          title: 'Balance'
        },
        data: [{
          type: 'spline',
          markerSize: 10,
          xValueFormatString: 'MMM DD',
          yValueFormatString: '#,##0.00',
          dataPoints: dataPoints
        }]
      }

    return(
        <div className='px-5'>
            <CanvasJSChart options={options}/>
        </div>
    )
}

const summaryCard = () => {
    const data = [
        { x: new Date('2023-08-10'), y: 1200 },
        { x: new Date('2023-08-11'), y: 1250 },
        { x: new Date('2023-08-12'), y: 1220 },
        { x: new Date('2023-08-13'), y: 1250 },
        { x: new Date('2023-08-14'), y: 1220 },
        { x: new Date('2023-08-18'), y: 150 },
        { x: new Date('2023-08-23'), y: 10 },
    ]
    

    return (
        <Container>
            <Row>
                <MDBCard className='m-3 p-2'>
                    <MDBCardText className='pt-3 px-4 fs-4'>TOTAL BALANCE</MDBCardText>
                    <MDBCardTitle className='pt-1 text-center' tag='h4'>Rs 1,000,000</MDBCardTitle>
                    <MDBCardBody>
                        <Row className='fs-7  fw-bold'>
                            <Col>
                                <div>
                                    Credit
                                </div>
                                <div>
                                    Rs 2,000,000
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    Debit
                                </div>
                                <div>
                                    Rs 1,000,000
                                </div>
                            </Col>
                        </Row>
                    </MDBCardBody>
                </MDBCard>
            </Row>
            <Row>
                <MDBCard className='m-3 p-2'>
                    <MDBCardText className='pt-3 px-4 fs-4'>SUMMARY</MDBCardText>
                    {TransactionChart(data)}
                </MDBCard>
            </Row>
        </Container>
    )
}

const SideArea = () => {

    const [active, setactive] = useState('all')

    const handleClick = (val) => {
        if(val === active){
            return
        }
        setactive(val)
    }

    return (
        <div className='py-3 ps-5 me-5'>
        <p className='fs-3'>Recent Transactions</p>
        <MDBTabs className='mb-4 fs-0.75'>
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
                    {icon:'icon', ac: 'Account 3', amount: 'Rs 200'}
                ].map((item, index) => {
                    return(
                        <>
                        <MDBRow key={index} className='mb-3 fs-5'>
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
                        <div className='border-bottom border-secondary border-2 mb-3'></div>
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
                        <MDBRow key={index} className='mb-3 fs-5'>
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
                        <div className='border-bottom border-secondary border-2 mb-3'></div>
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
                        <MDBRow key={index} className='mb-3 fs-5'>
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
                        <div className='border-bottom border-secondary border-2 mb-3'></div>
                        </>
                        )
                    })}
                </MDBContainer> 
            </MDBTabsPane>
        </MDBTabsContent>
        </div>
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
        <>
        <MDBCard className='m-5'>
            <MDBCardBody className='fs-5'>YOUR PAYEES</MDBCardBody>
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
        </>
    )
}

export const Dashboard = () => {
    

  return (
    <div className='w-100 m-0'>
        <h3 className='pt-4 ps-5'>DashBoard</h3>
        <Row>
            <Col sm={7} className='ps-5'>
                {summaryCard()}
            </Col>
            <Col>
                <SideArea />
                <PayeeBoard />
            </Col>
        </Row>
    </div>
  )
}
