import React from 'react'
import { ResponsiveAreaBump } from '@nivo/bump'
import axisColorSettings from '../nivostyles/axisColorSettings.js'
import assignColors from '../nivostyles/assignColors.js'
import transactionCategories from '../nivostyles/transactionCategories.js'

function prepData(props)  {
    let categoryHash = {} 
    for (let i = 0; i < props.transactions.length; i++) {
        transactionCategories.forEach((category) => {
            let categoryName = category
            let categoryColor = assignColors(categoryName)
            let categoryData = undefined
            if (!categoryHash[categoryName]) {
                categoryHash[categoryName] = {id:categoryName,color:categoryColor,data:[]}
            } 
            categoryData = props.transactions[i].categories.find(element => element[0].toLowerCase() === category)
            if (categoryData === undefined) categoryData = [categoryName, "0"] // No data for this category in this time period
            const percentage = Number((categoryData[1] / props.transactions[i].total).toFixed(3))
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
        margin={{ top: 25, right: 120, bottom: 75, left: 120 }}
        spacing={8}            
        colors={{ datum: 'color' }}
        isInteractive={true}
        theme={axisColorSettings.theme}             
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