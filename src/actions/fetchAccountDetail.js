export function fetchAccountDetail(data) {
    return (dispatch) => {
       dispatch({ type: 'LOADING_ACCOUNT_DETAIL'})
       dispatch({ type: 'LOADING_FLAG'})        
       //fetch(`https://damp-citadel-47471.herokuapp.com/api/v1/accounts/${data}`)
       fetch(`http://localhost:3000/api/v1/accounts/${data}`)
       .then(resp => resp.json())
       .then(accountDetail => dispatch({ type: 'ADD_ACCOUNT_DETAIL', payload: accountDetail }))
       .then(loading => dispatch({ type: 'LOADED_FLAG' }))   
       fetch(`http://localhost:3000/api/v1/users/${data}`)
       .then(resp => resp.json())
       .then(user => dispatch({ type: 'ADD_USERS', payload: user }))             
    }
 }