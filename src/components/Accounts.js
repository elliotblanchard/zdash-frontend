import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Spinner from 'react-bootstrap/Spinner'
import roundedBox from '../nivostyles/roundedBox.js'
import cols from '../nivostyles/cols.js'
import breakpoints from '../nivostyles/breakpoints.js'
import { Responsive, WidthProvider } from 'react-grid-layout'

// Handles the responsive nature of the grid
const ResponsiveGridLayout = WidthProvider(Responsive)

function loadingSpinner(loading) {
	if (loading.loading === true) {
		return (<Spinner animation="border" variant="light" />)
	} else {
		return ("Recently active accounts")
	}
}

const Accounts = ({accounts, loading}) => {
    return (
        <div>
            <Navbar variant="dark" expand="lg">    
                <Navbar.Brand href="/">                  
                   {loadingSpinner(loading)}
                </Navbar.Brand>                      
            </Navbar>                
            <ResponsiveGridLayout
            breakpoints={breakpoints}
            cols={cols}
            isDraggable={false}
            isResizable={false}            
            >	                
            <div style={roundedBox}
              className="grid-cell"
              key="0"
              data-grid={{ x: 0, y: 0, w: 4, h: 5 }}
            >
              { accounts.map((account, index) => (
                        
                        <h4><Link to={`/accounts/${account.address}`}>{account.address}</Link></h4>
                  ))
                }                  
            </div>   
            </ResponsiveGridLayout>                                                                                                                                 
        </div>
    )
 }

 export default Accounts 