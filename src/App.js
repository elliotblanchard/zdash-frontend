import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import TransactionsContainer from './containers/TransactionsContainer'
import AccountsContainer from './containers/AccountsContainer'
import AccountDetailContainer from './containers/AccountDetailContainer'
import NetworksContainer from './containers/NetworksContainer'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={TransactionsContainer} />
          <Route path='/accounts/:id' render={(routerProps) => <AccountDetailContainer {...routerProps}/>}/>
          <Route path='/accounts' component={AccountsContainer} />
          <Route path='/network' component={NetworksContainer} />
        </Switch>
      </div>
    );
  }
}

export default App
