import React from 'react';



class TextMirror extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text1: 'Hello',
            text2: 'World',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        // event.target.name name attribute of input text box must batch key name of this.state  

        this.setState({[event.target.name]:event.target.value}); 
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
        return (
            <span>
                <div className="row w-100 mb-2">
                    <div className="col-7">
                        <input type="text" value={this.state.text1} onChange={this.handleInputChange} name="text1" className="w-100"/>
                    </div>
                    <div className="col-5">
                        <span>{this.state.text1}</span>
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col-7">
                        <input type="text" value={this.state.text2} onChange={this.handleInputChange} name="text2" className="w-100"/>
                    </div>
                    <div className="col-5">
                        <span>{this.state.text2}</span>
                    </div>
                </div>
            </span>
        );
    }
}

export default TextMirror