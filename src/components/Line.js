import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import axisColorSettings from '../nivostyles/axisColorSettings.js'
import assignColors from '../nivostyles/assignColors.js'
import transactionCategories from '../nivostyles/transactionCategories.js'

function prepData(props)  {
    //console.log(transactionCategories)
    let categoryHash = {} 
    for (let i = 0; i < props.transactions.length; i++) {
        let categoryName = ''
        let categoryColor = ''
        let categoryData = undefined
        let shieldedTotal = 0
        // You need to cycle through assign colors - not the category hash
        // if the category you're looking at DOES have data in the hash, use it
        // Otherwise use zero
        //console.log(props.transactions[i].categories)
        transactionCategories.forEach((category) => {
            if (!props.z2zOnly) {
                categoryName = category
                categoryColor = assignColors(categoryName)
                if (!categoryHash[categoryName]) {
                    categoryHash[categoryName] = {id:categoryName,color:categoryColor,data:[]}
                }
                categoryData = props.transactions[i].categories.find(element => element[0].toLowerCase() === category)
                if (categoryData === undefined) categoryData = [categoryName, "0"] // No data for this category in this time period 
                const percentage = Number((categoryData[1] / props.transactions[i].total).toFixed(3)*100 )
                categoryHash[categoryName].data.push({x:props.transactions[i].display_time, y:percentage})                               
            }
            else {
                categoryName = 'Fully shielded'
                categoryColor = '#65E336'   
                if ( (category === 'sapling shielded') || (category === 'sprout shielded') ) {
                    categoryData = props.transactions[i].categories.find(element => element[0].toLowerCase() === category)
                    if (categoryData === undefined) categoryData = [categoryName, "0"] // No data for this category in this time period
                    shieldedTotal += Number(categoryData[1])
                    //console.log(`CategoryData is: ${categoryData} and shieldedTotal is: ${shieldedTotal}`)
                }             
            }            
        })
        /*
        props.transactions[i].categories.forEach((category) => {
            if (!props.z2zOnly) { 
                categoryName = category[0].toLowerCase()
                categoryColor = assignColors(categoryName)
                if (!categoryHash[categoryName]) {
                    categoryHash[categoryName] = {id:categoryName,color:categoryColor,data:[]}
                } 
                const percentage = Number((category[1] / props.transactions[i].total).toFixed(3)*100 )
                categoryHash[categoryName].data.push({x:props.transactions[i].display_time, y:percentage})
            }
            else {
                categoryName = 'Fully shielded'
                categoryColor = '#65E336'   
                if ( (category[0].toLowerCase() === 'sapling shielded') || (category[0].toLowerCase() === 'sprout shielded') ) {
                    shieldedTotal += category[1]
                }             
            }
        }) 
        */
        if (props.z2zOnly) { 
            if (!categoryHash[categoryName]) {
                categoryHash[categoryName] = {id:categoryName,color:categoryColor,data:[]}
            }
            //console.log(`shieldedTotal is ${shieldedTotal} and total is: ${props.transactions[i].total}`)  
            const percentage = Number((shieldedTotal / props.transactions[i].total).toFixed(3)*100 )  
            categoryHash[categoryName].data.push({x:props.transactions[i].display_time, y:percentage})     
        }           
    }

    return categoryHash
}

function setYScale(props)  {
    if (props.z2zOnly) { 
        return({ type: 'linear', min: '0', max: '50', stacked: false, reverse: false })
    } else {
        return({ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false })
    }
}

function Line(props) {   
    let data = []
    data = Object.values(prepData(props))  
    //console.log(data)
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
        yScale={setYScale(props)}
        yFormat=" >-.2f"
        curve="linear"
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
            <span style={{ background: '#334', padding: '10px 10px', fontSize: 14 }}>
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