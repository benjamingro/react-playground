import React from 'react';
import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myfirstcomponents: "",
            simpleform: ""
        };
        // this.state={myState:false}; 
        this.clickHandler = this.clickHandler.bind(this);

    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    clickHandler(event) {

    }


    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#/">React Playground</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* className={this.state.class.myfirstcomponents} */}
                        {/*  className={this.state.class.simpleform}*/}
                        <Nav.Link href="#/myfirstcomponents" name="name-nav-link" id="myfirstcomponents" onClick={this.clickHandler} className={()=>{return this.state.myfirstcomponents; }}>My First Components</Nav.Link>
                        <Nav.Link href="#/simpleform" name="name-nav-link" id="simpleform" onClick={this.clickHandler} className={()=>{return this.state.simpleform; }}>Simple Form</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default MyNavbar