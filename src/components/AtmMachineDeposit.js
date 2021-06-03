import React from 'react';

import DepositComponent from './DepositComponent.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../css/AtmMachine.css';



function AtmMachineDeposit({ setMachineState_initial, setMachineState_withdraw, depositFunds }) {

    const acceptDeposit = (value) => {
        depositFunds(value); 
    }

    return (
        <>

            <p className="card-text">Enter the amount to deposit </p>
            <DepositComponent acceptDeposit={acceptDeposit}/>
            
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

