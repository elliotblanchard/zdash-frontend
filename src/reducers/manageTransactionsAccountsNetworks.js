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
        case 'LOADING_TRANSACTIONS':
            return {
                transactions: action.payload,
                loading: true
            }        
        case 'ADD_TRANSACTIONS':
            return {
                transactions: action.payload,
                loading: false
            }
        default:
            return state
    }
}

function accountsReducer(state = { accounts: []}, action) {
    switch (action.type) {
        case 'LOADING_ACCOUNTS':
            return {
                accounts: action.payload,
                loading: true
            }        
        case 'ADD_ACCOUNTS':
            return {
                accounts: action.payload,
                loading: false
            }
        default:
            return state
    }
}

function accountDetailReducer(state = { accountDetail: []}, action) {
    switch (action.type) {
        case 'LOADING_ACCOUNT_DETAIL':
            return {
                accountDetail: action.payload,
                loading: true
            }        
        case 'ADD_ACCOUNT_DETAIL':
            return {
                accountDetail: action.payload,
                loading: false
            }
        default:
            return state
    }
}

  function networksReducer(state = { networks: []}, action) {
    switch (action.type) {
        case 'LOADING_NETWORKS':
            return {
                networks: action.payload,
                loading: true
            }        
        case 'ADD_NETWORKS':
            return {
                networks: action.payload,
                loading: false
            }
        default:
            return state
    }
  }  

