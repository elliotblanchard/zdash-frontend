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
                {/* Why does prop have to be doubled? */}
                <Networks networks={this.props.networks.networks}/>
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