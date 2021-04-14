export function fetchTransactions(time) {
   return (dispatch) => {
      dispatch({ type: 'LOADING_TRANSACTIONS'})
      dispatch({ type: 'LOADING_POOLS'})
      dispatch({ type: 'LOADING_FLAG'})
      fetch(`https://damp-citadel-47471.herokuapp.com/api/v1/transactions/${time}`)
      //fetch(`http://localhost:3000/api/v1/transactions/${time}`)
         .then(resp => resp.json())
         .then(transactions => dispatch({ type: 'ADD_TRANSACTIONS', payload: transactions }))
         .then(loading => dispatch({ type: 'LOADED_FLAG' })) 
      fetch(`http://localhost:3000/api/v1/pools/${time}`)
      .then(resp => resp.json())
      .then(pools => dispatch({ type: 'ADD_POOLS', payload: pools }))               
   }
}