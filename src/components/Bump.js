import React from 'react';
import { ResponsiveAreaBump } from '@nivo/bump'
import defs from '../nivostyles/defs.js'
import fill from '../nivostyles/fill.js'
import axisColorSettings from '../nivostyles/axisColorSettings.js'

function prepData(props)  {
    let categoryHash = {} 
    let interval = 2
    if (props.transactions.length > 25) interval = 1 // Area bump dosen't work well with more than 25 columns - like in a month view
    for (let i = 0; i < props.transactions.length; i = i + interval) {
        props.transactions[i].categories.forEach((category) => {
            let categoryName = category[0].toLowerCase()
            if (!categoryHash[categoryName]) {
                categoryHash[categoryName] = {id:categoryName,data:[]}
            } 
            const percentage = Number((category[1] / props.transactions[i].total).toFixed(3))
            categoryHash[categoryName].data.push({x:props.transactions[i].display_time, y:percentage})
        })                
    }

    return categoryHash
}

function Bump(props) {   
    let data = []

    data = Object.values(prepData(props))     
    return ( 
        <ResponsiveAreaBump
        data={data}
        margin={{ top: 50, right: 120, bottom: 75, left: 120 }}
        spacing={8}            
        colors={{ scheme: 'nivo' }}
        isInteractive={false}
        theme={axisColorSettings.theme}            
        defs={defs}
        fill={fill}   
        borderColor={{ from: 'fill' }} 
        boarderOpacity={0}   
        startLabelTextColor="#bbb" 
        endLabelTextColor="#bbb"  
        blendMode="normal"  
        startLabel="id"
        axisTop={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 90,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
            animate={false}
            motionStiffness={90}
            motionDamping={15}
        />                      
    )                       
}

export default Bump 