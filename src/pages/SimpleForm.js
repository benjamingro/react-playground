import React from 'react';
import MyBasicForm from '../components/MyBasicForm.js';


class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
        return (
            <>
                <div className="row w-100 my-3">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 pl-4">
                        This is a React form created as part of the MIT xPRO Week 13 Coding Challenge: Experimenting With Formik.
                </div>
                    <div className="col-lg-2"></div>

                </div>
                <div className="row w-100 my-3">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 pl-4">
                        <MyBasicForm />
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </>

        );
    }
}

export default SimpleForm