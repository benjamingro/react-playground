import React from 'react';
import '../css/Footer.css';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }


    render() {
        return (
            <>
                <div className="row w-100 text-secondary bg-light navbar fixed-bottom">
                    <div className="col-xl-3 col-xs-12 d-flex px-5">
                        Ben Gross&nbsp;&#169;&nbsp;2021
                    </div>
                    <div className="col-xl-6 col-xs-12 d-flex px-5 justify-content-center smallDisappear">
                        MIT xPRO Full Stack Development with MERN
                    </div>
                    <div className="col-xl-3 col-xs-12 d-flex px-5 justify-content-end smallDisappear">
                        React Playground
                    </div>

                </div>
            </>

        );
    }
}

export default Footer