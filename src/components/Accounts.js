import React from 'react'

 const Accounts = ({accounts}) => {
    return (
        <div>
      <h1>Recently active accounts</h1>
            {accounts.map((account, index) => (
                <li key={account.address}>{account.address} Balance: {account.balance}</li>
            ))}           
        </div>
    )
 }

 export default Accounts 