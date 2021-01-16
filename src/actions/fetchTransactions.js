export function fetchTransactions(time) {
   console.log(time)
   return (dispatch) => {
      dispatch({ type: 'LOADING_TRANSACTIONS'})
      fetch(`https://damp-citadel-47471.herokuapp.com/api/v1/transactions/${time}`)
      //fetch(`http://localhost:3000/api/v1/transactions/${time}`)
      .then(resp => resp.json())
      .then(transactions => dispatch({
         type: 'ADD_TRANSACTIONS',
         payload: transactions
      }))
   }
}