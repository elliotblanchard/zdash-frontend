import React from 'react'
import {connect} from 'react-redux'

import {fetchTransactions} from '../actions/fetchTransactions'
import Transactions from '../components/Transactions'

class TransactionsContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchTransactions('year')
    }
       
    render() {
        return (
            <div> 
                <Transactions transactions={this.props.transactions} pools={this.props.pools}/>                        
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        transactions: state.transactions,
        pools: state.pools
    }
}

export default connect(mapStateToProps, {fetchTransactions})(TransactionsContainer)