import React from 'react'
import {connect} from 'react-redux'

import {fetchTransactions} from '../actions/fetchTransactions'
import Transactions from '../components/Transactions'

class TransactionsContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchTransactions('month')
    }
       
    render() {
        return (
            <div> 
                <Transactions transactions={this.props.transactions}/>                        
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, {fetchTransactions})(TransactionsContainer)