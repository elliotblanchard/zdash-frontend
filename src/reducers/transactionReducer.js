const transactionReducer = (state = { transactions: []}, action) => {

    return action.payload

}

export default transactionReducer;