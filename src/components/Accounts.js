import React from 'react'

 const Accounts = ({accounts}) => {
    return (
        <div>
      <h1>Recently active accounts</h1>
            {accounts.map((account, index) => (
                <div key={account.address}>
                    <h3>Address: {account.address}</h3>
                    <p>Balance: {account.balance}</p>
                    <p>First seen: {account.firstSeen}</p>
                    <p>Last seen: {account.lastSeen}</p>
                    <p>Sent count: {account.sentCount}</p>
                    <p>Recieved count: {account.recvCount}</p>
                    <p>Mined count: {account.minedCount}</p>
                    <p>Total sent: {account.totalSent}</p>
                    <p>Total recieved: {account.totalRecv}</p>
                </div>
            ))}           
        </div>
    )
 }

 export default Accounts 