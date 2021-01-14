import React from 'react'
import Bar from './Bar'
import Bump from './Bump'
import Pie from './Pie'
import roundedBox from '../nivostyles/roundedBox.js'
import cols from '../nivostyles/cols.js'
import breakpoints from '../nivostyles/breakpoints.js'
import { Responsive, WidthProvider } from 'react-grid-layout'

// Handles the responsive nature of the grid
const ResponsiveGridLayout = WidthProvider(Responsive)

function printProps(transactions) {
	console.log(transactions)
}

const Transactions = ({transactions}) => {
		{printProps(transactions)}
		return (
			<ResponsiveGridLayout
			breakpoints={breakpoints}
			cols={cols}
			>
				<div style={roundedBox}
					className="grid-cell"
					key="1"
					data-grid={{ x: 0, y: 0, w: 4, h: 3 }}
				>
					By Type: All
					<Bar transactions={transactions} shieldedOnly={false}/>
				</div> 
				<div style={roundedBox}
					className="grid-cell"
					key="3"
					data-grid={{ x: 0, y: 3, w: 4, h: 3 }}
				>
					By Type: Shielded Only
					<Bar transactions={transactions} shieldedOnly={true}/>
				</div>					 
				<div style={roundedBox}
					className="grid-cell"
					key="2"
					data-grid={{ x: 0, y: 6, w: 4, h: 3 }}
				>
					By Type: Percentage of Total
					<Bump transactions={transactions}/>
				</div>              
				<div style={roundedBox}
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