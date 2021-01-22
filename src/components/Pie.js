import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import axisColorSettings from '../nivostyles/axisColorSettings.js'

function Pie(props) {       
        let categoryHash = {}   
        let data = []
        props.transactions.forEach((transaction) => {
            transaction.categories.forEach((category) => {
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
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: -50,
                    translateY: 0,
                    itemsSpacing: 10,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
        )        
}

export default Pie     