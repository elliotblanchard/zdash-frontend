export function fetchPools(time) {
    return (dispatch) => {
       dispatch({ type: 'LOADING_POOLS'})
       // fetch(`https://damp-citadel-47471.herokuapp.com/api/v1/pools/${time}`)
       fetch(`http://localhost:3000/api/v1/pools/${time}`)
          .then(resp => resp.json())
          .then(pools => dispatch({ type: 'ADD_POOLS', payload: pools }))    
    }
 }