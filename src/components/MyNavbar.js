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
        // event.preventDefault(); 
        let new_state = this.state; 

        new_state[event.target.id] = 'active';

        this.setState(new_state); 

        // let key_array = Object.keys(this.state); 
        // let i = 0; 
        // for(i=0; i<key_array.length; i++)
        // {
        //     let my_key = key_array[i] ; 
        //     let my_object = {my_key:''}; 
        //     if(my_key===event.target.id)
        //     {
        //         // this.setState({[my_key]:'active']}); 
        //         my_object[my_key]='active'; 
        //         this.setState(my_object); 
        //         // alert(my_key);
        //     }
        //     else
        //     {
        //         this.setState(my_object); 
        //         // this.setState({[my_key]:'']});
        //         // alert(my_key);
        //     }
        // }

        // alert(event.target.id);
        // event.target.id.className="active";
        // this.setState({
        //     class: {
        //         myfirstcomponents: "",
        //         simpleform: ""
        //     }
        // });
        // console.log({class:{[event.target.id]:'active'}}); 
        // console.log(`inside clickHandler event.target.id = ${event.target.id}`);

        // this.setState({class:{[event.target.id]:'active'}});
        // let newState = {
        //     class: {
        //         myfirstcomponents: "active",
        //         simpleform: "active"
        //     }
        // };
        // this.setState(newState);
        // alert(`inside clickHandler event.target.id = ${event.target.id}, this.state.class.myfirstcomponents=${this.state.class.myfirstcomponents},this.state.class.myfirstcomponents=${this.state.class.simpleform}, newState = ${JSON.stringify(newState)} `);

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