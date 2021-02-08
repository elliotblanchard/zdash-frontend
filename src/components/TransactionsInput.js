import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'
import { fetchTransactions } from '../actions/fetchTransactions'


function loadingSpinner(loading,intervalCopy) {
    if (loading.loading === false) {
        return (`${intervalCopy}`)
    } else {
        return (<Spinner animation="border" variant="light" />)
    }
}



class TransactionsInput extends React.Component {
    
    state = {time: 'day'}

    handleClick = (event) => {
        this.setState ({
           time: event.target.attributes[0].nodeValue
        })        
        this.props.fetchTransactions(event.target.attributes[0].nodeValue)
    }    

    handleChange = (event) => {
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
                    intervalCopy = `Transactions for previous day: ${datArr[0]}/${datArr[1]}`
                    break
                case 'week':
                    intervalCopy = `Transactions for previous week: ${this.props.transactions[0].display_time} to ${this.props.transactions[this.props.transactions.length-1].display_time}`
                    break
                case 'month':
                    intervalCopy = `Transactions for previous month: ${this.props.transactions[0].display_time} to ${this.props.transactions[this.props.transactions.length-1].display_time}`
                    break
                case 'year':
                    intervalCopy = `Transactions for previous year: ${this.props.transactions[0].display_time} to ${this.props.transactions[this.props.transactions.length-1].display_time}`
                    break     
                case 'all':
                    intervalCopy = `All transactions`
                    break                                             
                default:
            }
        return (
            <div>                  
                <Navbar variant="dark" expand="sm">    
                    <Navbar.Brand href="/">   
                        {loadingSpinner(this.props.loading,intervalCopy)}                
                    </Navbar.Brand>       
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>                      
                        <NavDropdown title="Select time period" id="nav-dropdown">
                            <NavDropdown.Item value="all" onClick={this.handleClick}>All</NavDropdown.Item>
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