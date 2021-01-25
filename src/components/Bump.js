import React from 'react'
import { ResponsiveAreaBump } from '@nivo/bump'
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
                case 'shielded coinbase':
                    categoryColor = '#F5A92D'
                    break                     
                default:
                    categoryColor = '#AAAAAA'                                                                                      
            }          
            if (!categoryHash[categoryName]) {
                categoryHash[categoryName] = {id:categoryName,color:categoryColor,data:[]}
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