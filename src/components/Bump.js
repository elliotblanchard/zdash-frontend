import React from 'react';
import { ResponsiveAreaBump } from '@nivo/bump';

function Bump(props) {
    const axisColorSettings = {
        theme: {
        textColor: '#bbb',       
        },
        }  
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
        borderColor={{ from: 'fill' }} 
        boarderOpacity={0}   
        startLabelTextColor="#bbb" 
        endLabelTextColor="#bbb"  
        blendMode="normal"  
        startLabel="id"
        axisTop={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />                      
    )                       
}

export default Bump 