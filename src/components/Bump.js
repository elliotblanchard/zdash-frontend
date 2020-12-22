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
                categoryHash[categoryName].data.push({x:transaction.display_time, y:category[1]})
            })                
        }) 
        console.log(categoryHash)        

		return ( 
			<div>
				Hello
			</div>
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