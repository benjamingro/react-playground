import React from 'react';
import Clock from '../components/Clock.js';
import HelloWorld from '../components/HelloWorld.js';
import Counter from '../components/Counter.js';
import CounterUi from '../components/CounterUi.js';
import ColorNumbers from '../components/ColorNumbers.js';
import ColorNumbersUi from '../components/ColorNumbersUi.js';
import TextMirror from '../components/TextMirror.js';

import ToDoComponent from '../components/ToDoComponent';


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
                    <div className="col-lg-1"></div>

                    {/* TextMirror Component */}
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-header">
                                <h4>TextMirror Component</h4> 
                            </div>
                            <div className="card-body">
                                <TextMirror /> 
                                
                                <p className="card-text text-secondary mt-4">
                                    This takes user input and mirrors it in an HTML element. I do this a lot with AngularJS for customizing nutrition labels and wanted to see what a React version would look like.  
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ColorNumbersUi Component */}
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-header">
                                <h4>ColorNumbersUi Component</h4> 
                            </div>
                            <div className="card-body">
                                <ColorNumbersUi /> 
                                
                                <p className="card-text text-secondary mt-4">
                                    This takes the ColorNumbers component a step farther by adding user input. 
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ColorNumbers Component */}
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-header">
                                <h4>ColorNumbers Component</h4> 
                            </div>
                            <div className="card-body">
                                <ColorNumbers /> 
                                
                                <p className="card-text text-secondary mt-4">
                                    This is my first component that generates output based on an array of numbers. A color is randomly assigned to each number. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-1"></div>

                </div>

                <div className="row w-100 my-3 pl-1">
                    <div className="col-lg-1"></div>
                    {/* CounterUi Component */}
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-header">
                                <h4>CounterUi Component</h4> 
                            </div>
                            <div className="card-body">
                                <CounterUi /> 
                                
                                <p className="card-text text-secondary mt-4">
                                    This is my first component that accepts user input to affect the state. 
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Basic Counter Component */}
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-header">
                                <h4>Counter Component</h4> 
                            </div>
                            <div className="card-body">
                                <Counter increment="1"/> 
                                
                                <p className="card-text text-secondary">
                                    This is component is based on the Clock component below, but instead of maintaining time as a state variable, it maintains an integer that increments up every 1 second. 
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Clock Component */}
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-header">
                                <h4>Clock Component</h4> 
                            </div>
                            <div className="card-body">
                                <Clock /> 
                                
                                <p className="card-text text-secondary">
                                    This is my first React component with dynamic content. Actually, it was copied from the <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank">ReactJS website</a>. It is uses object-oriented ReactJS programming. The time is maintained as a state variable with a class method updating the time every second. 
                                </p>
                            </div>
                        </div>
                    </div>
                    

                    <div className="col-lg-1"></div>

                </div>

                <div className="row w-100 my-3 pl-1">
                    <div className="col-lg-1"></div>
                    
                    {/* HelloWorld Component */}
                    <div className="col-lg-3">
                        <div className="card h-100">
                            <div className="card-header">
                                <h4>Hello World Component</h4> 
                            </div>
                            <div className="card-body">
                                <HelloWorld /> 
                                
                                <p className="card-text text-secondary">
                                    This is my very first React Component. It is as simple as can be and just outputs static text. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-1"></div>

                </div>

                
               
            </>

        );
    }
}

export default MyFirstComponents 