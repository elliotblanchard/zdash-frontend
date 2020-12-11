const accountReducer = (state = { accounts: []}, action) => {

    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}
        default:
            return state
    }
}

export default accountReducer;