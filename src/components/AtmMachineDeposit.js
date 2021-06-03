import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import Form from 'react-bootstrap/Form';

import { useFormik } from 'formik';
import * as yup from 'yup';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../css/AtmMachine.css';



function AtmMachineDeposit({ setMachineState_initial, setMachineState_withdraw, depositFunds }) {

    const [depositAmount, setDepositAmount] = React.useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`inside handleSubmit`);

        alert(`event.target.value = ${event.target.value}`);

        // alert(`depositing $${depositAmount}`);
        // depositFunds(depositAmount);
    }

    const handleChange = (event) => {
        // alert(`inside handleChange, depositAmount = $${depositAmount}`);
        // alert(`event.target.value = ${event.target.value}`);

        // setDepositAmount(event.target.value);
    }



    const schema = yup.object().shape({
        dollarAmount: yup.number()
            .positive()
            .required('please enter a value')
            .min(0),
    });

    const formik = useFormik({
        initialValues: {
          depositAmount: ''
        },
        // validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    return (
        <>

            <p className="card-text">Enter the amount to deposit </p>
            
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

