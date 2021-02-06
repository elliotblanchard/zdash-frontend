export function createUser(name, address) {
    return (dispatch) => {
        console.log(`In create. Name is: ${name} and address is: ${address}`)
        dispatch({ type: 'LOADING_FLAG'})
        const bodyData = { user: { name, address } }
        //fetch(`https://damp-citadel-47471.herokuapp.com/api/v1/users`)
        fetch(`http://localhost:3000/api/v1/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData),
          })        
          .then(resp => resp.json())
          .then(users => dispatch({ type: 'ADD_USERS', payload: users }))
          .then(loading => dispatch({ type: 'LOADED_FLAG' }))    
    }
 }