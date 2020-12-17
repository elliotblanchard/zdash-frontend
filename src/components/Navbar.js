import React from 'react'
import {Route, Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            Navbar 
            <Link to={`/transactions`}>Transactions</Link>             
            <Link to={`/accounts`}>Accounts</Link>
            <Link to={`/network`}>Network</Link>        
        </div>
    )
 }

 export default Navbar