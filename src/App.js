import React, { Component } from 'react'
import {connect} from 'react-redux'
import TransactionsContainer from './containers/TransactionsContainer'
//import {fetchTransactions} from './actions/fetchTransactions'

class App extends React.Component {

  //componentDidMount() {
  //  this.props.fetchTransactions({type: 'PERIOD', payload: {duration: 'Day'} })
  //}

  render () {
    return (
      <div className="App">
        <TransactionsContainer/>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//  return {
//    transactions: state.transactions()
//  }
//}

export default App
