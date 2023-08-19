import React from 'react'
import { MDBCard , MDBCardText, MDBCardBody, MDBInput} from 'mdb-react-ui-kit'

export const DetailsCard = () => {
    return (
        <MDBCard className='m-3 mt-4 p-2 bg-secondary shadow-1-strong text-white'>
            <MDBCardText className='pt-3 px-4 fs-2 '>Savings Account</MDBCardText>
            <MDBCard className='m-1 pt-3'>
            
                <div className='d-flex justify-content-around align-items-center'>
                <p className='fs-3'>A/C balance</p>
                <p className='fs-2'>INR 1,80,379</p>
                </div>
            <div className="border-bottom border-secondary border-2 mb-3"></div>
            <div className="d-flex justify-content-around" >
                <div className="account-number text-right" >
                    <MDBCardText className='pt-1 fs-5' style={{ marginTop: '0', marginBottom: '0', padding: '0' }}>A/C Number</MDBCardText>
                    <MDBCardText className='pt-0 fs-6 ' style={{ marginTop: '0', marginBottom: '0', padding: '0' }}>192378277487</MDBCardText>

                </div>
                <div className="account-owner text-right pb-2">
                    <MDBCardText className='pt-1 fs-5' style={{ marginTop: '0', marginBottom: '0', padding: '0' }}>A/C Owner</MDBCardText>
                    <MDBCardText className='pt-0 fs-6' style={{ marginTop: '0', marginBottom: '0', padding: '0' }}>Abc Xyz</MDBCardText>
                </div>
            </div>
            </MDBCard>
        </MDBCard>
    )
}
