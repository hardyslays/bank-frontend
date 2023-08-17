import React, {useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    

  return (
    <div className='w-100 m-0' style={{border:'solid 1px red'}}>
        <h3>DashBoard</h3>
        <Row>
            <Col>
                Summary
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
