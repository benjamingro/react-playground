import React from 'react';

import PlaygroundComponent from '../components/PlaygroundComponent.js';


class MyFirstComponents extends React.Component {
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
                <div className="row w-100 mt-3 pl-1">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        This is a learning playground for my very first React components. I am starting out brand new to React, so these components are very basic.
                    </div>
                    <div className="col-lg-3"></div>

                </div>
                <div className="row w-100 my-3 pl-1">
                    <div className="col-lg-1">
                        &nbsp;
                    </div>
                    <div className="col-lg-10">
                        <div className="row w-100">

                            <PlaygroundComponent
                                componentname="HNSearch"
                                componenttitle="Hacker News Search"
                                componenttext="This is a search button created for searching Hacker News.  "
                                componentwidth="6"
                            />
                            <PlaygroundComponent
                                componentname="AtmMachine"
                                componenttitle="AtmMachine Component"
                                componenttext="This component was created from the MIT xPRO Week 15 ATM Machine lesson.  "
                            />
                            <PlaygroundComponent
                                componentname="WithdrawComponent"
                                componenttitle="Withdraw Component"
                                componenttext="This component is similar to the DepositComponent with an additional validation criterion added for account balance ($100)."
                            />
                            <PlaygroundComponent
                                componentname="DepositComponent"
                                componenttitle="Deposit Component"
                                componenttext="This component was created as a simple example of form validation with Formik, Yup, and React-Bootstrap. It is a building block for the MIT xPRO Week 15 ATM Machine lesson "
                            />
                            <PlaygroundComponent
                                componentname="ToDoComponent"
                                componenttitle="ToDo Component"
                                componenttext="This component was created from the MIT xPRO Week 14 ToDo List lesson.  "
                            />
                            <PlaygroundComponent
                                componentname="MyBasicForm"
                                componenttitle="MyBasicForm Component"
                                componenttext="This is a React form created as part of the MIT xPRO Week 13 Coding Challenge: Experimenting With Formik. "
                                componentwidth="6"
                            />
                            <PlaygroundComponent
                                componentname="TextMirror"
                                componenttitle="TextMirror Component"
                                componenttext="This takes user input and mirrors it in an HTML element. I do this a lot with AngularJS for customizing nutrition labels and wanted to see what a React version would look like.  "
                            />


                            <PlaygroundComponent
                                componentname="ColorNumbersUi"
                                componenttitle="ColorNumbersUi Component"
                                componenttext="This takes the ColorNumbers component a step farther by adding user input."
                            />

                            <PlaygroundComponent
                                componentname="ColorNumbers"
                                componenttitle="ColorNumbers Component"
                                componenttext="This is my first component that generates output based on an array of numbers. A color is randomly assigned to each number."
                            />

                            <PlaygroundComponent
                                componentname="CounterUi"
                                componenttitle="CounterUi Component"
                                componenttext="This is my first component that accepts user input to affect the state."
                            />

                            <PlaygroundComponent
                                componentname="Counter"
                                componenttitle="Counter Component"
                                componenttext="This is component is based on the Clock component below, but instead of maintaining time as a state variable, it maintains an integer that increments up every 1 second."
                            />

                            <PlaygroundComponent
                                componentname="Clock"
                                componenttitle="Clock Component"
                                componenttext={[
                                    "This is my first React component with dynamic content. Actually, it was copied from the ",
                                    <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank">ReactJS website</a>,
                                    ". It is uses object-oriented ReactJS programming. The time is maintained as a state variable with a class method updating the time every second."
                                ]}
                                key="me"
                            />

                            <PlaygroundComponent
                                componentname="HelloWorld"
                                componenttitle="Hello World Component"
                                componenttext="This is my very first React Component. It is as simple as can be and just outputs static text. "
                            />

                        </div>
                    </div>

                    <div className="col-lg-1">
                        &nbsp;
                    </div>


                </div>



            </>

        );
    }
}

export default MyFirstComponents