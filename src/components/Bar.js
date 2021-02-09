import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import defs from '../nivostyles/defs.js'
import fill from '../nivostyles/fill.js'
import axisColorSettings from '../nivostyles/axisColorSettings.js'

function Bar(props) {
        /*
            Definition of "shielded only" is any category containing the words:
            * shielded
            * deshielding
            * shielding
        */                  
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
        uniqueKeys.sort()
        let axisBottom = {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 90,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32
            }      
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
            isInteractive={true}
            theme={axisColorSettings.theme}
            defs={defs}
            fill={fill}
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
            tooltip={({ id, value }) => (
                <span style={{ fontSize: 14 }}>
                    {id}: {value}
                </span>
            )}            
            labelSkipWidth={22}
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