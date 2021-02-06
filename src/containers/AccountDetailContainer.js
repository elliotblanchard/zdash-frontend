import React from 'react'
import {connect} from 'react-redux'
import {fetchAccountDetail} from '../actions/fetchAccountDetail'
import AccountDetail from '../components/AccountDetail'

class AccountDetailContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchAccountDetail(this.props.match.params.id)
    }


    render() {
        return (
            <div>
                <AccountDetail accountDetail={this.props.accountDetail} loading={this.props.loading} user={this.props.user} />
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        loading: state.loading,         
        accountDetail: state.accountDetail,
        user: state.user
    }
}

export default connect(mapStateToProps, {fetchAccountDetail})(AccountDetailContainer)