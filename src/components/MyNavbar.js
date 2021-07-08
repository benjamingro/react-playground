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
        // if(event.target.id==='navbar-brand-id')
        // {

        // }
        document.getElementById('myfirstcomponents').classList.remove('active');
    }


    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#/" id="navbar-brand-id" onClick={this.clickHandler}>React Playground</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/myfirstcomponents" name="name-nav-link" id="myfirstcomponents"  >My First Components</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default MyNavbar