export function fetchTransactions() {
   return (dispatch) => {
      fetch('http://localhost:3000/api/v1/transactions')
      .then(resp => resp.json())
      .then(transactions => dispatch({
         type: 'FETCH_TRANSACTIONS',
         payload: transactions
      }))
   }
}