export function fetchAccounts(data) {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ACCOUNTS'})
       //fetch('https://damp-citadel-47471.herokuapp.com/api/v1/accounts')
       fetch('http://localhost:3000/api/v1/accounts')
       .then(resp => resp.json())
       .then(accounts => dispatch({
          type: 'ADD_ACCOUNTS',
          payload: accounts
       }))
    }
 }