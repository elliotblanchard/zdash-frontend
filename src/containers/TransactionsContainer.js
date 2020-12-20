import React from 'react'
import {connect} from 'react-redux'

import {fetchTransactions} from '../actions/fetchTransactions'
import TransactionsInput from '../components/TransactionsInput'
import Transactions from '../components/Transactions'

class TransactionsContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchTransactions('day')
    }

    render() {
        return (
            <div>
                {/* Why does prop have to be doubled? */}                
                <TransactionsInput transactions={this.props.transactions.transactions}/>
                <Transactions transactions={this.props.transactions.transactions}/>
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