import React from 'react'

 const Transactions = ({transactions}) => {
    return (
        <div>
      <h1>Transactions</h1>
            {transactions.map((timeUnit, index) => (
                <div key={index}>
                    <h3>{timeUnit.interval.replace(/^\w/, (c) => c.toUpperCase())}: {timeUnit.number} Total: {timeUnit.total}</h3>
                    <p>Categories:</p>
                    <ul>
                        {timeUnit.categories.map((category, index) => (
                            <li key={index}>{category[0]}: {category[1]}</li>
                        ))}
                    </ul>
                </div>
            ))}            
        </div>
    )
 }

 export default Transactions 