import React from 'react';
import Button from 'react-bootstrap/Button';


class ColorNumbers extends React.Component {
    constructor(props) {
        super(props);
        this.render=this.render.bind(this);
    }
    numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    colorArray = ["red", "orange", "yellow", "blue", "green", "purple"];

    // myColor="red";
    // numArray = [0,1,2,3,4,5,6,7,8,9,10];

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    getColorNumbers(){
        return this.numArray.map(number => {
            let myColor = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
            return (<h4 className="d-inline" key={number} style={{ color: myColor }}>{number}&nbsp;</h4>);
        });
    }

    render() {
        let returnObject = this.getColorNumbers();
        console.log(returnObject);
        return (
            <>
                <div className="row w-100">
                    <div className="col d-flex justify-content-center">
                        {returnObject}
                    </div>
                </div>
            </>


        );

    }
}

export default ColorNumbers