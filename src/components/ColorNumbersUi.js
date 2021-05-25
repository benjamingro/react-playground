import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Button from 'react-bootstrap/Button';


class ColorNumbersUi extends React.Component {
    constructor(props) {
        super(props);
        this.refreshColors = this.refreshColors.bind(this);
        this.addNumber = this.addNumber.bind(this);
        this.deleteNumber = this.deleteNumber.bind(this);

        this.state = {
            numObjectArray: []
        }
    }

    getColor() {
        return this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
    }

    initializeNumObjectArray() {
        let numObjectArray = []
        for (let i = 0; i <= 5; i++) {
            numObjectArray.push({ number: i, color: this.getColor(), key: i });
        }
        this.setState({ numObjectArray: numObjectArray });

    }
    colorArray = ["red", "orange", "yellow", "blue", "green", "purple"];



    componentDidMount() {
        this.initializeNumObjectArray();

    }

    componentWillUnmount() {
    }


    refreshColors() {
        let numObjectArray = this.state.numObjectArray;
        for (let i = 0; i < numObjectArray.length; i++) {
            numObjectArray[i].color = this.getColor();
        }
        this.setState({ numObjectArray: numObjectArray });
    }

    addNumber() {
        console.log(`before addNumber, this.state.numObjectArray = ${this.state.numObjectArray}`);

        let numObjectArray = [...this.state.numObjectArray, { number: this.state.numObjectArray.length, color: this.getColor() }];
        console.log(`inside addNumber, this.state.numObjectArray = ${this.state.numObjectArray}`);
        this.setState({ numObjectArray: numObjectArray });

        // this.setState({ numObjectArray: this.state.numObjectArray.push({number:this.state.numObjectArray.length,color:this.getColor()}) });
    }

    deleteNumber() {
        let numObjectArray = this.state.numObjectArray;
        numObjectArray.pop();
        this.setState({ numObjectArray: numObjectArray });
    }

    render() {

        return (
            <>
                <div className="row w-100">
                    <div className="col d-flex justify-content-center">
                        {
                            this.state.numObjectArray.map(value => {
                                return (<h4 className="d-inline" key={value.number} style={{ color: value.color }}>{value.number}&nbsp;</h4>);
                            })
                        }
                    </div>

                </div>


                <div className="row w-100 mb-3">
                    <div className="col-4 d-flex justify-content-center">
                        <Button variant="outline-secondary" onClick={this.deleteNumber}>Delete number</Button>{' '}

                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <Button variant="outline-primary" onClick={this.addNumber}>Add number</Button>{' '}

                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <Button variant="outline-info" onClick={this.refreshColors}>Refresh colors</Button>{' '}

                    </div>
                </div>


            </>


        );

    }
}

export default ColorNumbersUi