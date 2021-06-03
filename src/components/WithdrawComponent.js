import React from 'react';
// import { Formik } from 'formik';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
// import Form.Group from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function WithdrawComponent({withdrawFunds,accountBalance}) {
    const schema = yup.object().shape({
        withdrawAmount: yup.number().typeError('must be a number')
            .required('required')
            .max(Number(accountBalance),'total amount must not exceed account balance')
            .positive('must be positive')
            .integer('must be an integer'),
            
    });

    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ withdrawAmount: '' }}
                onSubmit={values => {
                    console.log(values);
                    withdrawFunds(values.withdrawAmount); 
                }}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ errors, touched }) => (
                    <Form>
                        {/* <Field name="withdrawAmount" /> */}
                        <InputGroup className="d-flex justify-content-center">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Field name="withdrawAmount" style={{maxWidth:'80px',textAlign:'end'}}/>
                            <InputGroup.Append>
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <div className="row w-100 mb-2">
                            {errors.withdrawAmount && touched.withdrawAmount ? (

                                <div className="col text-danger d-flex justify-content-center">{errors.withdrawAmount}</div>

                            ) : <div className="col">&nbsp;</div>}
                        </div>
                        <div className="row w-100">
                            <div className="col d-flex justify-content-center">
                                <Button variant="primary" type="submit" >
                                    Withdraw
                                </Button>
                            </div>
                        </div>

                    </Form>
                )}

            </Formik>
        </>
    )
}

export default WithdrawComponent

