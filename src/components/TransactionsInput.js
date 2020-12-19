import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import { fetchTransactions } from '../actions/fetchTransactions'

class TransactionsInput extends React.Component {
    
    state = {time: 'day'} // THIS should be set via a prop!

    //handleChange = (event) => {
    //    this.setState ({
    //        time: event.target.value
    //    })
    //}

    //handleSubmit = (event) => {
        // Create action for a specific time period
    //    event.preventDefault()
    //   this.props.fetchTransactions(this.state.time)
    //}

    handleClick = (event) => {
        // Create action for a specific time period
        this.setState ({
           time: event.target.value
        })        
        this.props.fetchTransactions(event.target.value)
    }    

    render() {
        return (
            <div>
                <Navbar bg="light" expand="sm">
                    <Navbar.Text>Time period: </Navbar.Text>                    
                    <Button variant="light" size="sm" value="year" onClick={this.handleClick}>
                        Year
                    </Button>
                    <Button variant="light" size="sm" value="month" onClick={this.handleClick}>
                        Month
                    </Button>
                    <Button variant="light" size="sm" value="week" onClick={this.handleClick}>
                        Week
                    </Button>
                    <Button variant="light" size="sm" value="day" onClick={this.handleClick}>
                        Day
                    </Button>                                        
                </Navbar>                  
                
                {/*<form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            type="radio" 
                            value="year" 
                            name="time" 
                            checked={this.state.time === "year"}
                            onChange={this.handleChange}
                        />
                        Year
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="month" 
                            name="time" 
                            checked={this.state.time === "month"}
                            onChange={this.handleChange}
                        />
                        Month
                    </label>                
                    <label>   
                        <input 
                            type="radio" 
                            value="week" 
                            name="time" 
                            checked={this.state.time === "week"}
                            onChange={this.handleChange}
                        />
                        Week
                    </label>   
                    <label>                
                        <input 
                            type="radio" 
                            value="day" 
                            name="time" 
                            checked={this.state.time === "day"}
                            onChange={this.handleChange}
                        />
                        Day
                   </label>    
                   <input type="submit"/>             
                 </form>*/}
            </div>    
        )
    }
}

export default connect(null,{fetchTransactions})(TransactionsInput)