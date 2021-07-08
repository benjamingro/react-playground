import React from 'react';
import HelloWorld from './HelloWorld.js';
import Clock from './Clock.js';

import Counter from './Counter.js';
import CounterUi from './CounterUi.js';
import ColorNumbers from './ColorNumbers.js';
import ColorNumbersUi from './ColorNumbersUi.js';
import TextMirror from './TextMirror.js';

import ToDoComponent from './ToDoComponent.js';
import DepositComponent from './DepositComponent.js';
import WithdrawComponent from './WithdrawComponent.js';

import AtmMachine from './AtmMachine.js';

import HNSearch from './HNSearch.js';

import MyBasicForm from './MyBasicForm.js';

import Board from './Board.js';

import Cart from './Cart.jsx';



class PlaygroundComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.ComponentName = props.componentname;
        this.ComponentTitle = props.componenttitle;
        this.ComponentText = props.componenttext;
        this.ComponentWidth = props.componentwidth;
        this.Component = <></>;
        switch (this.ComponentName) {
            case 'HelloWorld':
                this.Component = <HelloWorld />;
                break;
            case 'Counter':
                this.Component = <Counter increment="1" />;
                break;
            case 'CounterUi':
                this.Component = <CounterUi />;
                break;
            case 'ColorNumbers':
                this.Component = <ColorNumbers />;
                break;
            case 'ColorNumbersUi':
                this.Component = <ColorNumbersUi />;
                break;
            case 'Clock':
                this.Component = <Clock />;
                break;
            case 'TextMirror':
                this.Component = <TextMirror />;
                break;
            case 'ToDoComponent':
                this.Component = <ToDoComponent />;
                break;
            case 'DepositComponent':
                this.Component = <DepositComponent acceptDeposit={(value) => alert(value)} />;
                break;
            case 'WithdrawComponent':
                this.Component = <WithdrawComponent withdrawFunds={(value) => alert(value)} accountBalance="100" />;
                break;
            case 'AtmMachine':
                this.Component = <AtmMachine />;
                break;
            case 'HNSearch':
                this.Component = <HNSearch />;
                break;
            case 'MyBasicForm':
                this.Component = <MyBasicForm />;
                break;
            case 'Board':
                this.Component = <Board />;
                break;
            case 'Cart':
                this.Component = <Cart />;
                break;

            default:
                this.Component = <HelloWorld />;
                break;
        }


    }



    componentDidMount() {

    }



    componentWillUnmount() {
    }






    render() {

        return (

            <div className={"my-2 " + (this.ComponentWidth ? "col-lg-" + this.ComponentWidth : "col-lg-4")}>
                <div className="card h-100">
                    <div className="card-header">
                        {/* <h4>ColorNumbersUi Component</h4> */}
                        <h4>{this.ComponentTitle}</h4>

                    </div>
                    <div className="card-body">
                        {this.Component}
                        <p className="card-text text-secondary mt-4">
                            {this.ComponentText}
                        </p>
                    </div>
                </div>
            </div>



        );
    }
}

export default PlaygroundComponent