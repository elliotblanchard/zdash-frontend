import React from 'react'

 const AccountDetail = (accountDetail) => {
    return (
        <div>
          <h3>Address: {accountDetail.accountDetail.address}</h3>
            <ul>
              <li>Balance: {accountDetail.accountDetail.balance}</li>
              <li>First seen: {accountDetail.accountDetail.firstSeen}</li>
              <li>Last seen: {accountDetail.accountDetail.lastSeen}</li>
              <li>Mined count: {accountDetail.accountDetail.minedCount}</li>
              <li>Total recieved: {accountDetail.accountDetail.totalRecv}</li>
              <li>Total sent: {accountDetail.accountDetail.totalSent}</li>            
              <li>Recieved count: {accountDetail.accountDetail.recvCount}</li>
              <li>
                  Recent transactions recieved: 
                  <ul>
                    { accountDetail.accountDetail.recvTrans ? 
                      accountDetail.accountDetail.recvTrans.map((trans, index) => (
                        <li key={trans.hash}>
                            {trans.hash}
                        </li>
                      ))
                      : 
                      null 
                    }
                  </ul>
              </li>
              <li>Sent count: {accountDetail.accountDetail.recvCount}</li>
              <li>
                  Recent transactions sent: 
                  <ul>
                    { accountDetail.accountDetail.sentTrans ? 
                      accountDetail.accountDetail.sentTrans.map((trans, index) => (
                        <li key={trans.hash}>
                            {trans.hash}
                        </li>
                      ))
                      : 
                      null 
                    }
                  </ul>
              </li>              
            </ul>          
        </div>
    )
 }

 export default AccountDetail 