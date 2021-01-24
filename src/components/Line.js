import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import axisColorSettings from '../nivostyles/axisColorSettings.js'

function prepData(props)  {
    let categoryHash = {} 
    for (let i = 0; i < props.transactions.length; i++) {
        props.transactions[i].categories.forEach((category) => {
            let categoryName = category[0].toLowerCase()
            let categoryColor = ''
            switch (categoryName) {
                case 'sapling deshielding':
                    categoryColor = '#48F9B8'
                    break
                case 'sapling shielded':
                    categoryColor = '#52F25D'
                    break                    
                case 'sapling shielding':
                    categoryColor = '#B5F948'
                    break 
                case 'sprout deshielding':
                    categoryColor = '#F93611'
                    break                      
                case 'sprout shielded':
                    categoryColor = '#F21D81'
                    break 
                case 'sprout shielding':
                    categoryColor = '#BE11F9'
                    break   
                case 'transparent':
                    categoryColor = '#2D8DFA'
                    break 
                case 'transparent coinbase':
                    categoryColor = '#2EADDB'
                    break
                default:
                    categoryColor = '#AAAAAA'                                                                                      
            }
            if (!categoryHash[categoryName]) {
                categoryHash[categoryName] = {id:categoryName,color:categoryColor,data:[]}
            } 
            const percentage = Number((category[1] / props.transactions[i].total).toFixed(3)*100 )
            categoryHash[categoryName].data.push({x:props.transactions[i].display_time, y:percentage})
        })                
    }

    return categoryHash
}

function printProps(prop) {
    console.log(prop)
}

function Line(props) {   
    let data = []
    data = Object.values(prepData(props))   
    return ( 
        <ResponsiveLine
        data={data}
        theme={axisColorSettings.theme}              
        borderColor={{ from: 'fill' }} 
        boarderOpacity={0}   
        startLabelTextColor="#bbb" 
        endLabelTextColor="#bbb"         
        margin={{ top: 50, right: 150, bottom: 75, left: 80 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        yFormat=" >-.2f"
        curve="cardinal"
        isInteractive={true}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'percentage',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        tooltip={({ point, value }) => (
            <span style={{ fontSize: 14 }}>
                {point.serieId}: {point.data.yFormatted}%
            </span>
        )}         
        colors={{ datum: 'color' }}       
        lineWidth={3}
        pointSize={12}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={false}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .06)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        />                      
    )                       
}

export default Line 