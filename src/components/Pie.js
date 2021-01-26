import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import axisColorSettings from '../nivostyles/axisColorSettings.js'
import assignColors from '../nivostyles/assignColors.js'

function Pie(props) {       
        let categoryHash = {}   
        let data = []
        props.transactions.forEach((transaction) => {
            transaction.categories.forEach((category) => {
                let categoryName = category[0].toLowerCase()
                let categoryColor = ''
                categoryColor = assignColors(categoryName)              
                if (!categoryHash[categoryName]) {
                    categoryHash[categoryName] = {id:categoryName,color:categoryColor,label:categoryName, value:0}
                } 
                categoryHash[categoryName].value += parseInt(category[1])
            })                
        }) 
        data = Object.values(categoryHash)       
        return ( 
            <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ datum: 'data.color' }}
            borderWidth={0}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}            
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#bbb"
            radialLabelsLinkColor="#bbb"
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333"
            isInteractive={true}
            theme={axisColorSettings.theme}                                    
        />
        )        
}

export default Pie     