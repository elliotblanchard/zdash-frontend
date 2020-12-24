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
	background:'#73AD21',
	borderRadius:'20px',
	padding:'20px'	
}

const Transactions = ({transactions}) => {
		return (
			<Jumbotron>  
				<ResponsiveGridLayout
				breakpoints={breakpoints}
				cols={cols}
				>
					<div style={styles}
						className="grid-cell"
						key="1"
						data-grid={{ x: 0, y: 0, w: 4, h: 3 }}
					>
						<h3>All transactions (times GMT)</h3>
						<Bar transactions={transactions} shieldedOnly={false}/>
					</div> 
					<div style={styles}
						className="grid-cell"
						key="3"
						data-grid={{ x: 0, y: 3, w: 4, h: 3 }}
					>
						<h3>Shielded only (bar)</h3>
						<Bar transactions={transactions} shieldedOnly={true}/>
					</div>					 
					<div style={styles}
						className="grid-cell"
						key="2"
						data-grid={{ x: 0, y: 6, w: 4, h: 3 }}
					>
						<h3>Percentage of total</h3>
						<Bump transactions={transactions}/>
					</div>              
					<div style={styles}
						className="grid-cell"
						key="4"
						data-grid={{ x: 0, y: 9, w: 2, h: 3 }}
					>
						<h3>Percentage of total period (pie)</h3>
						<Pie  transactions={transactions}/>
					</div>                   
					<div style={styles}
						className="grid-cell"
						key="5"
						data-grid={{ x: 2, y: 9, w: 2, h: 3 }}
					>
						<h3>Percentage of total period (pie)</h3>
						<Pie  transactions={transactions}/>
					</div>  					             
				</ResponsiveGridLayout>            
				{/*                      
				<Row>
					<Col>
						<Jumbotron className="h-99">
						<h1>All transactions</h1>
						<p>
							Stacked bar
						</p>
						</Jumbotron> 
					</Col>                
				</Row>     
				<Row>
					<Col>                      
						<Jumbotron className="h-99">
						<h1>Percentage of total</h1>
						<p>
							Bump
						</p>
						</Jumbotron>   
					</Col>                
				</Row>  
				<Row>
					<Col>                      
						<Jumbotron className="h-99">
						<h1>Shielded only</h1>
						<p>
							Stacked bar
						</p>
						</Jumbotron>   
					</Col>  
					<Col>                      
						<Jumbotron className="h-99">
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
				*/}       
			</Jumbotron>
		)	
 }

 export default Transactions 