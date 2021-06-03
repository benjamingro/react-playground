import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../css/AtmMachine.css';



function AtmMachineWithdrawAcceptance({ setMachineState_initial, withdrawAmount, accountBalance }) {


    return (
        <>
            <div className="row w-100 mb-2">
                <div className="col d-flex justify-content-center">
                    Thank you
                </div>
            </div>
            <p className="card-text text-secondary">Your withdrawal of <b className="text-dark">${withdrawAmount}</b> has been accepted</p>
            <p className="card-text text-secondary mb-0">Account balance </p>
            <p className="card-text d-flex justify-content-center bg-light border" style={{fontWeight:"bold"}}>
                ${accountBalance}
            </p>

            <div className="row w-100 text-primary clickArea">
                <div className="col" onClick={() => setMachineState_initial()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>

            </div>
            <div className="row w-100 text-primary clickArea">
                <div className="col-5" onClick={() => setMachineState_initial()}>
                    Home
                </div>

            </div>
        </>
    )
}

export default AtmMachineWithdrawAcceptance

