import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchTransactions} from './actions/fetchTransactions'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchTransactions({type: 'PERIOD', payload: {duration: 'Day'} })
  }

  render () {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//  return {
//    transactions: state.transactions()
//  }
//}

export default connect(null, {fetchTransactions})(App)
