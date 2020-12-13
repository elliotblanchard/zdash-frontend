import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchAccountDetail} from '../actions/fetchAccountDetail'
import AccountDetail from '../components/AccountDetail'

class AccountDetailContainer extends React.Component {
  
    componentDidMount() {
        this.props.fetchAccountDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                {/* Why does prop have to be doubled? */}
                <AccountDetail accountDetail={this.props.accountDetail.accountDetail}/>
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