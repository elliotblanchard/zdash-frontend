import React from 'react';
import { ResponsiveAreaBump } from '@nivo/bump'
import defs from '../nivostyles/defs.js'
import fill from '../nivostyles/fill.js'
import axisColorSettings from '../nivostyles/axisColorSettings.js'

function Bump(props) { 
    console.log(props)
    let categoryHash = {}   
    let data = []
    props.transactions.forEach((transaction) => {
        transaction.categories.forEach((category) => {
            let categoryName = category[0].toLowerCase()
            if (!categoryHash[categoryName]) {
                categoryHash[categoryName] = {id:categoryName,data:[]}
            } 
            const percentage = category[1] / transaction.total
            categoryHash[categoryName].data.push({x:transaction.display_time, y:percentage})
        })                
    }) 
    data = Object.values(categoryHash)       
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