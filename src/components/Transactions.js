import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

 const Transactions = ({transactions}) => {
    return (
        <div>
            <Row>
                <Col>
                    <Jumbotron>
                    <h1>All transactions</h1>
                    <p>
                        Stacked bar
                    </p>
                    </Jumbotron> 
                </Col>                
            </Row>     
            <Row>
                <Col>                      
                    <Jumbotron>
                    <h1>Percentage of total</h1>
                    <p>
                        Bump
                    </p>
                    </Jumbotron>   
                </Col>                
            </Row>  
            <Row>
                <Col>                      
                    <Jumbotron>
                    <h1>Shielded only</h1>
                    <p>
                        Stacked bar
                    </p>
                    </Jumbotron>   
                </Col>  
                <Col>                      
                    <Jumbotron>
                    <h1>Percentage of total period</h1>
                    <p>
                        Pie
                    </p>
                    </Jumbotron>   
                </Col>                                
            </Row>                                                 
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