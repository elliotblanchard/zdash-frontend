import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

const NavTop = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Zdash</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Transactions</Nav.Link>
                    <Nav.Link href="/accounts">Accounts</Nav.Link>
                    <Nav.Link href="/network">Network</Nav.Link>
                </Nav>  
            </Navbar>                       
        </div>
    )
 }

 export default NavTop