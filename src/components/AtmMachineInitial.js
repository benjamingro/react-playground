import React from 'react';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';



function AtmMachineInitial({ setMachineState_accountBalance, setMachineState_withdraw, setMachineState_deposit }) {
    return (
        <>
            <div className="row w-100 mb-3">
                <div className="col d-flex justify-content-center">
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#ff0018"}} className="mt-1"/>&nbsp;
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#ffa52c"}} className="mt-1"/>&nbsp;
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#ffff41"}} className="mt-1"/>&nbsp;
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#008018"}} className="mt-1"/>&nbsp;
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#0000f9"}} className="mt-1"/>&nbsp;
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#86007d"}} className="mt-1"/>&nbsp;
                </div>
            </div>
            <p className="card-text mb-4">Welcome. Please select from the choices below.</p>

            <div className="row w-100">
                <div className="col-4 d-flex justify-content-center" >
                    <Button variant="primary" onClick={()=>setMachineState_accountBalance()} className="px-1">Account balance</Button>{' '}

                </div>
                <div className="col-4 d-flex justify-content-center">
                    <Button variant="warning" onClick={()=>setMachineState_deposit()} className="px-1">Deposit funds</Button>{' '}

                </div>
                <div className="col-4 d-flex justify-content-center">
                    <Button variant="success" onClick={()=>setMachineState_withdraw()} className="px-1">Withdraw funds</Button>{' '}

                </div>
            </div>

        </>
    )
}

export default AtmMachineInitial

