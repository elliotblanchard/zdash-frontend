import React, { Component } from 'react'
import {connect} from 'react-redux'
import TransactionsContainer from './containers/TransactionsContainer'
import AccountsContainer from './containers/AccountsContainer'
import NetworksContainer from './containers/NetworksContainer'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <TransactionsContainer/>
        <AccountsContainer/>
        <NetworksContainer/>
      </div>
    );
  }
}

export default App
