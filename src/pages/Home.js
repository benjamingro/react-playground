import React from 'react';



class Home extends React.Component {
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
                <div className="row w-100 mt-3">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="card border-0">
                            <div className="card-body">
                            <p className="card-text">
                                    Hi, my name is Ben Gross, and I am a student in the MIT xPRO Full Stack Web Application Development with MERN Certificate Program. 
                                    I have 4 years of experience with AngularJS but am brand new to React as of May 2021. This webpage is my very first React project. 
                                </p>
                                <p className="card-text">
                                    I created this project with the following intent. 
                                </p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        As a playground to help me learn React
                                    </li>
                                    <li className="list-group-item">
                                        As a repository to showcase my React skills and capabilities along my learning journey 
                                    </li>
                                    <li className="list-group-item">
                                        As a location to put my self-learning assignments for the MIT xPRO coursework
                                    </li>
                                </ul>
                                <p className="card-text">
                                    Please peruse the projects that comprise my React learning journey and contact me at <a target='_blank' href={'mailto:gross.benji@gmail.com'}>gross.benji@gmail.com</a> or via <a target='_blank' href={'https://www.linkedin.com/in/nutritionengineering/'}>LinkedIN</a> if you have any questions.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3"></div>

                </div>
            </>

        );
    }
}

export default Home