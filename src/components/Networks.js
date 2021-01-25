import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import roundedBox from '../nivostyles/roundedBox.js'
import cols from '../nivostyles/cols.js'
import breakpoints from '../nivostyles/breakpoints.js'
import Spinner from 'react-bootstrap/Spinner'
import { Responsive, WidthProvider } from 'react-grid-layout'

// Handles the responsive nature of the grid
const ResponsiveGridLayout = WidthProvider(Responsive)

function numberWithCommas(x) {
	return (x + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
		return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
	})
}

function loadingSpinner(loading) {
	if (loading.loading === true) {
		return (<Spinner animation="border" variant="light" />)
	} else {
		return ("Mainnet statistics")
	}
}

const Networks = ({networks, loading}) => {
    return (
        <div>
            <Navbar variant="dark" expand="lg">    
                <Navbar.Brand>                  
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
					key="1"
					data-grid={{ x: 0, y: 0, w: 1, h: 1 }}
				>
					<p>Accounts</p>
                    <h1>{numberWithCommas(networks.accounts)}</h1>
				</div>  
				<div style={roundedBox}
					className="grid-cell"
					key="2"
					data-grid={{ x: 1, y: 0, w: 1, h: 1 }}
				>
					<p>Transactions</p>
                    <h1>{numberWithCommas(networks.transactions)}</h1>
				</div>      
				<div style={roundedBox}
					className="grid-cell"
					key="3"
					data-grid={{ x: 2, y: 0, w: 1, h: 1 }}
				>
					<p>Block number</p>
                    <h1>{numberWithCommas(networks.blockNumber)}</h1>
				</div>      
				<div style={roundedBox}
					className="grid-cell"
					key="4"
					data-grid={{ x: 3, y: 0, w: 1, h: 1 }}
				>
					<p>Mean block time</p>
                    <h1>{numberWithCommas(parseFloat(networks.meanBlockTime).toFixed(2))}</h1>
				</div>     
				<div style={roundedBox}
					className="grid-cell"
					key="5"
					data-grid={{ x: 0, y: 1, w: 4, h: 1 }}
				>
					<p>Block hash</p>
                    <h3>{networks.blockHash}</h3>
				</div>  
				<div style={roundedBox}
					className="grid-cell"
					key="6"
					data-grid={{ x: 0, y: 2, w: 2, h: 1 }}
				>
					<p>Difficulty</p>
                    <h1>{numberWithCommas(parseFloat(networks.difficulty).toFixed(2))}</h1>
				</div> 
				<div style={roundedBox}
					className="grid-cell"
					key="7"
					data-grid={{ x: 2, y: 2, w: 2, h: 1 }}
				>
					<p>Hash rate</p>
                    <h1>{numberWithCommas(networks.hashrate)}</h1>
				</div>      
				<div style={roundedBox}
					className="grid-cell"
					key="8"
					data-grid={{ x: 0, y: 3, w: 1, h: 1 }}
				>
					<p>Peer count</p>
                    <h1>{numberWithCommas(networks.peerCount)}</h1>
				</div>    
				<div style={roundedBox}
					className="grid-cell"
					key="9"
					data-grid={{ x: 1, y: 3, w: 1, h: 1 }}
				>
					<p>Protocol version</p>
                    <h1>{networks.protocolVersion}</h1>
				</div>     
				<div style={roundedBox}
					className="grid-cell"
					key="10"
					data-grid={{ x: 2, y: 3, w: 1, h: 1 }}
				>
					<p>Relay fee</p>
                    <h1>{networks.relayFee}</h1>
				</div>  
				<div style={roundedBox}
					className="grid-cell"
					key="11"
					data-grid={{ x: 3, y: 3, w: 1, h: 1 }}
				>
					<p>Total amount</p>
                    <h1>{numberWithCommas(Math.round(networks.totalAmount))}</h1>
				</div>    
				<div style={roundedBox}
					className="grid-cell"
					key="12"
					data-grid={{ x: 0, y: 4, w: 2, h: 1 }}
				>
					<p>Sprout pool</p>
                    <h1>{numberWithCommas(parseFloat(networks.sproutPool).toFixed(2))}</h1>
				</div> 
				<div style={roundedBox}
					className="grid-cell"
					key="13"
					data-grid={{ x: 2, y: 4, w: 2, h: 1 }}
				>
					<p>Sapling pool</p>
                    <h1>{numberWithCommas(parseFloat(networks.saplingPool).toFixed(2))}</h1>
				</div>                                                     
				<div style={roundedBox}
					className="grid-cell"
					key="14"
					data-grid={{ x: 0, y: 5, w: 1, h: 1 }}
				>
					<p>Version</p>
                    <h1>{networks.version}</h1>
				</div>   
				<div style={roundedBox}
					className="grid-cell"
					key="15"
					data-grid={{ x: 1, y: 5, w: 2, h: 1 }}
				>
					<p>Sub version</p>
                    <h1>{networks.subVersion}</h1>
				</div>                                                                                                                                      
			</ResponsiveGridLayout>                  
        </div>
    )
 }

 export default Networks 