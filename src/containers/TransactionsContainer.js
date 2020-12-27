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
        if ( (this.props.transactions.transactions !== undefined) && (this.props.transactions.transactions.length > 0) ) {
            return (
                <div>
                    {/* Why does prop have to be doubled? */}                
                    <TransactionsInput transactions={this.props.transactions.transactions}/>
                    <Transactions transactions={this.props.transactions.transactions}/>
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar variant="dark" expand="lg">
                        <Spinner animation="border" variant="light" />
                    </Navbar>
                </div>
            )            
        }
    }
} 

const mapStateToProps = state => {
    return {
        transactions: state.transactions
    }
}

export default connect(mapStateToProps, {fetchTransactions})(TransactionsContainer)