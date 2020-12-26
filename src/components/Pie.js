import React from 'react';
import { ResponsivePie } from '@nivo/pie';

function Pie(props) {
        const axisColorSettings = {
            theme: {
            textColor: '#bbb',       
            },
            }         
        //let total = 0
        let categoryHash = {}   
        let data = []
        props.transactions.forEach((transaction) => {
            //total += transaction.total
            transaction.categories.forEach((category) => {
                let categoryName = category[0].toLowerCase()
                if (!categoryHash[categoryName]) {
                    categoryHash[categoryName] = {id:categoryName,label:categoryName, value:0}
                } 
                categoryHash[categoryName].value += category[1]
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
            defs={[
                {
                    id: 'sapling_deshielding',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#48F9B8' },
                        { offset: 100, color: '#48F9B8' },
                    ],
                },
                {
                    id: 'sapling_shielded',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#52F25D' },
                        { offset: 100, color: '#52F25D' },
                    ],
                },
                {
                    id: 'sapling_shielding',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#B5F948' },
                        { offset: 100, color: '#B5F948' },
                    ],
                },     
                {
                    id: 'sprout_deshielding',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#F93611' },
                        { offset: 100, color: '#F93611' },
                    ],
                },
                {
                    id: 'sprout_shielded',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#F21D81' },
                        { offset: 100, color: '#F21D81' },
                    ],
                },
                {
                    id: 'sprout_shielding',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#BE11F9' },
                        { offset: 100, color: '#BE11F9' },
                    ],
                },    
                {
                    id: 'transparent',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#2D8DFA' },
                        { offset: 100, color: '#2D8DFA' },
                    ],
                },
                {
                    id: 'transparent_coinbase',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: '#2EADDB' },
                        { offset: 100, color: '#2EADDB' },
                    ],
                }                                         
            ]}
            fill={[
                {
                    match: {
                        id: 'sapling deshielding'
                    },
                    id: 'sapling_deshielding'
                },
                {
                    match: {
                        id: 'sapling shielded'
                    },
                    id: 'sapling_shielded'
                },
                {
                    match: {
                        id: 'sapling shielding'
                    },
                    id: 'sapling_shielding'
                },
                {
                    match: {
                        id: 'sprout deshielding'
                    },
                    id: 'sprout_deshielding'
                },
                {
                    match: {
                        id: 'sprout shielded'
                    },
                    id: 'sprout_shielded'
                },
                {
                    match: {
                        id: 'sprout shielding'
                    },
                    id: 'sprout_shielding'
                },
                {
                    match: {
                        id: 'transparent'
                    },
                    id: 'transparent'
                },
                {
                    match: {
                        id: 'transparent coinbase'
                    },
                    id: 'transparent_coinbase'
                },                
            ]}            
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: -100,
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