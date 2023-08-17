import React, {useEffect} from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import CanvasJSReact from '@canvasjs/react-charts';

const TransactionChart = () => {
    var CanvasJS= CanvasJSReact.CanvasJS;
    var CanvasJSChart =  CanvasJSReact.CanvasJS;

    let opts = {
        animationEnabled: true,
        axisX: {
            title: 'Dates'
        },
        axisY:{
            title: 'Balance',
            prefix: 'Rs'
        },
        dataPoints: [
            
        ]
    }

    return(
        <div>
            chart
        </div>
    )
}

const summaryCard = () => {
    return (
        <Container style={{border:'solid 1px blue'}}>
            <Row>
                <MDBCard className='m-3 p-2'>
                    <MDBCardText className='pt-3 px-4 fs-4'>TOTAL BALANCE</MDBCardText>
                    <MDBCardTitle className='pt-1 text-center' tag='h3'>Rs 1,000,000</MDBCardTitle>
                    <MDBCardBody>
                        <Row className='fs-6  fw-bold'>
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
                    <MDBCardText className='pt-3 px-4 fs-4'>Recent Transaction Graph</MDBCardText>
                    {TransactionChart()}
                </MDBCard>
            </Row>
        </Container>
    )
}

export const Dashboard = () => {
    

  return (
    <div className='w-100 m-0' style={{border:'solid 1px red'}}>
        <h3 className='p-3'>DashBoard</h3>
        <Row>
            <Col sm={8}>
                {summaryCard()}
            </Col>
            <Col>
                Transaction
            </Col>
        </Row>
        <Row>
            Other
        </Row>
    </div>
  )
}
