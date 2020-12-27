export function fetchTransactions(time) {
   return (dispatch) => {
      dispatch({ type: 'LOADING_TRANSACTIONS'})
      fetch(`http://localhost:3000/api/v1/transactions/${time}`)
      .then(resp => resp.json())
      .then(transactions => dispatch({
         type: 'ADD_TRANSACTIONS',
         payload: transactions
      }))
   }
}