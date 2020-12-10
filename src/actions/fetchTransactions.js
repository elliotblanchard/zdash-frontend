export function fetchTransactions(data) {
   return (dispatch) => {
      // Data is state from TransactionsInput with time period to search for
      fetch('http://localhost:3000/api/v1/transactions')
      .then(resp => resp.json())
      .then(transactions => dispatch({
         type: 'FETCH_TRANSACTIONS',
         payload: transactions
      }))
   }
}