import React from 'react'
import {connect} from 'react-redux'
import {fetchNetworks} from '../actions/fetchNetworks'
import Networks from '../components/Networks'

class NetworksContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchNetworks()
    }

    //handleLoading = () => {
        //if( (this.props.networks.loading) || (!this.props.networks.networks) || (this.props.networks.networks.length === 0) ) {
        //  return (
        //    <div>
        //        <Navbar variant="dark" expand="lg">
        //            <Spinner animation="border" variant="light" />
        //        </Navbar>
        //    </div>
        //    )
        //} else {
        //  return (
        //    <div>
        //        <Networks networks={this.props.networks.networks}/>
        //    </div>
        //  )
        //}
    //}

    render() {
        return (
            <div>
                <Networks networks={this.props.networks}/>
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