import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import { fetchTransactions } from '../actions/fetchTransactions'

class TransactionsInput extends React.Component {
    
    state = {time: 'day'} // THIS should be set via a prop!

    handleClick = (event) => {
        // Create action for a specific time period
        //console.log(event.target.attributes[0].nodeValue)
        this.setState ({
           time: event.target.attributes[0].nodeValue
        })        
        this.props.fetchTransactions(event.target.attributes[0].nodeValue)
    }    

    handleChange = (event) => {
        // Create action for a specific time period
        console.log("in handleChange")
        this.setState ({
           time: event.target.value
        })        
        this.props.fetchTransactions(event.target.value)
    }     

    render() {
        return (
            <div>                  
                <Navbar variant="dark" expand="lg">    
                    <Navbar.Brand href="/">                  
                        Transactions: previous {this.state.time}
                    </Navbar.Brand>       
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>                      
                        <NavDropdown title="Select time period" id="nav-dropdown">
                            <NavDropdown.Item value="year" onClick={this.handleClick}>Year</NavDropdown.Item>
                            <NavDropdown.Item value="month" onClick={this.handleClick}>Month</NavDropdown.Item>
                            <NavDropdown.Item value="week" onClick={this.handleClick}>Week</NavDropdown.Item>
                            <NavDropdown.Item value="day" onClick={this.handleClick}>Day</NavDropdown.Item>
                        </NavDropdown>   
                        </Nav>                    
                    </Navbar.Collapse>                
                </Navbar>                                                         
            </div>    
        )
    }
}

export default connect(null,{fetchTransactions})(TransactionsInput)