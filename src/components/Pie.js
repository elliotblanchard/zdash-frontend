import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import defs from '../nivostyles/defs.js'
import fill from '../nivostyles/fill.js'
import axisColorSettings from '../nivostyles/axisColorSettings.js'

function Pie(props) {       
        let categoryHash = {}   
        let data = []
        props.transactions.forEach((transaction) => {
            transaction.categories.forEach((category) => {
                let categoryName = category[0].toLowerCase()
                if (!categoryHash[categoryName]) {
                    categoryHash[categoryName] = {id:categoryName,label:categoryName, value:0}
                } 
                categoryHash[categoryName].value += parseInt(category[1])
            })                
        }) 
        data = Object.values(categoryHash)       
        console.log(data)
        return ( 
            <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'nivo' }}
            borderWidth={0}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}            
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#bbb"
            radialLabelsLinkColor="#bbb"
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333"
            isInteractive={false}
            theme={axisColorSettings.theme}            
            defs={defs}
            fill={fill}            
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