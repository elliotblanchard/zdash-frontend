export function fetchUsers(name, address) {
    return (dispatch) => {
        console.log(`Name is: ${name} and address is: ${address}`)
       /* 
       dispatch({ type: 'LOADING_FLAG'})
       //fetch(`https://damp-citadel-47471.herokuapp.com/api/v1/transactions/${time}`)
       fetch(`http://localhost:3000/api/v1/transactions/${time}`)
          .then(resp => resp.json())
          .then(users => dispatch({ type: 'ADD_USERS', payload: users }))
          .then(loading => dispatch({ type: 'LOADED_FLAG' }))    
        */ 
    }
 }