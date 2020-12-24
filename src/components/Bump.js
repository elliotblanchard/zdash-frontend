import React from 'react';
import { ResponsiveAreaBump } from '@nivo/bump';

function Bump(props) {
    if ( (props.transactions !== undefined) && (props.transactions.length > 0) ) {  

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
            blendMode="normal"  
            startLabel="id"
            axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -36
            }}
            axisBottom={{
                tickSize: 5,
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
	} else {
		return ( 
			<div>
				Loading!
			</div>
		)
	}          
}

export default Bump 