export function fetchAccountDetail(data) {
    return (dispatch) => {
       dispatch({ type: 'LOADING_ACCOUNT_DETAIL'})
       fetch(`https://damp-citadel-47471.herokuapp.com/api/v1/accounts/${data}`)
       .then(resp => resp.json())
       .then(accountDetail => dispatch({
          type: 'ADD_ACCOUNT_DETAIL',
          payload: accountDetail
       }))
    }
 }