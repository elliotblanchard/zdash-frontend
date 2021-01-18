import React from 'react'
import {connect} from 'react-redux'

import Spinner from 'react-bootstrap/Spinner'
import Navbar from 'react-bootstrap/Navbar'

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
                <TransactionsInput transactions={this.props.transactions} loading={this.props.loading}/>
                <Transactions transactions={this.props.transactions}/>                        
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        transactions: state.transactions,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchTransactions})(TransactionsContainer)