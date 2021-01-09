import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavTop = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="zcash-icon-white.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}                    
                    Zdash
                </Navbar.Brand> 
                <Navbar.Collapse className="justify-content-end">
                    <Nav>                      
                        <Nav.Item>                         
                            <Nav.Link href="/">Transactions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>                        
                                <Nav.Link href="/accounts">Accounts</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>                              
                            <Nav.Link href="/network">Network</Nav.Link>
                        </Nav.Item>    
                    </Nav>                    
                </Navbar.Collapse>                
            </Navbar>                       
        </div>
    )
 }

 export default NavTop