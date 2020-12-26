import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

function Bar(props) {
        /*
            Definition of "shielded only" is any category containing the words:
            * shielded
            * deshielding
            * shielding
        */             
       const axisColorSettings = {
        theme: {
        textColor: '#bbb',       
        },
        }       
        let keys = []   
        let data = []
        props.transactions.forEach((transaction) => {
            let interval = {}
            interval[transaction.unit] = transaction.display_time
            transaction.categories.forEach((category) => {
                if (!props.shieldedOnly) {
                    interval[category[0].toLowerCase()] = category[1]
                    keys.push(category[0].toLowerCase())
                } else {
                    if (category[0].toLowerCase().includes('shield')) {
                        interval[category[0].toLowerCase()] = category[1]
                        keys.push(category[0].toLowerCase())
                    }
                }
            }) 
            data.push(interval)                
        }) 
        let uniqueKeys = [...new Set(keys)]
        uniqueKeys.reverse()
        let axisBottom = {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32
            } 
        axisBottom.legend = props.transactions[0].unit       
        return ( 
            <ResponsiveBar
            data={data}
            keys={uniqueKeys}
            indexBy={props.transactions[0].unit}
            margin={{ top: 50, right: 150, bottom: 75, left: 80 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            isInteractive={false}
            theme={axisColorSettings.theme}
            defs={[
                {
                    id: 'sapling_deshielding',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#48F9B8' },
                        { offset: 100, color: '#48F9B8' },
                    ],
                },
                {
                    id: 'sapling_shielded',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#52F25D' },
                        { offset: 100, color: '#52F25D' },
                    ],
                },
                {
                    id: 'sapling_shielding',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#B5F948' },
                        { offset: 100, color: '#B5F948' },
                    ],
                },     
                {
                    id: 'sprout_deshielding',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#F93611' },
                        { offset: 100, color: '#F93611' },
                    ],
                },
                {
                    id: 'sprout_shielded',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#F21D81' },
                        { offset: 100, color: '#F21D81' },
                    ],
                },
                {
                    id: 'sprout_shielding',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#BE11F9' },
                        { offset: 100, color: '#BE11F9' },
                    ],
                },    
                {
                    id: 'transparent',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#2D8DFA' },
                        { offset: 100, color: '#2D8DFA' },
                    ],
                },
                {
                    id: 'transparent_coinbase',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#2EADDB' },
                        { offset: 100, color: '#2EADDB' },
                    ],
                }                                         
            ]}
            fill={[
                {
                    match: {
                        id: 'sapling deshielding'
                    },
                    id: 'sapling_deshielding'
                },
                {
                    match: {
                        id: 'sapling shielded'
                    },
                    id: 'sapling_shielded'
                },
                {
                    match: {
                        id: 'sapling shielding'
                    },
                    id: 'sapling_shielding'
                },
                {
                    match: {
                        id: 'sprout deshielding'
                    },
                    id: 'sprout_deshielding'
                },
                {
                    match: {
                        id: 'sprout shielded'
                    },
                    id: 'sprout_shielded'
                },
                {
                    match: {
                        id: 'sprout shielding'
                    },
                    id: 'sprout_shielding'
                },
                {
                    match: {
                        id: 'transparent'
                    },
                    id: 'transparent'
                },
                {
                    match: {
                        id: 'transparent coinbase'
                    },
                    id: 'transparent_coinbase'
                },                
            ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            axisTop={null}
            axisRight={null}
            axisBottom={axisBottom}
            axisLeft={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transactions',
                legendPosition: 'middle',
                legendOffset: -50
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="#333"
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
 }

export default Bar 