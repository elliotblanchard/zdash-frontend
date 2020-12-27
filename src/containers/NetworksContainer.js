import React from 'react'
import {connect} from 'react-redux'

import Spinner from 'react-bootstrap/Spinner'
import Navbar from 'react-bootstrap/Navbar'

import {fetchNetworks} from '../actions/fetchNetworks'
import Networks from '../components/Networks'

class NetworksContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchNetworks()
    }

    handleLoading = () => {
        if(this.props.networks.loading) {
          return <div><Navbar variant="dark" expand="lg"><Spinner animation="border" variant="light" /></Navbar></div>
        } else {
          return <Networks networks={this.props.networks.networks}/>
        }
      }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.handleLoading()}
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        networks: state.networks
    }
}

export default connect(mapStateToProps, {fetchNetworks})(NetworksContainer)