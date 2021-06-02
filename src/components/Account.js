import React from 'react';
import AtmMachine from './AtmMachine.js'

function Account(){
    const [accountBalance,setAccountBalance] = React.useState(0); 
    const [atmMachineState,setAtmMachineState] = React.useState('initialState'); // initialState, withdrawState, depositState, accountBalanceState

    const depositFunds = value => {
        setAccountBalance(accountBalance + value); 
    }
    const withdrawFunds = value => {
        setAccountBalance(accountBalance - value); 
    }
    const getAccountBalance = () => accountBalance; 



    return(
        <>
        </>
    )
}

export default Account

