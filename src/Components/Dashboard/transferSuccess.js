import { MDBCard, MDBCardHeader, MDBCardText, MDBCardBody, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit'
import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router'
import { getTransactionById } from '../../Services/Api'
import { stringToDate } from '../../Utils/Date'

export const TransferSuccess = () => {

    const navigate = useNavigate()

    const [loaded, setLoaded] = useState(false)
    const {id} = useParams({})
    const [data, setData] = useState()

    useEffect(() => {
        getTransactionById(id)
        .then(res => res.json())
        .then(trans => setData(trans))
        .then( () => {
            setLoaded(true)
        console.log(data)
        })
    }, [])

    return (
        <div className="d-flex justify-content-center align-items-center">
            {loaded &&
            <MDBCard className="w-25 m-3 mt-5 p-3 text-center">
                <MDBCardHeader className='fs-2'>TRANSFER SUCCESSFUL</MDBCardHeader>
                <p className='fs-5'>{id}</p>
                <MDBCardBody>
                    <MDBCardText>
                        <div className='d-flex justify-content-between px-5'>
                            <p className='fs-5 text-left'>Status</p>
                            <p className='fs-5 text-right'>Success</p>
                        </div>
                    </MDBCardText>
                    <MDBCardText>
                        <div className='d-flex justify-content-between px-5'>
                            <p className='fs-5 text-left'>Timestamp</p>
                            <p className='fs-5 text-right'>{data.timestamp}</p>
                        </div>
                    </MDBCardText>
                    <MDBCardText>
                        <div className='d-flex justify-content-between px-5'>
                            <p className='fs-5 text-left'>From Account</p>
                            <p className='fs-5 text-right'>{data.fromAccount}</p>
                        </div>
                    </MDBCardText>
                    <MDBCardText>
                        <div className='d-flex justify-content-between px-5'>
                            <p className='fs-5 text-left'>To Account</p>
                            <p className='fs-5 text-right'>{data.beneficiaryAccount}</p>
                        </div>
                    </MDBCardText>
                    <MDBCardText>
                        <div className='d-flex justify-content-between px-5'>
                            <p className='fs-5 text-left'>Amount</p>
                            <p className='fs-5 text-right'>{data.amount}</p>
                        </div>
                    </MDBCardText>
                    <MDBCardText>
                        <div className='d-flex justify-content-between px-5'>
                            <p className='fs-5 text-left'>Transfer Type</p>
                            <p className='fs-5 text-right'>{data.methodOfPayment}</p>
                        </div>
                    </MDBCardText>

                </MDBCardBody>
                <MDBCardFooter>
                    <MDBBtn onClick={() => navigate('/dashboard')}>Go Back to Dashboard</MDBBtn>
                </MDBCardFooter>
            </MDBCard>
        }
        </div>
    )
}
