import { combineReducers } from "redux";

const rootReducer = combineReducers({
    transactions: transactionsReducer,
    accounts: accountsReducer,
    accountDetail: accountDetailReducer,
    networks: networksReducer,
    user: usersReducer,
    loading: loadingReducer
  });
   
export default rootReducer;

function transactionsReducer(state = [
    {
        categories: [],
        display_time: "",
        interval: "",
        number: 0,
        time: 0,
        total: 0,
        unit: ""
    }     
], action) {
    switch (action.type) {       
        case 'ADD_TRANSACTIONS':
            return [
                ...action.payload
            ]
        default:
            return state
    }
}

function accountsReducer(state = [
    {
        address: ""
    }
], action) {
    switch (action.type) {       
        case 'ADD_ACCOUNTS':
            return [
                    ...action.payload                
            ]
        default:
            return state
    }
}

function accountDetailReducer(state = {
    address: "",
    balance: 0.0,
    firstSeen: 0,
    lastSeen: 0,
    minedCount: 0,
    recvCount: 0,
    recvTrans: [],
    sentCount: 0,
    sentTrans: [],
    totalRecv: 0.0,
    totalSent: 0
}, action) {
    switch (action.type) {      
        case 'ADD_ACCOUNT_DETAIL':
            return {
                ...action.payload
            }
        default:
            return state
    }
}

  function networksReducer(state = {
    accounts: "",
    blockHash: "",
    blockNumber: "",
    difficulty: "",
    hashrate: "",
    meanBlockTime: "",
    name: "",
    peerCount: "",
    protocolVersion: "",
    relayFee: "",
    saplingPool: "",
    sproutPool: "",
    subVersion: "",
    totalAmount: "",
    transactions: "",
    version: ""
  }, action) {
    switch (action.type) {       
        case 'ADD_NETWORKS':
            return {
                ...action.payload
            }
        default:
            return state
    }
  }  

  function usersReducer(state = {
    name: "",
    address: ""
  }, action) {
    switch (action.type) {       
        case 'ADD_USERS':
            return {
                ...action.payload
            }
        default:
            return state
    }
  }

  function loadingReducer(state = {
    loading: true
  }, action) {
    switch (action.type) {
        case 'LOADING_FLAG':
            return {
                loading: true
            }        
        case 'LOADED_FLAG':
            return {
                loading: false
            }
        default:
            return state
    }
  }
