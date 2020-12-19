import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import NavTop from './components/NavTop'
import TransactionsContainer from './containers/TransactionsContainer'
import AccountsContainer from './containers/AccountsContainer'
import AccountDetailContainer from './containers/AccountDetailContainer'
import NetworksContainer from './containers/NetworksContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'


class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Container bg="dark">
          <NavTop/>
          <Switch>
            <Route exact path='/' component={TransactionsContainer} />
            <Route path='/accounts/:id' render={(routerProps) => <AccountDetailContainer {...routerProps}/>}/>
            <Route path='/accounts' component={AccountsContainer} />
            <Route path='/network' component={NetworksContainer} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App
