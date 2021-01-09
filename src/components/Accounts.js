import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import roundedBox from '../nivostyles/roundedBox.js'


const Accounts = ({accounts}) => {
    return (
        <div>
            <Navbar variant="dark" expand="lg">    
                <Navbar.Brand href="/">                  
                   Recently active accounts
                </Navbar.Brand>                      
            </Navbar>           
                <div style={roundedBox}
                  className="grid-cell"
                  key="0"
                  data-grid={{ x: 0, y: 0, w: 2, h: 5 }}
                >
                  { accounts.map((account, index) => (
                            
                            <h4><Link to={`/accounts/${account.address}`}>{account.address}</Link></h4>
                      ))
                    }                  
                </div>                                                                                                                                    
        </div>
    )
 }

 export default Accounts 