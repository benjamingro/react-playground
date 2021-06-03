import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import Form from 'react-bootstrap/Form';

import { Formik } from 'formik';
import * as yup from 'yup';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../css/AtmMachine.css';



function AtmMachineDeposit({ setMachineState_initial, setMachineState_withdraw, depositFunds }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`depositing $${event.target.value}`);
        // depositFunds(event.target.value); 
    }

    const schema = yup.object().shape({
        dollarAmount: yup.number()
            .positive()
            .required('please enter a value')
            .min(0)

        // firstName: yup.string().required(),
        // lastName: yup.string().required(),
        // username: yup.string().required(),
        // city: yup.string().required(),
        // state: yup.string().required(),
        // zip: yup.string().required(),
        // terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });


    return (
        <>

            <p className="card-text">Enter the amount to deposit </p>
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, touched, isValid, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    aria-label="Amount (to the nearest dollar)"
                                    name="dollarAmount"
                                    isValid={touched.dollarAmount && !errors.dollarAmount}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.dollarAmount}
                                </Form.Control.Feedback>
                                <InputGroup.Append>
                                    <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>

                        </Form.Group>
                        <div className="row w-100">
                            <div className="col d-flex justify-content-center">
                                <Button variant="success" type="submit" >
                                    Deposit
                            </Button>
                            </div>
                        </div>
                    </Form>
                )}

            </Formik>


            {/* <div className="row w-100">
                <div className="col d-flex justify-content-center">
                    <Button variant="primary" onClick={() => console.log('clicked deposit')} className="">Deposit</Button>{' '}

                </div>
            </div> */}
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

