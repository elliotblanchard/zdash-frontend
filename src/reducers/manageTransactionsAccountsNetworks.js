import { combineReducers } from "redux";

const rootReducer = combineReducers({
    transactions: transactionsReducer,
    accounts: accountsReducer,
    accountDetail: accountDetailReducer,
    networks: networksReducer
  });
   
export default rootReducer;

function transactionsReducer(state = { transactions: []}, action) {
    switch (action.type) {
        case 'FETCH_TRANSACTIONS':
            return {transactions: action.payload}
        default:
            return state
    }
}

function accountsReducer(state = { accounts: []}, action) {
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}
        default:
            return state
    }
}

function accountDetailReducer(state = { accountDetail: []}, action) {
    switch (action.type) {
        case 'FETCH_ACCOUNT_DETAIL':
            return {accountDetail: action.payload}
        default:
            return state
    }
}

  function networksReducer(state = { networks: []}, action) {
    switch (action.type) {
        case 'FETCH_NETWORKS':
            return {networks: action.payload}
        default:
            return state
    }
  }  

