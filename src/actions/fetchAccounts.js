export function fetchAccounts(data) {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ACCOUNTS'})
       fetch('http://localhost:3000/api/v1/accounts')
       .then(resp => resp.json())
       .then(accounts => dispatch({
          type: 'ADD_ACCOUNTS',
          payload: accounts
       }))
    }
 }