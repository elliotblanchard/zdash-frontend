import React from 'react'
import {Route, Link} from 'react-router-dom'

const Accounts = ({accounts}) => {
    return (
        <div>
            <h1>Recently active accounts</h1>
            {accounts.map((account, index) => (
                <li key={account.address}>
                    <Link to={`/accounts/${account.address}`}>{account.address}</Link>
                </li>
            ))}           
        </div>
    )
 }

 export default Accounts 