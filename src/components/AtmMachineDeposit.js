import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';

import Form from 'react-bootstrap/Form';

import NumPad from 'react-numpad';
// import NumericInput  from 'numeric-keyboard'; 

// import NumericInput from 'react-bootstrap/NumericInput';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../css/AtmMachine.css';



function AtmMachineDeposit({ setMachineState_initial, setMachineState_withdraw, depositFunds }) {

    const submitDeposit = (event) => {
        event.preventDefault();
    }

    const handleKeyPress = (event)=> {
        alert("inside handleKeyPress"); 
    }

    return (
        <>

            <p className="card-text">Enter the amount to deposit </p>

            {/* <NumericInput type="number" placeholder="touch to input"  /> */}
            {/* <NumPad /> */}
            {/* <NumPad.Number
                onChange={(value) => { console.log('value', value) }}
                label={'Total'}
                placeholder={'my placeholder'}
                value={100}
                decimal={2}
            /> */}
            <Form>
                <Form.Group>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount (to the nearest dollar)" />

                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
                <div className="row w-100">
                    <div className="col d-flex justify-content-center">
                        <Button variant="success" type="submit" onSubmit={submitDeposit}>
                            Deposit
                        </Button>
                    </div>
                </div>
            </Form>

            {/* <div className="row w-100">
                <div className="col d-flex justify-content-center">
                    <Button variant="primary" onClick={() => console.log('clicked deposit')} className="">Deposit</Button>{' '}

                </div>
            </div> */}
            <div className="row w-100 text-primary clickArea">
                <div className="col" onClick={() => setMachineState_initial()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="col d-flex justify-content-end" onClick={() => setMachineState_withdraw()}>
                    <FontAwesomeIcon icon={faArrowRight} />

                </div>
            </div>
            <div className="row w-100 text-primary clickArea">
                <div className="col-5" onClick={() => setMachineState_initial()}>
                    Back
                </div>
                <div className="col d-flex justify-content-end" onClick={() => setMachineState_withdraw()}>
                    Withdraw $
                </div>
            </div>
        </>
    )
}

export default AtmMachineDeposit

