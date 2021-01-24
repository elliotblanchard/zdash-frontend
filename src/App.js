import React from 'react'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import NavTop from './components/NavTop'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import TransactionsInputContainer from './containers/TransactionsInputContainer'
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
        <Container bg="dark" fluid="lg">
          <NavTop />
          <Switch>
            <Route exact path='/'>
              <TransactionsInputContainer />
              <TransactionsContainer />
            </Route>
            <Route path='/accounts/:id' render={(routerProps) => <AccountDetailContainer {...routerProps}/>}/>
            <Route path='/accounts' component={AccountsContainer} />
            <Route path='/network' component={NetworksContainer} />
          </Switch>
          <Navbar variant="dark" expand="sm" sticky="bottom"> 
                <Navbar.Collapse>
                  <Nav>
                    <Nav.Item>                         
                      <Nav.Link href="https://github.com/elliotblanchard">
                        <small>
                            Zdash is maintained by Elliot Blanchard. Your donations support development.
                        </small>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav> 
                </Navbar.Collapse>                            
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
