import React from 'react'
import Bar from './Bar'
import Bump from './Bump'
import Pie from './Pie'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Responsive, WidthProvider } from 'react-grid-layout'

// Handles the responsive nature of the grid
const ResponsiveGridLayout = WidthProvider(Responsive);
// Determines the screen breakpoints for the columns
const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320 };
// How many columns are available at each breakpoint
const cols = { lg: 4, md: 4, sm: 1, xs: 1, xxs: 1 };

var styles = {
	color:'white',
	backgroundColor:'black',
	background:'#262736',
	borderRadius:'10px',
	padding:'20px'	
}

const Transactions = ({transactions}) => {
		return (
				<ResponsiveGridLayout
				breakpoints={breakpoints}
				cols={cols}
				>
					<div style={styles}
						className="grid-cell"
						key="1"
						data-grid={{ x: 0, y: 0, w: 4, h: 3 }}
					>
						By Type: All
						<Bar transactions={transactions} shieldedOnly={false}/>
					</div> 
					<div style={styles}
						className="grid-cell"
						key="3"
						data-grid={{ x: 0, y: 3, w: 4, h: 3 }}
					>
						By Type: Shielded Only
						<Bar transactions={transactions} shieldedOnly={true}/>
					</div>					 
					<div style={styles}
						className="grid-cell"
						key="2"
						data-grid={{ x: 0, y: 6, w: 4, h: 3 }}
					>
						By Type: Percentage of Total
						<Bump transactions={transactions}/>
					</div>              
					<div style={styles}
						className="grid-cell"
						key="4"
						data-grid={{ x: 0, y: 9, w: 4, h: 3 }}
					>
						By Type: Totals for Time Period
						<Pie  transactions={transactions}/>
					</div>                    					             
				</ResponsiveGridLayout>                 
		)	
 }

 export default Transactions 