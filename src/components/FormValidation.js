import React from 'react';
// import { Formik } from 'formik';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
// import Form.Group from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function FormValidation() {
    const schema = yup.object().shape({
        depositAmount: yup.number().typeError('must be a number')
            .required('required')
            .positive('must be positive')
            .integer('must be an integer'),
    });

    return (
        <>
            <Formik
                validationSchema={schema}
                initialValues={{ depositAmount: '' }}
                onSubmit={values => {
                    console.log(values);
                }}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="depositAmount" />
                        {errors.depositAmount && touched.depositAmount ? (

                            <div>{errors.depositAmount}</div>

                        ) : null}
                        {/* <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Amount (to the nearest dollar)" />
                                <InputGroup.Append>
                                    <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup> */}
                        {/* <Form.Group controlId="formDepositAmount">
                            
                        </Form.Group> */}
                        <Button variant="primary" type="submit" >
                            Deposit
                        </Button>
                    </Form>
                )}

            </Formik>
        </>
    )
}

export default FormValidation

