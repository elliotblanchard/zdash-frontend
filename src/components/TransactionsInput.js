import React from 'react'
import { connect } from 'react-redux'
import { fetchTransactions } from '../actions/fetchTransactions'

class TransactionsInput extends React.Component {
    
    state = {time: 'day'} // THIS should be set via a prop!

    handleChange = (event) => {
        this.setState ({
            time: event.target.value
        })
    }

    handleSubmit = (event) => {
        // Create action for a specific time period
        event.preventDefault()
        this.props.fetchTransactions(this.state)
    }

    render() {
        return (
            <div>
                Choose time period:
                <form onSubmit={this.handleSubmit}>
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
                </form>
            </div>    
        )
    }
}

export default connect(null,{fetchTransactions})(TransactionsInput)