import React from 'react';
import { ResponsivePie } from '@nivo/pie';

function Pie(props) {
    if ( (props.transactions !== undefined) && (props.transactions.length > 0) ) { 
        
        let total = 0
        let categoryHash = {}   
        let data = []
        props.transactions.forEach((transaction) => {
            total += transaction.total
            transaction.categories.forEach((category) => {
                let categoryName = category[0].toLowerCase()
                if (!categoryHash[categoryName]) {
                    categoryHash[categoryName] = {id:categoryName,label:categoryName, value:0}
                } 
                categoryHash[categoryName].value += category[1]
            })                
        }) 
        data = Object.values(categoryHash) 
        console.log(`Total is: ${total}`)       
        console.log(data)        

        return ( 
            <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: 'color' }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
            isInteractive={false}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 3,
                    padding: 5,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'sapling deshielding'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sapling shielded'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sapling shielding'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sprout deshielding'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'sprout shielded'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'sprout shielding'
                    },
                    id: 'lines'
                },
            ]}
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: 0,
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
    } else {
        return ( 
            <div>
                Loading!
            </div>
        )
    }          
}

export default Pie     