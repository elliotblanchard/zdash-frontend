import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import TransactionsContainer from './containers/TransactionsContainer'
import AccountsContainer from './containers/AccountsContainer'
import NetworksContainer from './containers/NetworksContainer'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Route path='/transactions' component={TransactionsContainer} />
        <Route path='/accounts' component={AccountsContainer} />
        <Route path='/network' component={NetworksContainer} />
      </div>
    );
  }
}

export default App
