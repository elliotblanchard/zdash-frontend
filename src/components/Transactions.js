import React from 'react'

 const Transactions = ({transactions}) => {
    return (
        <div>
            {transactions.map(timeUnit => 
                <li key={timeUnit.number}>
                    Hour: {timeUnit.number} - {timeUnit.total} transactions 
                </li>
            )}
        </div>
    )
 }

 export default Transactions 