import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

const NavTop = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
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
                    <Nav.Link href="/">Transactions</Nav.Link>
                    <Nav.Link href="/accounts">Accounts</Nav.Link>
                    <Nav.Link href="/network">Network</Nav.Link>
                </Navbar.Collapse>                
            </Navbar>                       
        </div>
    )
 }

 export default NavTop