import React, { Component } from 'react'
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/transactions')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render () {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

const mapStateToProps = () => {
  
}

export default connect(mapStateToProps)(App)
