import React from 'react'
import {connect} from 'react-redux'

import {fetchTransactions} from '../actions/fetchTransactions'
import TransactionsInput from '../components/TransactionsInput'
import Transactions from '../components/Transactions'

class TransactionsContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchTransactions('week')
    }
       
    render() {
        return (
            <div> 
                <TransactionsInput transactions={this.props.transactions}/>
                <Transactions transactions={this.props.transactions}/>                        
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        //loading: state.loading, // This is the problem - if this is uncommented, the area bump starts to become corrupted
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, {fetchTransactions})(TransactionsContainer)