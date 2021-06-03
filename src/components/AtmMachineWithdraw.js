import React from 'react';


import WithdrawComponent from './WithdrawComponent.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../css/AtmMachine.css';



function AtmMachineWithdraw({ setMachineState_initial, withdrawFunds, accountBalance }) {

    const myWithdrawFunds = (value) => {
        withdrawFunds(value); 
    }

    return (
        <>

            <p className="card-text">Enter the amount to withdraw </p>
            <WithdrawComponent withdrawFunds={myWithdrawFunds} accountBalance={accountBalance}/>
            
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

export default AtmMachineWithdraw

