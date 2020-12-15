export function fetchTransactions(time) {
   return (dispatch) => {
      // Data is state from TransactionsInput with 
      // time period to search for (not currently used)
      fetch(`http://localhost:3000/api/v1/transactions/${time}`)
      .then(resp => resp.json())
      .then(transactions => dispatch({
         type: 'FETCH_TRANSACTIONS',
         payload: transactions
      }))
   }
}