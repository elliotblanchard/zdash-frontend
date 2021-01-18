import React from 'react'
import {connect} from 'react-redux'
import {fetchNetworks} from '../actions/fetchNetworks'
import Networks from '../components/Networks'

class NetworksContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchNetworks()
    }

    render() {
        return (
            <div>
                <Networks networks={this.props.networks} loading={this.props.loading}/>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        loading: state.loading,        
        networks: state.networks
    }
}

export default connect(mapStateToProps, {fetchNetworks})(NetworksContainer)