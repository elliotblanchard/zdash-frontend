import React from 'react'
import Bar from './Bar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { ResponsiveBar } from '@nivo/bar'

// Handles the responsive nature of the grid
const ResponsiveGridLayout = WidthProvider(Responsive);
// Determines the screen breakpoints for the columns
const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320 };
// How many columns are available at each breakpoint
const cols = { lg: 4, md: 4, sm: 1, xs: 1, xxs: 1 };

const Transactions = ({transactions}) => {
		return (
			<div>   
				<ResponsiveGridLayout
				breakpoints={breakpoints}
				cols={cols}
				>
					<div
						className="grid-cell"
						key="1"
						data-grid={{ x: 0, y: 0, w: 4, h: 3 }}
					>
						<h3>All transactions (times GMT)</h3>
						<Bar transactions={transactions}/>
					</div>  
					<div
						className="grid-cell"
						key="2"
						data-grid={{ x: 0, y: 3, w: 4, h: 3 }}
					>
						<h3>Percentage of total (bump)</h3>
						<Bar />
					</div>              
					<div
						className="grid-cell"
						key="3"
						data-grid={{ x: 0, y: 6, w: 2, h: 3 }}
					>
						<h3>Shielded only (bar)</h3>
						<Bar />
					</div>
					<div
						className="grid-cell"
						key="4"
						data-grid={{ x: 2, y: 6, w: 2, h: 3 }}
					>
						<h3>Percentage of total period (pie)</h3>
						<Bar />
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
			</div>
		)	
 }

 const data = [
	{
		"country": "AD",
		"hot dog": 0,
		"hot dogColor": "hsl(312, 70%, 50%)",
		"burger": 128,
		"burgerColor": "hsl(208, 70%, 50%)",
		"sandwich": 67,
		"sandwichColor": "hsl(100, 70%, 50%)",
		"kebab": 185,
		"kebabColor": "hsl(114, 70%, 50%)",
		"fries": 179,
		"friesColor": "hsl(56, 70%, 50%)",
		"donut": 190,
		"donutColor": "hsl(354, 70%, 50%)"
	},
	{
		"country": "AE",
		"hot dog": 16,
		"hot dogColor": "hsl(113, 70%, 50%)",
		"burger": 78,
		"burgerColor": "hsl(121, 70%, 50%)",
		"sandwich": 145,
		"sandwichColor": "hsl(355, 70%, 50%)",
		"kebab": 101,
		"kebabColor": "hsl(113, 70%, 50%)",
		"fries": 178,
		"friesColor": "hsl(243, 70%, 50%)",
		"donut": 134,
		"donutColor": "hsl(86, 70%, 50%)"
	},
	{
		"country": "AF",
		"hot dog": 21,
		"hot dogColor": "hsl(68, 70%, 50%)",
		"burger": 170,
		"burgerColor": "hsl(296, 70%, 50%)",
		"sandwich": 154,
		"sandwichColor": "hsl(19, 70%, 50%)",
		"kebab": 8,
		"kebabColor": "hsl(301, 70%, 50%)",
		"fries": 77,
		"friesColor": "hsl(91, 70%, 50%)",
		"donut": 105,
		"donutColor": "hsl(68, 70%, 50%)"
	},
	{
		"country": "AG",
		"hot dog": 104,
		"hot dogColor": "hsl(141, 70%, 50%)",
		"burger": 192,
		"burgerColor": "hsl(121, 70%, 50%)",
		"sandwich": 151,
		"sandwichColor": "hsl(67, 70%, 50%)",
		"kebab": 200,
		"kebabColor": "hsl(149, 70%, 50%)",
		"fries": 174,
		"friesColor": "hsl(132, 70%, 50%)",
		"donut": 24,
		"donutColor": "hsl(96, 70%, 50%)"
	},
	{
		"country": "AI",
		"hot dog": 103,
		"hot dogColor": "hsl(66, 70%, 50%)",
		"burger": 169,
		"burgerColor": "hsl(212, 70%, 50%)",
		"sandwich": 149,
		"sandwichColor": "hsl(190, 70%, 50%)",
		"kebab": 162,
		"kebabColor": "hsl(142, 70%, 50%)",
		"fries": 51,
		"friesColor": "hsl(210, 70%, 50%)",
		"donut": 69,
		"donutColor": "hsl(222, 70%, 50%)"
	},
	{
		"country": "AL",
		"hot dog": 136,
		"hot dogColor": "hsl(47, 70%, 50%)",
		"burger": 139,
		"burgerColor": "hsl(200, 70%, 50%)",
		"sandwich": 138,
		"sandwichColor": "hsl(167, 70%, 50%)",
		"kebab": 147,
		"kebabColor": "hsl(329, 70%, 50%)",
		"fries": 29,
		"friesColor": "hsl(201, 70%, 50%)",
		"donut": 156,
		"donutColor": "hsl(41, 70%, 50%)"
	},
	{
		"country": "AM",
		"hot dog": 37,
		"hot dogColor": "hsl(49, 70%, 50%)",
		"burger": 9,
		"burgerColor": "hsl(235, 70%, 50%)",
		"sandwich": 108,
		"sandwichColor": "hsl(225, 70%, 50%)",
		"kebab": 160,
		"kebabColor": "hsl(324, 70%, 50%)",
		"fries": 170,
		"friesColor": "hsl(0, 70%, 50%)",
		"donut": 126,
		"donutColor": "hsl(199, 70%, 50%)"
	}
]

 export default Transactions 