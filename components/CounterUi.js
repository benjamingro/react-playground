import React from 'react';
import Button from 'react-bootstrap/Button';



class CounterUi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            intervalMs: 1000,
            increment: 1
        };

        this.handleInputChange = this.handleInputChange.bind(this); 
        this.resetCounter = this.resetCounter.bind(this); 

    }

    

    componentDidMount() {
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     this.state.intervalMs
        // );
        this.setTimerInterval();
    }

    setTimerInterval(){
        console.log(`inside setTimerInterval,this.state.intervalMs = ${this.state.intervalMs}`);
        clearInterval(this.timerID); 
        this.timerID = setInterval(
            () => this.tick(),
            this.state.intervalMs
        );
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((state, props) => {
            return {
                // counter:this.state.counter + 1,
                counter: this.state.counter + parseInt(this.state.increment),

            };
        });
    }

    handleInputChange(event){
        this.setState({[event.target.name]:event.target.value}); 
        if(event.target.name==='intervalMs')
        {
            setTimeout(()=>this.setTimerInterval(),1000);
        }
    }

    resetCounter(){
        this.setState({counter:0});
    }

    render() {
        return (
            <>
                <div className="row w-100">
                    <div className="col text-secondary">
                        Counter
                    </div>
                </div>
                <div className="row w-100 mb-2">
                    <div className="col d-flex justify-content-center">
                        <h4> {this.state.counter}</h4>
                    </div>
                    <div className="col">
                         {/* reset button */}
                         <Button variant="secondary" onClick={this.resetCounter}>Reset</Button>{' '}
                    </div>
                </div>
                <div className="row w-100 text-secondary">
                    <div className="col-6">
                        Increment
                    </div>
                    <div className="col-6">
                        Interval / ms
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col-6">
                        {/* increment input */}
                        <input className="w-100" type="number" name="increment" onChange={this.handleInputChange} value={this.state.increment}></input>
                    </div>
                    <div className="col-6">
                          {/* intervalMs input */}
                          <input className="w-100" type="number" name="intervalMs" onChange={this.handleInputChange} value={this.state.intervalMs}></input>
                    </div>
                </div>

            </>


        );
    }
}

export default CounterUi