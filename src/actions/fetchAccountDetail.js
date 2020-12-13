export function fetchAccountDetail(data) {
    return (dispatch) => {
       fetch(`http://localhost:3000/api/v1/accounts/${data}`)
       .then(resp => resp.json())
       .then(accountDetail => dispatch({
          type: 'FETCH_ACCOUNT_DETAIL',
          payload: accountDetail
       }))
    }
 }