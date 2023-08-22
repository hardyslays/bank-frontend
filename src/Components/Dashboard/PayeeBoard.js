import React, {useState, useEffect} from "react";
import { MDBCard, MDBCardBody, MDBCardText, MDBBtn, MDBCardFooter, MDBModal, MDBModalTitle, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import { Container, Form, Toast } from "react-bootstrap";
import { getPayees, postAddPayee } from "../../Services/Api";
import Auth from "../../Services/Auth";

const AddPayeeModal = ({updatePayee}) => {

    const [visible, setVisible] = useState(false);
    const [form, setForm] = useState({});
    const [err, setErr] = useState({});


    const changeVisibility = () => setVisible(!visible)
    const setField = (field, value) => setForm({...form, [field]:value})
    const clearField = () => setForm({'name': '', 'acNumber': '', 'nickname':''})

    const isValid = (form) => {
        setErr({})

        if(!form.name){
            setErr({...err, 'name': 'Name is required'})
            return 0;
        }
        if(form.acNumber.length !== 14){
            setErr({...err, 'acNumber': 'Account Number must be 14 digits'})
            return 0;
        }        

        return 1;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form)
        if(!isValid(form))return;
        
        postAddPayee(form)
        .then(data => {
            if(data === 'error')
            {
                console.log('error')
            }
            else{
                console.log(data)

                updatePayee()

                clearField()
                setVisible(false)
            }
        })
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

                        <div id='nameErr' className='ms-2 mb-2 form-text text-danger' style={{display:(!!err.name)?'':'none'}}>{err.name}</div>
                        <MDBInput className={['mb-4', (!!err.name)?'is-invalid':''].join(' ')} type='text' id='name' label='Payee Name' value={form.name} onChange={e => setField('name', e.target.value)}aria-describedby='nameErr' required/>

                        <div id='acNumberErr' className='ms-2 mb-2 form-text text-danger' style={{display:(!!err.acNumber)?'':'none'}}>{err.acNumber}</div>

                        <MDBInput className={['mb-4', (!!err.acNumber)?'is-invalid':''].join(' ')} type='number' id='acNumber' label='Payee Account Number' value={form.acNumber} onChange={e => setField('acNumber', e.target.value)} required/>
                        

                        <div id='nicknameErr' className='ms-2 mb-2 form-text text-danger' style={{display:(!!err.nickname)?'':'none'}}>{err.nickname}</div>

                        <MDBInput className={['mb-4', (!!err.nickname)?'is-invalid':''].join(' ')} type='text' id='nickname' label='Payee Nickname' value={form.nickname} onChange={e => setField('nickname', e.target.value)}/>

                    </MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn onClick={handleSubmit}>Add Payee</MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        </>
    )
}

export const PayeeBoard = () => {

    const [payees, setPayees] = useState([])

    useEffect(() => {
        // getPayees()

        const func = async() => {
            const res = await fetch('http://localhost:8080/api/netbanking/beneficiary/hardyslays',
            {
                method:'get',
                headers:{
                    'Authorization': `Bearer ${Auth().getToken()}`
                }
            })
            const data = await res.json()
            console.log(data)
            
                setPayees(data)
        }
        func()
    },[])

    const updatePayee = () => {
        getPayees()
        .then(data => {
            if(data === 'error'){
                console.log('error')
            }
            else{
                console.log(data)
                setPayees(data)
            }
        })
    }

    return(
        <Container >

            <MDBCard className=''>
                <MDBCardText className='fs-4 pt-3 ps-5'>Your Payees</MDBCardText>
                <MDBCardBody className='d-flex justify-content-around'>
                {payees.map((name, i) => {
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
                {(payees.length === 0) && <div>
                    </div>} 
                </MDBCardBody>
                
                <MDBCardFooter className='d-flex justify-content-center'>
                    <AddPayeeModal updatePayee={updatePayee}/>
                </MDBCardFooter>
            </MDBCard>
        </Container>
    )
}