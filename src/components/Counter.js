import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((state, props) => {
            return {
                // counter:this.state.counter + 1,
                counter: this.state.counter + parseInt(props.increment),

            };
        });
    }

    render() {
        return (
            <div>
                <h2>Counter = {this.state.counter}.</h2>
            </div>

        );
    }
}

export default Counter