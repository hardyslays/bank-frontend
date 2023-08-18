import React, {useEffect, useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
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
            </Col>
        </Row>
    </div>
  )
}
