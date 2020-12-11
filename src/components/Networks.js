import React from 'react'

 const Networks = ({networks}) => {
    return (
        <div>
      <h1>Network stats</h1>
                <div key={networks.name}>
                    <h3>Name: {networks.name}</h3>
                    <p>Accounts: {networks.accounts}</p>
                    <p>Transactions: {networks.transactions}</p>
                    <p>Block hash: {networks.blockHash}</p>
                    <p>Block number: {networks.blockNumber}</p>
                    <p>Difficulty: {networks.difficulty}</p>
                    <p>Hash rate: {networks.hashrate}</p>
                    <p>Mean block time: {networks.meanBlockTime}</p>
                    <p>Peer count: {networks.peerCount}</p>
                    <p>Protocol version: {networks.protocolVersion}</p>
                    <p>Relay fee: {networks.relayFee}</p>
                    <p>Version: {networks.version}</p>
                    <p>Sub version: {networks.subVersion}</p>
                    <p>Total amount: {networks.totalAmount}</p>
                    <p>Sprout pool: {networks.sproutPool}</p>
                    <p>Sapling pool: {networks.saplingPool}</p>                    
                </div>         
        </div>
    )
 }

 export default Networks 