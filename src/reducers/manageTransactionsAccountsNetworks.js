import { StaticRouter } from "react-router-dom";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    transactions: transactionsReducer,
    accounts: accountsReducer,
    accountDetail: accountDetailReducer,
    networks: networksReducer,
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
        case 'LOADING_TRANSACTIONS':
            return [
                ...state
            ]         
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
        case 'LOADING_ACCOUNTS':
            return [
                    ...state
            ]        
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
        case 'LOADING_ACCOUNT_DETAIL':
            return {
                ...state,
                loading: true
            }        
        case 'ADD_ACCOUNT_DETAIL':
            return {
                ...action.payload,
                loading: false
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
        case 'LOADING_NETWORKS':
            return {
                ...state,
                loading: true
            }        
        case 'ADD_NETWORKS':
            return {
                ...action.payload,
                loading: false
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
