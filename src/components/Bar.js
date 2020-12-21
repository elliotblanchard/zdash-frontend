import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Bar = ({transactions}) => {
    if (transactions) { 
        let keys = []   
        transactions.map((transaction, index) => (
            transaction.categories.map((category, index) => (
                keys.push(category[0].toLowerCase())
             ))                 
        )) 
        let uniqueKeys = [...new Set(keys)]
        uniqueKeys.reverse()
        let axisBottom = {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'day',
                legendPosition: 'middle',
                legendOffset: 32
            } 
        axisBottom.legend = transactions[0].unit       
        return ( 
            <ResponsiveBar
            data={data}
            keys={uniqueKeys}
            indexBy={transactions[0].unit}
            margin={{ top: 50, right: 150, bottom: 75, left: 80 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            /*         
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'sapling deshielding'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sapling shielded'
                    },
                    id: 'lines'
                }
            ]}
            */
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={axisBottom}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transactions',
                legendPosition: 'middle',
                legendOffset: -50
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
        )
	} else {
		return ( 
			<div>
				Loading!
			</div>
		)
	}        
 }

const data = [
    {
        "day": "mon 5/15",
        "sapling deshielding": 200,
        "sapling deshieldingColor": "hsl(359, 70%, 50%)",
        "sapling shielded": 63,
        "sapling shieldedColor": "hsl(123, 70%, 50%)",
        "sapling shielding": 235,
        "sapling shieldingColor": "hsl(133, 70%, 50%)",
        "sprout deshielding": 1,
        "sprout deshieldingColor": "hsl(34, 70%, 50%)",
        "transparent": 2536,
        "transparentColor": "hsl(318, 70%, 50%)",
        "transparent coinbase": 1147,
        "transparent coinbaseColor": "hsl(70, 70%, 50%)"
      },
      {
        "day": "tue 5/16",
        "sapling deshielding": 255,
        "sapling deshieldingColor": "hsl(359, 70%, 50%)",
        "sapling shielded": 70,
        "sapling shieldedColor": "hsl(123, 70%, 50%)",
        "sapling shielding": 202,
        "sapling shieldingColor": "hsl(133, 70%, 50%)",
        "transparent": 2437,
        "transparentColor": "hsl(318, 70%, 50%)",
        "transparent coinbase": 1129,
        "transparent coinbaseColor": "hsl(70, 70%, 50%)"
      },
      {
        "day": "wed 5/17",
        "sapling deshielding": 198,
        "sapling deshieldingColor": "hsl(359, 70%, 50%)",
        "sapling shielded": 79,
        "sapling shieldedColor": "hsl(123, 70%, 50%)",
        "sapling shielding": 204,
        "sapling shieldingColor": "hsl(133, 70%, 50%)",
        "transparent": 2632,
        "transparentColor": "hsl(318, 70%, 50%)",
        "transparent coinbase": 1097,
        "transparent coinbaseColor": "hsl(70, 70%, 50%)"
      },   
      {
        "day": "thu 5/18",
        "sapling deshielding": 249,
        "sapling deshieldingColor": "hsl(359, 70%, 50%)",
        "sapling shielded": 148,
        "sapling shieldedColor": "hsl(123, 70%, 50%)",
        "sapling shielding": 204,
        "sapling shieldingColor": "hsl(133, 70%, 50%)",
        "sprout deshielding": 1,
        "sprout deshieldingColor": "hsl(34, 70%, 50%)",
        "transparent": 2635,
        "transparentColor": "hsl(318, 70%, 50%)",
        "transparent coinbase": 1065,
        "transparent coinbaseColor": "hsl(70, 70%, 50%)"
      },      
      {
        "day": "fri 5/19",
        "sapling deshielding": 178,
        "sapling deshieldingColor": "hsl(359, 70%, 50%)",
        "sapling shielded": 149,
        "sapling shieldedColor": "hsl(123, 70%, 50%)",
        "sapling shielding": 159,
        "sapling shieldingColor": "hsl(133, 70%, 50%)",
        "sprout deshielding": 4,
        "sprout deshieldingColor": "hsl(34, 70%, 50%)",
        "transparent": 2011,
        "transparentColor": "hsl(318, 70%, 50%)",
        "transparent coinbase": 740,
        "transparent coinbaseColor": "hsl(70, 70%, 50%)"
      },     
      {
        "day": "sat 5/20",
        "sapling deshielding": 204,
        "sapling deshieldingColor": "hsl(359, 70%, 50%)",
        "sapling shielded": 76,
        "sapling shieldedColor": "hsl(123, 70%, 50%)",
        "sapling shielding": 179,
        "sapling shieldingColor": "hsl(133, 70%, 50%)",
        "sprout deshielding": 2,
        "sprout deshieldingColor": "hsl(34, 70%, 50%)",
        "transparent": 2990,
        "transparentColor": "hsl(318, 70%, 50%)",
        "transparent coinbase": 913,
        "transparent coinbaseColor": "hsl(70, 70%, 50%)"
      },    
      {
        "day": "sun 5/21",
        "sapling deshielding": 166,
        "sapling deshieldingColor": "hsl(359, 70%, 50%)",
        "sapling shielded": 113,
        "sapling shieldedColor": "hsl(123, 70%, 50%)",
        "sapling shielding": 172,
        "sapling shieldingColor": "hsl(133, 70%, 50%)",
        "sprout deshielding": 3,
        "sprout deshieldingColor": "hsl(34, 70%, 50%)",
        "transparent": 2407,
        "transparentColor": "hsl(318, 70%, 50%)",
        "transparent coinbase": 826,
        "transparent coinbaseColor": "hsl(70, 70%, 50%)"
      },                
];

export default Bar 