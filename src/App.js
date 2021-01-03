import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import NavTop from './components/NavTop'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import TransactionsContainer from './containers/TransactionsContainer'
import AccountsContainer from './containers/AccountsContainer'
import AccountDetailContainer from './containers/AccountDetailContainer'
import NetworksContainer from './containers/NetworksContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'


class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Container bg="dark">
          <NavTop />
          <Switch>
            <Route exact path='/' component={TransactionsContainer} />
            <Route path='/accounts/:id' render={(routerProps) => <AccountDetailContainer {...routerProps}/>}/>
            <Route path='/accounts' component={AccountsContainer} />
            <Route path='/network' component={NetworksContainer} />
          </Switch>
          <Navbar variant="dark" expand="lg" sticky="bottom">   
                <Navbar.Brand href="https://github.com/elliotblanchard">                   
                    <small>Zdash is maintained by Elliot Blanchard</small>
                </Navbar.Brand>                   
                <Navbar.Collapse className="justify-content-end">
                    <Nav>                                                                 
                        <Nav.Item>                              
                          <img
                          alt=""
                          src="zaddr.png"
                          width="100"
                          height="100"
                          className="d-inline-block align-middle"
                          />                        
                      </Nav.Item>    
                    </Nav>                    
                </Navbar.Collapse>                
            </Navbar>           
        </Container>
      </div>
    );
  }
}

export default App
