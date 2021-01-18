import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { fetchTransactions } from '../actions/fetchTransactions'

function loadingSpinner(loading,intervalCopy) {
    if (loading.loading === true) {
        return (<Spinner animation="border" variant="light" />)
    } else {
        return (`Transactions for previous ${intervalCopy}`)
    }
}

class TransactionsInput extends React.Component {
    
    state = {time: 'day'} // Default

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
        this.setState ({
           time: event.target.value
        })        
        this.props.fetchTransactions(event.target.value)
    }   
    
    render() {
        let intervalCopy = ""
        switch(this.props.transactions[0].unit) {
            case 'day':
                const dateObject = new Date(this.props.transactions[0].time * 1000)
                const longDate = `${dateObject.toLocaleString("en-US", {timeZone: "Europe/London"}, {month: "numeric"})}`
                const datArr = longDate.split('/')
                intervalCopy = `day: ${datArr[0]}/${datArr[1]}`
                break
            case 'week':
                intervalCopy = `week: ${this.props.transactions[0].display_time} to ${this.props.transactions[this.props.transactions.length-1].display_time}`
                break
            case 'month':
                intervalCopy = `month: ${this.props.transactions[0].display_time} to ${this.props.transactions[this.props.transactions.length-1].display_time}`
                break
            case 'year':
                intervalCopy = `year: ${this.props.transactions[0].display_time} to ${this.props.transactions[this.props.transactions.length-1].display_time}`
                break                             
            default:
        }
        return (
            <div>                  
                <Navbar variant="dark" expand="lg">    
                    <Navbar.Brand href="/">   
                        {loadingSpinner(this.props.loading,intervalCopy)}                
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