import React from 'react';
import AtmMachineInitial from './AtmMachineInitial.js'
import AtmMachineAccountBalance from './AtmMachineAccountBalance.js'
import AtmMachineDeposit from './AtmMachineDeposit.js'


import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/AtmMachine.css'; 

function AtmMachine() {
    const [accountBalance, setAccountBalance] = React.useState(0);
    const [atmMachineState, setAtmMachineState] = React.useState('initialState'); // initialState, withdrawState, depositState, accountBalanceState

    const depositFunds = value => {
        setAccountBalance(accountBalance + value);
    }
    const withdrawFunds = value => {
        setAccountBalance(accountBalance - value);
    }
    const getAccountBalance = () => accountBalance;

    // const setAtmMachineStateHandler = value => setAtmMachineState(value); 

    const setAtmMachineState_initial = () => setAtmMachineState('initialState');
    const setAtmMachineState_withdraw = () => setAtmMachineState('withdrawState');
    const setAtmMachineState_deposit = () => setAtmMachineState('depositState');
    const setAtmMachineState_accountBalance = () => setAtmMachineState('accountBalanceState');


    return (
        <>
            <div className="card atmMachineFont">
                <div className="card-header d-flex justify-content-center atmMachineTitleStyles py-1">
                    ATM Machine&nbsp;
                    {/* <FontAwesomeIcon icon={faDollarSign} style={{color:"#ff0018",fontSize:"small"}} className="mt-1"/>&nbsp;
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#ffa52c",fontSize:"small"}} className="mt-1"/>&nbsp;
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#ffff41",fontSize:"small"}} className="mt-1"/>&nbsp;
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#008018",fontSize:"small"}} className="mt-1"/>&nbsp;
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#0000f9",fontSize:"small"}} className="mt-1"/>&nbsp;
                    <FontAwesomeIcon icon={faDollarSign} style={{color:"#86007d",fontSize:"small"}} className="mt-1"/>&nbsp; */}


                </div>
                <div className="card-body screenColor">
                    {atmMachineState === 'initialState' &&
                        <AtmMachineInitial
                            setMachineState_withdraw={setAtmMachineState_withdraw}
                            setMachineState_deposit={setAtmMachineState_deposit}
                            setMachineState_accountBalance={setAtmMachineState_accountBalance}

                        />}
                    {atmMachineState === 'accountBalanceState' &&
                        <AtmMachineAccountBalance
                            setMachineState_initial={setAtmMachineState_initial}
                            setMachineState_withdraw={setAtmMachineState_withdraw}
                            accountBalance={accountBalance}

                        />}
                    {atmMachineState === 'depositState' &&
                        <AtmMachineDeposit
                            setMachineState_initial={setAtmMachineState_initial}
                            setMachineState_withdraw={setAtmMachineState_withdraw}
                            depositFunds={depositFunds}

                        />}

                </div>
            </div>
        </>
    )
}

export default AtmMachine

