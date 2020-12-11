const transactionReducer = (state = { transactions: []}, action) => {

    switch (action.type) {
        case 'FETCH_TRANSACTIONS':
            return {transactions: action.payload}
        default:
            return state
    }
}

export default transactionReducer;