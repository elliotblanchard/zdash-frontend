const networkReducer = (state = { networks: []}, action) => {

    switch (action.type) {
        case 'FETCH_NETWORKS':
            return {networks: action.payload}
        default:
            return state
    }
}

export default networkReducer;