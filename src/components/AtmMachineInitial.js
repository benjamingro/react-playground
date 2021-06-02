import React from 'react';
import Button from 'react-bootstrap/Button';



function AtmMachineInitial({ setMachineState_accountBalance, setMachineState_withdraw, setMachineState_deposit }) {
    return (
        <>
            <p className="card-text">Welcome. Please select from the choices below.</p>

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

