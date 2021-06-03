import React from 'react';
import AtmMachineInitial from './AtmMachineInitial.js'
import AtmMachineAccountBalance from './AtmMachineAccountBalance.js'
import AtmMachineDeposit from './AtmMachineDeposit.js'
import AtmMachineDepositAcceptance from './AtmMachineDepositAcceptance.js'
import AtmMachineWithdraw from './AtmMachineWithdraw.js'
import AtmMachineWithdrawAcceptance from './AtmMachineWithdrawAcceptance.js'


import '../css/AtmMachine.css';

function AtmMachine() {
    const [accountBalance, setAccountBalance] = React.useState(0);
    const [atmMachineState, setAtmMachineState] = React.useState('initialState'); // initialState, withdrawState, depositState, accountBalanceState, depositAcceptanceState, withdrawAcceptanceState
    const [depositAmount, setDepositAmount] = React.useState(0);
    const [withdrawAmount, setWithdrawAmount] = React.useState(0);


    const depositFunds = value => {
        setAccountBalance(Number(accountBalance) + Number(value));
        setDepositAmount(Number(value));
        setAtmMachineState_depositAcceptance();
    }
    const withdrawFunds = value => {
        setAccountBalance(Number(accountBalance) - Number(value));
        setWithdrawAmount(Number(value));
        setAtmMachineState_withdrawAcceptance();
    }
    // const getAccountBalance = () => accountBalance;

    // const setAtmMachineStateHandler = value => setAtmMachineState(value); 

    const setAtmMachineState_initial = () => setAtmMachineState('initialState');
    const setAtmMachineState_withdraw = () => setAtmMachineState('withdrawState');
    const setAtmMachineState_deposit = () => setAtmMachineState('depositState');
    const setAtmMachineState_accountBalance = () => setAtmMachineState('accountBalanceState');
    const setAtmMachineState_depositAcceptance = () => setAtmMachineState('depositAcceptanceState');
    const setAtmMachineState_withdrawAcceptance = () => setAtmMachineState('withdrawAcceptanceState');


    return (
        <>
            <div className="card atmMachineFont">
                <div className="card-header d-flex justify-content-center atmMachineTitleStyles py-1">
                    ATM Machine&nbsp;
                    


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
                    {atmMachineState === 'depositAcceptanceState' &&
                        <AtmMachineDepositAcceptance
                            setMachineState_initial={setAtmMachineState_initial}
                            depositAmount={depositAmount}
                            accountBalance={accountBalance}

                        />}
                    {atmMachineState === 'withdrawState' &&
                        <AtmMachineWithdraw
                            setMachineState_initial={setAtmMachineState_initial}
                            withdrawFunds={withdrawFunds}
                            accountBalance={accountBalance}

                        />}
                    {atmMachineState === 'withdrawAcceptanceState' &&
                        <AtmMachineWithdrawAcceptance
                            setMachineState_initial={setAtmMachineState_initial}
                            withdrawAmount={withdrawAmount}
                            accountBalance={accountBalance}

                        />}

                </div>
            </div>
        </>
    )
}

export default AtmMachine

