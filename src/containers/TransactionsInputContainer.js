import React from 'react'
import {connect} from 'react-redux'

import {fetchTransactions} from '../actions/fetchTransactions'
import TransactionsInput from '../components/TransactionsInput'

class TransactionsContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchTransactions('week')
    }
       
    render() {
        return (
            <div> 
                <TransactionsInput transactions={this.props.transactions} loading={this.props.loading}/>                       
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        loading: state.loading, 
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, {fetchTransactions})(TransactionsContainer)