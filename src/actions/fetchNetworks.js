export function fetchNetworks(data) {
    return (dispatch) => {
       dispatch({ type: 'LOADING_NETWORKS'})
       fetch(`http://localhost:3000/api/v1/networks`)
       //fetch('https://damp-citadel-47471.herokuapp.com/api/v1/networks')
       .then(resp => resp.json())
       .then(networks => dispatch({
          type: 'ADD_NETWORKS',
          payload: networks
       }))
    }
 }