import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import Form from 'react-bootstrap/Form';

import DepositComponent from './DepositComponent.js'


import { useFormik } from 'formik';
import * as yup from 'yup';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../css/AtmMachine.css';



function AtmMachineDepositAcceptance({ setMachineState_initial, depositAmount, accountBalance }) {


    return (
        <>
            <div className="row w-100 mb-2">
                <div className="col d-flex justify-content-center">
                    Thank you
                </div>
            </div>
            <p className="card-text text-secondary">Your deposit of <b className="text-dark">${depositAmount}</b> has been accepted</p>
            <p className="card-text text-secondary mb-0">Account balance </p>
            <p className="card-text d-flex justify-content-center bg-light border" style={{fontWeight:"bold"}}>
                ${accountBalance}
            </p>

            <div className="row w-100 text-primary clickArea">
                <div className="col" onClick={() => setMachineState_initial()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                {/* <div className="col d-flex justify-content-end" onClick={() => setMachineState_withdraw()}>
                    <FontAwesomeIcon icon={faArrowRight} />

                </div> */}
            </div>
            <div className="row w-100 text-primary clickArea">
                <div className="col-5" onClick={() => setMachineState_initial()}>
                    Home
                </div>
                {/* <div className="col d-flex justify-content-end" onClick={() => setMachineState_withdraw()}>
                    Withdraw $
                </div> */}
            </div>
        </>
    )
}

export default AtmMachineDepositAcceptance

