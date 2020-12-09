import React from 'react'

class TransactionsInput extends React.Component {

    // How do you set up radio buttons so that 
    // the active time period is already checked
    // (this is probably passsing a prop that shows the time period
    // 'hour' etc that then sets the initial state of the form,
    // and thus the checked item)
    
    state = {time: 'day'} // THIS should be set via a prop!

    handleChange = (event) => {
        this.setState ({
            time: event.target.value
        })
    }

    render() {
        return (
            <div>
                Choose time period:
                <form>
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
                </form>
            </div>    
        )
    }
}

export default TransactionsInput