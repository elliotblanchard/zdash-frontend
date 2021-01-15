import React from 'react'
import {connect} from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import Navbar from 'react-bootstrap/Navbar'
import {fetchAccountDetail} from '../actions/fetchAccountDetail'
import AccountDetail from '../components/AccountDetail'

class AccountDetailContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchAccountDetail(this.props.match.params.id)
    }


    render() {
        return (
            <div>
                <AccountDetail accountDetail={this.props.accountDetail}/>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        accountDetail: state.accountDetail
    }
}

export default connect(mapStateToProps, {fetchAccountDetail})(AccountDetailContainer)