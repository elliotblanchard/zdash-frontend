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
        console.log(data)
		return ( 
            <ResponsiveAreaBump
            data={data}
            margin={{ top: 50, right: 120, bottom: 75, left: 120 }}
            spacing={8}            
            colors={{ scheme: 'nivo' }}
            blendMode="multiply"  
            startLabel="id"
            axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 90,
                legend: '',
                legendPosition: 'middle',
                legendOffset: -36
            }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 90,
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