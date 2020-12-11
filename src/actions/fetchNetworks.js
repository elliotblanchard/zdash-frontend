export function fetchNetworks(data) {
    return (dispatch) => {
       fetch('http://localhost:3000/api/v1/networks')
       .then(resp => resp.json())
       .then(networks => dispatch({
          type: 'FETCH_NETWORKS',
          payload: networks
       }))
    }
 }