export function fetchNetworks(data) {
    return (dispatch) => {
       dispatch({ type: 'LOADING_NETWORKS'})
       dispatch({ type: 'LOADING_FLAG'})       
       fetch('https://damp-citadel-47471.herokuapp.com/api/v1/networks')
       .then(resp => resp.json())
       .then(networks => dispatch({ type: 'ADD_NETWORKS', payload: networks }))
       .then(loading => dispatch({ type: 'LOADED_FLAG' }))       
    }
 }