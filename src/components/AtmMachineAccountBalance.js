import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

import '../css/AtmMachine.css';



function AtmMachineAccountBalance({ setMachineState_initial, setMachineState_withdraw, accountBalance }) {


    return (
        <>
            
            <p className="card-text">Your account balance is </p>
            <p className="card-text d-flex justify-content-center bg-light border">${accountBalance}</p>
            <div className="row w-100 text-primary clickArea">
                <div className="col" onClick={()=>setMachineState_initial()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="col d-flex justify-content-end" onClick={()=>setMachineState_withdraw()}>
                    <FontAwesomeIcon icon={faArrowRight} />

                </div>
            </div>
            <div className="row w-100 text-primary clickArea">
                <div className="col-5" onClick={()=>setMachineState_initial()}>
                    Back
                </div>
                <div className="col d-flex justify-content-end" onClick={()=>setMachineState_withdraw()}>
                    Withdraw $
                </div>
            </div>
        </>
    )
}

export default AtmMachineAccountBalance

