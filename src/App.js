import React, { Component } from 'react'
import {connect} from 'react-redux'
import TransactionsContainer from './containers/TransactionsContainer'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <TransactionsContainer/>
      </div>
    );
  }
}

export default App
